import React from "react";
import Link from "next/link";
import Image from "next/image";

import caseStudiesImg1 from "@/public/images/case-studies/case-studies1.jpg";
import caseStudiesImg2 from "@/public/images/case-studies/case-studies2.jpg";
import caseStudiesImg3 from "@/public/images/case-studies/case-studies3.jpg";
import caseStudiesImg4 from "@/public/images/case-studies/case-studies4.jpg";
import caseStudiesImg5 from "@/public/images/case-studies/case-studies5.jpg";
import caseStudiesImg6 from "@/public/images/case-studies/case-studies6.jpg";
import Project from "./Project";

const PortfolioStyle1 = ({ projects }) => {
  return (
    <>
      <div className="case-studies-area pb-100 bg-f1f5fd">
        <div className="container">
          <div className="row">
            {/* <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project /> */}
            {
              projects.map((project) => (
                <Project key={project.id} project={project} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioStyle1;
