import { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, patient, patientName } = appointment;

  useEffect(() => {
    fetch("https://secret-coast-36592.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: patientName,
              email: patient,
            },
          },
        });
      if (intentError) {
        setCardError(intentError.message);
        setSuccess("");
      } else {
        setPaymentId(paymentIntent?.id);
        setSuccess("Congratulations! Payment is Completed");
      }
      console.log("[PaymentMethod]", paymentMethod);
      //store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://secret-coast-36592.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm mt-4 btn-success"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{cardError}</p>
      <div className="text-green-500">
        <p>{success}</p>
        {success && (
          <p>
            Your Payment ID:
            <span className="text-orange-600 font-bold">{paymentId}</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
