import React, { useEffect } from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import AboutArea from "@/components/AboutUs/AboutArea";
import WorkingProcess from "@/components/AboutUs/WorkingProcess";
import Funfacts from "@/components/AboutUs/Funfacts";
import Team from "@/components/AboutUs/Team";
import Testimonials from "@/components/AboutUs/Testimonials";
import Partners from "@/components/AboutUs/Partners";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import { setTeams } from "@/store/slices/teamSlice";
import { fetchTeams } from "@/utils/api";
import { useDispatch, useSelector } from "react-redux";

const AboutUs = () => {
  const dispatch = useDispatch(); // Initialize the dispatch();
  const teams = useSelector((state) => state.teams.teams); // Initialize the useSelector((state) => state.teams.teams);
  useEffect(() => {
    const loadTeams = async () => {
      try {
        const teams = await fetchTeams();
        console.log(teams);
        dispatch(setTeams(teams));
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    loadTeams();
  }, [dispatch]);

  if (!teams) {
    return <div>loading ...</div>;
  }
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
      <WorkingProcess />
      {/* <Funfacts /> */}
      <Team teams={teams} />

      <FooterOne />
    </>
  );
};

export default AboutUs;
