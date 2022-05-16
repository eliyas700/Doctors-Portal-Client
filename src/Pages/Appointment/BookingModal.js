import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { slots, name, _id } = treatment;
  const [user] = useAuthState(auth);
  const fomattedDate = format(date, "PP");
  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      slot,
      date: fomattedDate,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${fomattedDate} at ${slot}`);
        } else {
          toast.error(
            `You already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-3">{treatment.name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 justify-items-center "
          >
            <input
              type="text"
              disabled
              value={format(date, "PP") || " "}
              className="input input-bordered  w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              readOnly
              value={user?.displayName || " "}
              placeholder="Your Name"
              className="input input-bordered  w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              readOnly
              value={user?.email || " "}
              className="input input-bordered  w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered  w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
