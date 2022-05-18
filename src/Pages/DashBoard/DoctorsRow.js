import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-10 rounded-full ">
            <img src={doctor.img} alt={doctor.name} />
          </div>
        </div>
      </td>
      <td>{doctor.name}</td>
      <td>{doctor.email}</td>
      <td>{doctor.specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-doctor-modal"
          class="btn  btn-xs btn-error modal-button"
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
