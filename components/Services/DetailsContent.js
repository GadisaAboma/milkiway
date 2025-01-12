import React from "react";
import Accordion from "../Accordion";
import Image from "next/image";

const DetailsContent = ({image, desc}) => {
  // console.log(props);
  // console.log(props.desc);
  return (
    <div className="services-details-area ptb-100">
      <div className="container">
        <div className="services-details-image">{image}</div>
        {desc}
      </div>
    </div>
  );
};

export default DetailsContent;
