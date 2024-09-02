import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg5 from "@/public/images/blog/blog5.jpg";
import blogImg6 from "@/public/images/blog/blog6.jpg";
import blogImg7 from "@/public/images/blog/blog7.jpg";

const Blog = () => {
  return (
    <div className="blog-area pb-75 pt-100">
      <div className="container">
        <div className="section-title">
          <h2 className="nunito-font">Our latest articles & resources</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            mauris amet, placerat fames orci elementum adipiscing.
          </p>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-blog-post-item green-color">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">

                  <Image src={blogImg5} alt="blog-image" />

                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>
                    <Link href="/blogs/blog-tag">
                      Design
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    24 Nov, 2021
                  </li>
                </ul>
                <h3 className="nunito-font">
                  <Link href="/blogs/blog-details">
                    How sellers win when housing inventory is low
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blogs/blog-details" className="link-btn">
                  Read More<i className="bx bx-chevron-right"></i>

                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-blog-post-item green-color">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">

                  <Image src={blogImg6} alt="blog-image" />

                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>
                    <Link href="/blogs/blog-tag">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    25 Nov, 2021
                  </li>
                </ul>
                <h3 className="nunito-font">
                  <Link href="/blogs/blog-details">
                    Why a wave of foreclosures is not on the way
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blogs/blog-details" className="link-btn">
                  Read More<i className="bx bx-chevron-right"></i>

                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="single-blog-post-item green-color">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">

                  <Image src={blogImg7} alt="blog-image" />

                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>
                    <Link href="/blogs/blog-tag">
                      Startup
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    23 Nov, 2021
                  </li>
                </ul>
                <h3 className="nunito-font">
                  <Link href="/blogs/blog-details">
                    Why now is a great time to sell your house
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blogs/blog-details" className="link-btn">
                  Read More<i className="bx bx-chevron-right"></i>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
