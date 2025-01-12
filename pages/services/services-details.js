import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import DetailsContent from "@/components/Services/DetailsContent";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import { useRouter } from "next/router";
import { services } from "models/global-data";

const ServicesDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = services.find((element) => element.id === parseInt(id));

  console.log("111111111111111");

  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>{service.title}</h1>
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
      <DetailsContent {...service} />
      <div className="pb-100">
        <GetStarted />
      </div>
      <FooterOne />
    </>
  );
};

export default ServicesDetails;
