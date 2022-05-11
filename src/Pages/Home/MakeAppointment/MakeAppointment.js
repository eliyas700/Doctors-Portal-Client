import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appointment})`,
      }}
      className="flex justify-center mt-[160px] mb-10 items-center"
    >
      <div className="flex-1 hidden lg:block mt-[-120px]">
        <img src={doctor} alt="" />
      </div>
      <div className="card-body flex-1  ">
        <h2 className="card-title text-[20px]  text-secondary ">Appointment</h2>
        <h4 className="text-white text-[36px] font-semibold">
          Make an appointment Today
        </h4>
        <p className=" mx-auto mt-[26px] mr-9 text-slate-200">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
          <div className="card-actions mt-[40px]">
            <button className=" btn bg-gradient-to-r from-secondary to-primary border-0 uppercase font-bold text-white ">
              Get Started
            </button>
          </div>
        </p>
      </div>
    </section>
  );
};

export default MakeAppointment;
