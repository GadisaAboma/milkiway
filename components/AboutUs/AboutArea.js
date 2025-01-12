import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "@/public/images/about/about1.jpg";

const AboutArea = () => {
  return (
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-image bg1">
              <Image src={aboutImg} alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="about-content"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="sub-title">About Us</span>
              <h2>The story behind Milkiway</h2>
              <p>
                Delivering excellence in IT services and solutions that empower
                your organization to achieve its goals and overcome challenges.
              </p>
              <ul className="about-list">
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Integrated Innovation
                  <Link href="#" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Collaborative Culture
                  <Link href="#" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Business Planning
                  <Link href="#" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Professional Team
                  <Link href="#" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
