import React from "react";
import Image from "next/image";
import Link from "next/link";

import caseStudiesImg1 from "@/public/images/case-studies/case-studies1.jpg";
import caseStudiesImg2 from "@/public/images/case-studies/case-studies2.jpg";
import baseUrl from "@/utils/api";

const PortfolioDetailsContent = ({ project }) => {
  console.log("projects ", project);
  const imageBaseUrl = [];
  // project?.images?.map((image) => `${baseUrl}storage/${image}`) || [];
  // Parse the JSON string into an array
  const imagesArray = JSON.parse(project.images);

  // Iterate over the parsed array
  imagesArray.forEach((element) => {
    imageBaseUrl.push(baseUrl + "storage/" + element);
  });

  return (
    <>
      <div className="portfolio-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="portfolio-details-image">
                <div className="row">
                  {imageBaseUrl.map((image, index) => (
                    <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                      <div className="image">
                        <a href={image} className="popup-image">
                          <Image
                            src={image}
                            alt="portfolio-details"
                            width={200}
                            height={200}
                            unoptimized={true}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                  {/* <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="image">
                      <a
                        href="/images/case-studies/case-studies2.jpg"
                        className="popup-image"
                      >
                        <Image src={caseStudiesImg2} alt="portfolio-details" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="portfolio-details-desc pl-15">
                <h4>About the Projects</h4>
                {/* <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    nonumy
                  </a>{" "}
                  tempor invidunt ut labore et dolore magna erat. At vero eos et
                  accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea <strong>takimata</strong> sanctus est Lorem
                  ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur{" "}
                  <strong>sadipscing</strong> elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. Stet{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    clita
                  </a>{" "}
                  kasd gubergren, no sea takimata sanctus est lorem ipsum dolor
                  sit amet.
                </p> */}
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <h4>Projects Information</h4>
                <ul className="info">
                  <li>
                    <span>CLIENT:</span> {project.client_name}
                  </li>
                  <li>
                    <span>PUBLISHED:</span> {project.end_date}
                  </li>
                  <li>
                    <span>SERVICES:</span>{" "}
                    <Link href="/portfolio">{project.category.name}</Link>
                  </li>
                  <li>
                    <span>INDUSTRY:</span>{" "}
                    <Link href="/portfolio">Lifestyle</Link>
                  </li>
                  <li>
                    <span>LOCATION:</span> {project.location}
                  </li>
                  <li>
                    <span>WEBSITE:</span>{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                      yourdomain.com
                    </a>
                  </li>
                </ul>
                {/* <h4>Some Of Our Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur{" "}
                  <strong>sadipscing</strong> elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </li>
                  <li>
                    Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et.
                  </li>
                  <li>
                    Sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.
                  </li>
                </ul> */}
                <a
                  href="#"
                  target="_blank"
                  className="btn-style-one red-light-color"
                  rel="noreferrer"
                >
                  Check Live Link <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
