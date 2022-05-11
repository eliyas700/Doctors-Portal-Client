import React, { useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col  banner pb-20 lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <div>
            <p>Your have Selected: {format(date, "PP")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
