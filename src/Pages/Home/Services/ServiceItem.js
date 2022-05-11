import React from "react";

const ServiceItem = ({ img, title }) => {
  return (
    <div
      style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)" }}
      className="card card-compact mx-auto w-96 bg-base-100 rounded-[18px] "
    >
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center ">
        <h2 className="card-title mx-auto text-accent  ">{title}</h2>
        <p className="text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          doloremque dicta animi ?
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
