import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col  banner pb-20 lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="">
          <h1 class="text-5xl  w-3/4 font-bold">Your New Smiles Start Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class=" btn bg-gradient-to-r from-secondary to-primary border-0 uppercase font-bold text-white ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
