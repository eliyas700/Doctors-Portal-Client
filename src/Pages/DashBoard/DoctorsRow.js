import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-10 rounded-full ">
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
          className="btn  btn-xs btn-error modal-button"
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
