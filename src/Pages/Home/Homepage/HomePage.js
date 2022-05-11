import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import Exceptional from "../Exceptional/Exceptional";
import InfoCard from "../InfoCard/InfoCard";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Reviews from "../Testimonials/Reviews";

const HomePage = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppointment></MakeAppointment>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
