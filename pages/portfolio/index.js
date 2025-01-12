import React, { useEffect } from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PortfolioStyle1 from "@/components/Portfolio/PortfolioStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "@/store/slices/projectSlice";
import { fetchProjects } from "@/utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Portfolio1 = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = await fetchProjects();
        dispatch(setProjects(data)); // Dispatch to Redux
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    loadProjects();
  }, [dispatch]);

  if (!projects) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full height of the viewport
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>We’ve accomplished so much take a look at some of our work!</h1>
          </div>
        </div>
      </div>
      <PortfolioStyle1 projects={projects} />
      <FooterOne />
    </>
  );
};

export default Portfolio1;
