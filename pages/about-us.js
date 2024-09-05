import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import AboutArea from "@/components/AboutUs/AboutArea";
import Overview from "@/components/AboutUs/Overview";
import WorkingProcess from "@/components/AboutUs/WorkingProcess";
import Funfacts from "@/components/AboutUs/Funfacts";
import Team from "@/components/AboutUs/Team";
import Testimonials from "@/components/AboutUs/Testimonials";
import Partners from "@/components/AboutUs/Partners";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title red-light-color">About Us</span>
            <h1>Hello World! This is Abev!</h1>
          </div>
        </div>
      </div>
      <AboutArea />
      <Overview />
      <WorkingProcess />
      {/* <Funfacts /> */}
      <Team />

      <FooterOne />
    </>
  );
};

export default AboutUs;
