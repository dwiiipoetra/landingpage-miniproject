import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Furni<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/shop"}>
                Shop
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/about-us"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/services"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/contact-us"}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/checkout"}>
                Checkout
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" to={"/login"}>
                <img src="images/user.svg" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/cart"}>
                <img src="images/cart.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
