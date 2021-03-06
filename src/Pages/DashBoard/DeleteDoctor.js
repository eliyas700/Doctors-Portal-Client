import React from "react";
import { toast } from "react-toastify";

const DeleteDoctor = ({ doctor, refetch, setDeletingDoctor }) => {
  const handleDelete = (email) => {
    fetch(`https://secret-coast-36592.herokuapp.com/doctors/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(` Dr. ${doctor.name} is Removed Successfully`);
          refetch();
          setDeletingDoctor(null);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-doctor-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you Sure you want to Remove Dr. {doctor.name} ?
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(doctor.email)}
              className="btn btn-xs btn-error"
            >
              Confirm
            </button>
            <label for="delete-doctor-modal" className="btn btn-xs">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctor;
