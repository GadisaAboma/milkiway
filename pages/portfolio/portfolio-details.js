import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import { useRouter } from "next/router";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import PortfolioDetailsContent from "@/components/Portfolio/PortfolioDetailsContent";
import { fetchProjectById } from "@/utils/api";
import { useState, useEffect } from "react";

const PortfolioDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get project id from URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const data = await fetchProjectById(id); // Fetch project data by id
          setProject(data);
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };

      fetchProject();
    }
  }, [id]); // Re-run when 'id' changes

  if (!project) return <div>Loading...</div>;
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>{project.category.name}</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>{project.category.name}g</li>
            </ul>
          </div>
        </div>
      </div>
      <PortfolioDetailsContent project={project} />
      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
