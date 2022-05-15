import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const AppointmentAvailable = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const fomattedDate = format(date, "PP");
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", fomattedDate], () =>
    fetch(`http://localhost:5000/available?date=${fomattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${fomattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [fomattedDate]);

  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        Appointment Available: {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          refetch={refetch}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppointmentAvailable;
