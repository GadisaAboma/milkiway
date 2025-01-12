import React, { useEffect } from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import TeamOne from "../components/AboutUs/Team";
import { useDispatch, useSelector } from "react-redux";
import { setTeams } from "@/store/slices/teamSlice";
import { fetchTeams } from "@/utils/api";

const Team = () => {
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
    return <div>loading ...</div>
  }
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title">Our Creative Team</span>
            <h1>Our team believes you deserve only the best</h1>
          </div>
        </div>
      </div>
      {/* <TeamOne /> */}
      <TeamOne showButton={false} teams={teams} />
      <FooterOne />
    </>
  );
};

export default Team;
