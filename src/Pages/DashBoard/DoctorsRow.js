import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, index, refetch }) => {
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
        }
      });
  };
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
        <button
          onClick={() => handleDelete(doctor.email)}
          class="btn btn-xs btn-error"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default DoctorsRow;
