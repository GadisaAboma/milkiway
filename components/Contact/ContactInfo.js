import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area bg-f1f5fd">
        <div className="container">
          <div className="contact-info-inner">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg1">
                    <i className="bx bx-phone-call"></i>
                  </div>
                  <h3>
                    <a href="tel:+251941574660">(+251) 941-574-660</a>
                  </h3>
                  <h3>
                    <a href="tel:+251930605974">(+251) 930-605-974</a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon">
                    <i className="bx bx-envelope"></i>
                  </div>
                  <h3>
                    <a href="mailto:hello@abev.com">gemegudisa@gmail.com</a>
                  </h3>
                  <h3>
                    <a href="mailto:info@abev.com">hirphafayisa88@gmail.com</a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg2">
                    <i className="bx bx-map"></i>
                  </div>
                  <h3>Africa Avenue St. Addis Ababa, Ethiopia</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
