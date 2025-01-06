import Navbar from "@/components/Layout/Navigations/Navbar1";
import Banner from "@/components/HomePages/Index/Banner";
import Overview from "@/components/Services/Overview";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Team from "../components/AboutUs/Team";
import Projects from "@/components/HomePages/App/Projects";
import HomeNavBar from "@/components/Layout/Navigations/HomeNavbar";

export default function Index() {
  return (
    <>
      <HomeNavBar />
      <Banner />
      {/* <Helpdesk /> */}
      <Overview />
      {/* <WhatWeDo /> */}

      {/* <TestimonialTwo /> */}
      <Projects />
      <Team showButton={true} />
      {/* <BlogPostStyle1 /> */}
      {/* <SubscribeStyle1 /> */}
      {/* <PartnerStyle1 /> */}
      <FooterOne />
    </>
  );
}
