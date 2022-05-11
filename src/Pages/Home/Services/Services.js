import React from "react";
import ServiceItem from "./ServiceItem";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div className="mb-20">
      <h4 className="uppercase text-center mt-16 mb-5 font-medium text-secondary text-[20px]">
        Our Services
      </h4>
      <h5 className="text-[35px] text-accent text-center mb-[70px]">
        Services We Provide
      </h5>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <ServiceItem title="Fluoride Treatment" img={fluoride}></ServiceItem>
        <ServiceItem title="Cavity Filling" img={cavity}></ServiceItem>
        <ServiceItem title="Teeth Whitening" img={whitening}></ServiceItem>
      </div>
    </div>
  );
};

export default Services;
