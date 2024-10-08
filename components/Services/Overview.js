import React from "react";
import Link from "next/link";
import Image from "next/image";

import overviewImg1 from "@/public/images/overview/overview1.png";
import overviewImg2 from "@/public/images/overview/overview2.png";

const Overview = () => {
  return (
    <div className="overview-area ptb-100 bg-f9f9f9">
      <div className="container">
        <div className="overview-box">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 overview-content">
              <span className="sub-title">Our Services</span>
              <h2>Best IT & technology service in your area</h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    <Link href="/services/services-details">
                      Design & Development
                    </Link>
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    <Link href="/services/services-details">
                      Android Apps Development
                    </Link>
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    <Link href="/services/services-details">
                      Laravel Web Development
                    </Link>
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    <Link href="/services/services-details">
                      React Web Development
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 overview-image">
              <Image src={overviewImg2} data-aos="fade-up" alt="overview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
