import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import PortfolioDetailsContent from "@/components/Portfolio/PortfolioDetailsContent";

const PortfolioDetails = () => {
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Finance Consulting</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>Finance Consulting</li>
            </ul>
          </div>
        </div>
      </div>
      <PortfolioDetailsContent />
      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
