import React from "react";
import footer from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" href="/">
            Emergency Checkup
          </a>
          <a className="link link-hover" href="/">
            Monthly CheckUp
          </a>
          <a className="link link-hover" href="/">
            Weekly Checkup
          </a>
          <a className="link link-hover" href="/">
            Deep Checkup
          </a>
        </div>
        <div>
          <span className="footer-title" href="/">
            Our Health
          </span>
          <a className="link link-hover" href="/">
            Fluoride Treatment{" "}
          </a>
          <a className="link link-hover" href="/">
            Cavity Filling
          </a>
          <a className="link link-hover" href="/">
            Teeth Whitening{" "}
          </a>
        </div>
        <div>
          <span className="footer-title">Our Address </span>
          <a className="link link-hover" href="/">
            NewYork -1010 ,Hudson
          </a>
        </div>
      </div>
      <footer className="footer footer-center font-semibold  mt-10">
        <div>
          <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
