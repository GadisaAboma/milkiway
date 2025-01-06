import React from "react";
import Link from "@/utils/ActiveLink";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import courseImg from "@/public/images/navbar.jpg";

const HomeNavBar = () => {
  const [menu, setMenu] = React.useState(true);
  const [textColor, setTextColor] = React.useState("#C0C0C0");
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
        setTextColor("black");
      } else {
        setTextColor("#eee");
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area">
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
              <a className="navbar-brand">
                <Image
                  style={{ height: "50px", width: "50px" }}
                  src={logo}
                  alt="site logo"
                />
              </a>
            </Link>

            {/* <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button> */}

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/">
                    <a className=" nav-link" style={{ color: textColor }}>
                      Home
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/portfolio" activeClassName="active">
                    <a className="nav-link" style={{ color: textColor }}>
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services" activeClassName="active">
                    <a className="nav-link" style={{ color: textColor }}>
                      Services
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-us" activeClassName="active">
                    <a className="nav-link" style={{ color: textColor }}>
                      About Us
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/team" activeClassName="active">
                    <a className="nav-link" style={{ color: textColor }}>
                      Team
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a className="nav-link" style={{ color: textColor }}>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
