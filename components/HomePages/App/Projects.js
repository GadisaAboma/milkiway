import PortfolioStyle1 from "@/components/Portfolio/PortfolioStyle1";
import React from "react";

export default function Projects() {
  return (
    <div className="container">
      <div
        // className="overview-box"
        style={{
          //   display: "flex",
          //   justifyContent: "center",
          marginBottom: "30px",
          color: "grey",
          fontWeight: "bold",
        }}
      >
        <span className="sub-title"> Recent projects made by Milkiway</span>
      </div>
      <PortfolioStyle1 />
    </div>
  );
}
