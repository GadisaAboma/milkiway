import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg4 from "@/public/images/banner/banner4.png";
import shapeImg7 from "@/public/images/shape/shape7.png";
import shapeImg6 from "@/public/images/shape/shape6.png";

const Banner = () => {
	return (
        <div className="insurance-banner-area">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="insurance-banner-content">
							<span
								className="sub-title"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								#Life Insurance
							</span>
							<h1
								data-aos="fade-up"
								data-aos-duration="1200"
								data-aos-delay="100"
								className="nunito-font"
							>
								We make getting life insurance a breeze
							</h1>
							<p
								data-aos="fade-up"
								data-aos-duration="1200"
								data-aos-delay="200"
							>
								At Advance Innovation For IT Solutions, we are committed to redefining the technological landscape by providing cutting-edge IT solutions tailored to meet modern business needs. Our team of skilled engineers and consultants leverages the latest advancements in technology to design and implement scalable, secure, and robust solutions.
							</p>
							<div
								className="btn-box"
								data-aos="fade-up"
								data-aos-duration="1200"
								data-aos-delay="300"
							>
								<Link href="/contact" className="btn-style-one dark-green-color">
                                    Get Started Now{" "}
                                    <i className="bx bx-chevron-right"></i>

                                </Link>

								<Link href="/about-us-2" className="btn-style-one white-color">
                                    About Us{" "}
                                    <i className="bx bx-chevron-right"></i>

                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="insurance-banner-image">
							<Image
								src={bannerImg4}
								data-aos="fade-up"
								data-aos-duration="1200"
								alt="banner-image"
							/>

							<div className="shape7">
								<Image
									src={shapeImg7}
									data-speed="0.10"
									data-revert="true"
									alt="shape"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape6">
				<Image 
					src={shapeImg6}
					alt="shape" 
				/>
			</div>
		</div>
    );
};

export default Banner;
