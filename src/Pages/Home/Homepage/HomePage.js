import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import Exceptional from "../Exceptional/Exceptional";
import InfoCard from "../InfoCard/InfoCard";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Reviews from "../Testimonials/Reviews";

const HomePage = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppointment></MakeAppointment>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
