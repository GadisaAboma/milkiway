import React from "react";
import Image from "next/image";

import workingProcessImg from "@/public/images/working-process.jpg";

const WorkingProcess = () => {
  return (
    <div className="working-process-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="working-process-content">
              <span className="sub-title">Our Development Process</span>
              <h2>Committed to Building Solutions for Your Needs</h2>
              <ul className="working-process-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <div className="number">1</div>
                  <h3>Requirement Gathering</h3>
                  <p>
                    We collaborate with stakeholders to gather detailed
                    requirements, ensuring we understand your vision and
                    objectives for the software project.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="number">2</div>
                  <h3>Design & Prototyping</h3>
                  <p>
                    Our team creates wireframes and prototypes to visualize the
                    software's layout and functionality, allowing for feedback
                    and adjustments before development begins.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="number">3</div>
                  <h3>Development & Testing</h3>
                  <p>
                    We follow agile methodologies to build your software in
                    iterative cycles, ensuring continuous testing and
                    integration to maintain high quality throughout the process.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="number">4</div>
                  <h3>Deployment & Support</h3>
                  <p>
                    Once development is complete, we deploy your software and
                    provide ongoing support, ensuring it operates smoothly and
                    efficiently in a live environment.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="working-process-image bg1">
              <Image src={workingProcessImg} alt="working-process" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
