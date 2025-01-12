import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div id="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315789.08007212714!2d38.751881!3d9.035953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8c71a0dc7cbb%3A0xd09c1f6dedc0e7f7!2sDembel%20City%20Center%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sbd!4v1630302531294!5m2!1sen!2sbd"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
