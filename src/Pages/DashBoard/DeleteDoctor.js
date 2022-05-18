import React from "react";
import { toast } from "react-toastify";

const DeleteDoctor = ({ doctor, refetch, setDeletingDoctor }) => {
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctors/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(` Dr. ${doctor.name} is Removed Successfully`);
          refetch();
          setDeletingDoctor(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-doctor-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you Sure you want to Remove Dr. {doctor.name} ?
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(doctor.email)}
              class="btn btn-xs btn-error"
            >
              Confirm
            </button>
            <label for="delete-doctor-modal" class="btn btn-xs">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctor;
