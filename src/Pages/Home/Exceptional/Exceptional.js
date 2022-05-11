import React from "react";
import treatment from "../../../assets/images/treatment.png";
const Exceptional = () => {
  return (
    <div class="card lg:card-side ">
      <figure>
        <img
          className=" w-[322px] h-[406px] lg:w-[458px] lg:h-[576px] rounded-[8px]"
          src={treatment}
          alt="Album"
        />
      </figure>
      <div class="card-body my-auto ">
        <h2 class="card-title w-3/4 mx-auto  leading-[55px] font-[700] font-sans text-accent text-[48px]">
          Exceptional Dental Care ,on Your Terms
        </h2>
        <p className="w-3/4 mx-auto mt-[26px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
          <div class="card-actions mt-[40px]">
            <button class=" btn bg-gradient-to-r from-secondary to-primary border-0 uppercase font-bold text-white ">
              Get Started
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Exceptional;
