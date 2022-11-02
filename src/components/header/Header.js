import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import GtLogo from "../../assets/images/gt_logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
      <div className="container">
        <span className="navbar-brand pt-0 logo">
          <img src={GtLogo} alt="" className="img-fluid logo-light" />
          <img src={GtLogo} alt="" className="img-fluid logo-dark" />
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="mdi mdi-menu"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <AnchorLink className="nav-link" href="#home">
                Home
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#about">
                About
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#services">
                Services
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#booking">
                Booking
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#pricing">
                Pricing
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
