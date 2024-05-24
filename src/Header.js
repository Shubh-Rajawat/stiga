import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, isActive } from "react";
import LOgo from "./images/logo1.png";

function Header() {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-wrappers");
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  // Menu
  const [subMenuOpen, setSubMenuOpen] = useState(-1);
  const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);
  //  Menu
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  ///
  return (
    <div className="header-wrappers">
      {" "}
      <div className={`header-outer  ${isActive ? " " : "openNev"}`}>
        <div className="container_rows">
          <div className="header-box">
            <div className="logo-item-box">
              {" "}
              <Link to={"/"}>
                <img src={LOgo} alt="logo" />
              </Link>
            </div>

            <div className={`navbar-item-box  ${isActive ? " " : "openNev"}`}>
              {" "}
              <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                  <li className="actve">
                    <Link to={"#"}> Home</Link>
                  </li>
                  <li>
                    <Link to={"#"}> What is Tiga?</Link>
                  </li>
                  <li>
                    <Link to={"#"}> Tokenomics</Link>
                  </li>
                  <li>
                    <Link to="#"> Roadmap</Link>
                  </li>
                  <li className="plywih">
                    <Link to="#"> Play With Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Header;
