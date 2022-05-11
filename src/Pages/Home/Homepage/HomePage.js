import React from "react";
import Banner from "../Banner/Banner";
import Exceptional from "../Exceptional/Exceptional";
import InfoCard from "../InfoCard/InfoCard";
import Services from "../Services/Services";

const HomePage = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <Exceptional></Exceptional>
    </div>
  );
};

export default HomePage;
