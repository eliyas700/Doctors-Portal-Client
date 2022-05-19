import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary mx-auto ">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-50">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length < 1 ? "Space" : "Spaces"} Available
        </p>
        <p>
          <small>${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            className=" btn bg-gradient-to-r from-secondary to-primary border-0 uppercase font-bold text-white "
            onClick={() => setTreatment(service)}
            htmlFor="my-modal-6"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
