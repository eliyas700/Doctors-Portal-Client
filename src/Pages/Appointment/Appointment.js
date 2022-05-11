import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AppointmentAvailable from "./AppointmentAvailable";
import AppointmentBanner from "./AppointmentBanner";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AppointmentAvailable date={date}></AppointmentAvailable>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
