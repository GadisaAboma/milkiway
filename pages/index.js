import Navbar from "@/components/Layout/Navigations/Navbar1";
import Banner from "@/components/HomePages/Index/Banner";
import Overview from "@/components/Services/Overview";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import Team from "../components/AboutUs/Team";
import Projects from "@/components/HomePages/App/Projects";
import HomeNavBar from "@/components/Layout/Navigations/HomeNavbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTeams } from "@/utils/api";
import { setProjects } from "@/store/slices/projectSlice";
import { setTeams } from "@/store/slices/teamSlice";

export default function Index() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const teams = useSelector((state) => state.teams.teams);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        const teams = await fetchTeams();
        console.log(teams);
        dispatch(setTeams(teams));
        dispatch(setProjects(data)); // Dispatch to Redux
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    loadProjects();
  }, [dispatch]);

  return (
    <>
      <HomeNavBar />
      <Banner />
      <Overview />
      <Projects projects={projects} />
      <Team showButton={true} teams={teams} />
      <FooterOne />
    </>
  );
}
