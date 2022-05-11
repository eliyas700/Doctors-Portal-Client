import React from "react";
import appointment from "../../../assets/images/appointment.png";
const Contact = () => {
  return (
    <div
      className="mt-20"
      style={{
        backgroundImage: `url(${appointment})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="hero min-h-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-min-[460px] max-w-sm  ">
              <div className="card-body">
                <h2 className="font-semibold text-secondary text-xl">
                  Contact Us
                </h2>
                <h2 className="text-white text-[28px] ">
                  Stay Connected With Us
                </h2>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Bio"
                  ></textarea>
                </div>

                <button className=" btn mx-auto mt-5 max-w-[120px] bg-gradient-to-r from-secondary to-primary border-0 uppercase font-bold text-white ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
