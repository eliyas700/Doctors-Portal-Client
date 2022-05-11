import React from "react";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col  banner pb-20 lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className=" lg:mr-10">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
