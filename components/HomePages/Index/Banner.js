import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

import BannerImage from "@/public/images/banner/banner1.png";
// Uncomment these if you want to use the shape images
// import shapeImg1 from "@/public/images/shape/shape1.png";
// import shapeImg2 from "@/public/images/shape/shape2.png";
// import shapeImg3 from "@/public/images/shape/shape3.png";

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          THREE, // Explicitly pass the THREE object
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,

          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 2.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="it-startup-banner-area" ref={myRef}>
      <div className="container">
        <div className="row align-items-top m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="it-startup-banner-content">
              <h2 style={{ color: "white" }}>
                Your Trusted Technology Partner
              </h2>
              <p style={{ color: "white" }}>
                Delivering excellence in IT services and solutions that empower
                your organization to achieve its goals and overcome challenges.
              </p>
              <Link href="/contact" className="btn-style-one red-light-color">
                Contact Us<i className="bx bx-chevron-right"></i>
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

      {/* Shape Images (Optional, Uncomment to Use) */}
      {/* <div className="shape1">
        <Image src={shapeImg1} alt="shape" />
      </div>
      <div className="shape2">
        <Image src={shapeImg2} alt="shape" />
      </div>
      <div className="shape3">
        <Image src={shapeImg3} alt="shape" />
      </div> */}
    </div>
  );
};

export default Banner;
