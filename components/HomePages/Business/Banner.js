import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="business-banner-area">
      <div className="container-fluid">
        <div className="business-banner-content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            Ready to take your business growth to the next level?
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          At Advance Innovation For IT Solutions, we are committed to redefining the technological landscape by providing cutting-edge IT solutions tailored to meet modern business needs. Our team of skilled engineers and consultants leverages the latest advancements in technology to design and implement scalable, secure, and robust solutions.
          </p>
          <div
            className="btn-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Link href="/contact" className="btn-style-one red-light-color">
              Get Started Now<i className="bx bx-chevron-right"></i>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
