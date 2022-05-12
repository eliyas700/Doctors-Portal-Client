import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, date, setTreatment }) => {
  const { slots, name, _id } = treatment;
  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="my-modal-6"
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
              value={format(date, "PP")}
              className="input input-bordered  w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered  w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
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
