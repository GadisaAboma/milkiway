import React from "react";
import Image from "next/image";
import Link from "next/link";

import BannerImage from "@/public/images/banner/banner1.png";
import shapeImg1 from "@/public/images/shape/shape1.png";
import shapeImg2 from "@/public/images/shape/shape2.png";
import shapeImg3 from "@/public/images/shape/shape3.png";

const Banner = () => {
  return (
    <div className="it-startup-banner-area">
      <div className="container">
        <div className="row align-items-center m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="it-startup-banner-content">
              <h1>Secure IT solutions for a more secure environment</h1>
              <p>
              At Advance Innovation For IT Solutions, we are committed to redefining the technological landscape by providing cutting-edge IT solutions tailored to meet modern business needs. Our team of skilled engineers and consultants leverages the latest advancements in technology to design and implement scalable, secure, and robust solutions.
              </p>
              <Link href="/contact" className="btn-style-one red-light-color">
                Get Started Now<i className="bx bx-chevron-right"></i>

              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 p-0">
            <div className="it-startup-banner-image" data-aos="fade-up">
              <Image src={BannerImage} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <Image src={shapeImg1} alt="shape" />
      </div>
      <div className="shape2">
        <Image src={shapeImg2} alt="shape" />
      </div>
      <div className="shape3">
        <Image src={shapeImg3} alt="shape" />
      </div>
    </div>
  );
};

export default Banner;
