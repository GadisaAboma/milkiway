import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg10 from "@/public/images/banner/banner10.jpg";
import bannerImg11 from "@/public/images/banner/banner11.jpg";
import bannerImg12 from "@/public/images/banner/banner12.jpg";

const Banner = () => {
  return (
    <div className="medical-banner-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="medical-banner-content">
              <h1>The world&apos;s leading medical services provider</h1>
              <p>
                At Advance Innovation For IT Solutions, we are committed to
                redefining the technological landscape by providing cutting-edge
                IT solutions tailored to meet modern business needs. Our team of
                skilled engineers and consultants leverages the latest
                advancements in technology to design and implement scalable,
                secure, and robust solutions.
              </p>
              <Link href="/contact" className="btn-style-one red-light-color">
                Get Started Now<i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="medical-banner-image">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="image">
                    <Image
                      src={bannerImg10}
                      data-aos="flip-left"
                      data-aos-easing="ease"
                      data-aos-delay="300"
                      alt="banner-image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="image">
                    <Image
                      src={bannerImg11}
                      data-aos="fade-up"
                      data-aos-easing="ease"
                      data-aos-delay="300"
                      alt="banner-image"
                    />
                  </div>
                  <div className="image">
                    <Image
                      src={bannerImg12}
                      data-aos="fade-down"
                      data-aos-easing="ease"
                      data-aos-delay="300"
                      alt="banner-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
