import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const InfoCard = () => {
  return (
    <div className="grid  py-2 px-2 text-white grid-cols-1   lg:grid-cols-3 gap-7">
      <div class="card py-2 pl-5 lg:card-side  bg-gradient-to-r from-secondary to-primary shadow-xl">
        <figure>
          <img src={clock} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Opening Hours</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div class="card py-2 pl-5 lg:card-side  bg-accent shadow-xl">
        <figure>
          <img src={marker} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Visit Our Location</h2>
          <p>Brooklyn,NY 10036, United States</p>
        </div>
      </div>
      <div class="card py-2 pl-5 lg:card-side  bg-gradient-to-r from-secondary to-primary shadow-xl">
        <figure>
          <img src={phone} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Contact Us Now </h2>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
