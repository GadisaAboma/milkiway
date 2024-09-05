import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import DetailsContent from "@/components/Services/DetailsContent";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const ServicesDetails = () => {
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Android Apps Development</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Services Details</li>
            </ul>
          </div>
        </div>
      </div>
      <DetailsContent />
      <div className="pb-100">
        <GetStarted />
      </div>
      <FooterOne />
    </>
  );
};

export default ServicesDetails;
