import Link from "next/link";
import React from "react";
import Image from "next/image";

import caseStudiesImg1 from "@/public/images/case-studies/case-studies1.jpg";

export default function Project() {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="single-case-studies-box">
        <Link href="/portfolio/portfolio-details" className="d-block image">
          <Image src={caseStudiesImg1} alt="case-studies-image" />
        </Link>
        <div className="content">
          {/* <div className="icon">
          <i className="flaticon-startup"></i>
        </div> */}
          <h3>
            <Link href="/portfolio/portfolio-details">Business Startup</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Sed est
            non feugiat sagi ttis donec.
          </p>
          <Link href="/portfolio/portfolio-details" className="link-btn">
            Detail<i className="bx bx-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
