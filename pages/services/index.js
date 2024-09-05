import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import HelpDesk from "@/components/Services/HelpDesk";
import Overview from "@/components/Services/Overview";
import WhatWeDo from "@/components/Services/WhatWeDo";
import Faq from "@/components/Services/Faq";
import Subscribe from "@/components/Services/Subscribe";
import Partners from "@/components/Services/Partners";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const Services = () => {
  return (
    <>
      <Navbar />
      <PageTopTitle subTitle=" " title=" " />
      <HelpDesk />
      <Overview />
      {/* <WhatWeDo /> */}

      <FooterOne />
    </>
  );
};

export default Services;
