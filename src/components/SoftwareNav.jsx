import React from "react";
import GriffCodesLogo from "../assets/img/horizontal-logo.jpg";

export default function SoftwareNav() {
  return (
    <nav className="software-nav navbar norwester navbar-expand-lg bg-white navbar-light pt-3 pb-2 border-bottom border-secondary">
      <div className="container d-flex justify-content-between">
        {/* TODO: fix below a tag  */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="navbar-brand mw-50">
          <img
            id="logo-link"
            className="img-fluid"
            src={GriffCodesLogo}
            alt="griffcodes Logo"
          />
        </a>

        <button
          className="navbar-toggler btn-outline-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#work" className="nav-link">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
