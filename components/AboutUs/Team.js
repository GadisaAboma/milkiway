import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import bgShape1 from "@/public/images/shape/bg-shape1.jpg";
import baseUrl from "@/utils/api";

const Team = ({ showButton, teams }) => {
  const images = [
    logo, // Include the default image
    ...teams.map((team) => `${baseUrl}storage/${team.image}`), // Add team images dynamically
  ];

  return (
    <div className="team-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div
              className="team-content"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="sub-title">Our Creative Team</span>
              <h2>
                Our team is dedicated to ensuring you receive the highest
                quality
              </h2>
              <p>
                Our team is committed to providing exceptional quality and
                service. We understand that you deserve nothing less than the
                finest. Your satisfaction is our top priority, and we strive to
                exceed your expectations.
              </p>
              {showButton && (
                <Link href="/team" className="btn-style-one red-light-color">
                  Meet Our Team<i className="bx bx-chevron-right"></i>
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="team-member-list">
              <ul>
                {images.map((image, index) =>
                  index == 0 ? (
                    <li data-aos="zoom-in" data-aos-duration="1200" key={index}>
                      <Image src={image} alt="member-image" />
                    </li>
                  ) : (
                    <li
                      key={index}
                      data-aos={
                        index === 0
                          ? "zoom-in"
                          : index === 1 || index === 2 || index === 4
                          ? "fade-down"
                          : "fade-up"
                      }
                      data-aos-duration="1200"
                      data-aos-delay={index + 1 * 100}
                    >
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="member-image"
                        unoptimized={true}
                      />
                    </li>
                  )
                )}
              </ul>

              {/* <ul>
                <li data-aos="zoom-in" data-aos-duration="1200">
                  <Image src={teamImg1} alt="member-image" />
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <Image src={teamImg2} alt="member-image" />
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Image src={teamImg3} alt="member-image" />
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Image src={teamImg4} alt="member-image" />
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <Image src={teamImg5} alt="member-image" />
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <Image src={teamImg6} alt="member-image" />
                </li>
              </ul> */}
              <Image src={bgShape1} alt="bg-image" className="bg-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
