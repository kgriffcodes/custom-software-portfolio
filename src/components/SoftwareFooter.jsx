import React from "react";
import GithubSVG from "../assets/svg/GithubSVG";
import TwitterSVG from "../assets/svg/TwitterSVG";
import LinkedInSVG from "../assets/svg/LinkedInSVG";
import YoutubeSVG from "../assets/svg/YoutubeSVG";
import EmailSVG from "../assets/svg/EmailSVG";
import ArrowUpSVG from "../assets/svg/ArrowUpSVG";

export default function SoftwareFooter() {
  return (
    <footer className="software-footer">
      <div className="container mt-2 mb-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <ul className="icons d-flex flex-row justify-content-between">
          <li className="mx-3">
            <a
              className="footer-link"
              href="https://github.com/kgriffcodes"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my Github"
            >
              <GithubSVG />
            </a>
          </li>
          <li className="mx-3">
            <a
              className="footer-link"
              href="https://twitter.com/kgriffcodes"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my Twitter"
            >
              <TwitterSVG />
            </a>
          </li>
          <li className="mx-3">
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/kgriffcodes/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my LinkedIn"
            >
              <LinkedInSVG />
            </a>
          </li>
          <li className="mx-3">
            <a
              className="footer-link"
              href="https://www.youtube.com/channel/UCNvIYfZtcxF9Z6Y1Ut5nq-A"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my Youtube"
            >
              <YoutubeSVG />
            </a>
          </li>
          <li className="mx-3">
            <a
              className="footer-link"
              href="mailto: kayla@griffcodes.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email me"
            >
              <EmailSVG />
            </a>
          </li>
        </ul>
        <div className="d-flex">
          <p className="copyright me-3">&copy;{new Date().getFullYear()} GriffCodes, LLC</p>
          {/* TODO: fix below a tag  */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="d-flex text-secondary">
            Return to Top
            <ArrowUpSVG />
          </a>
        </div>
      </div>
    </footer>
  );
}
