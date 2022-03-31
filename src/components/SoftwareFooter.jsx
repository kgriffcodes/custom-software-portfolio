import React from "react";
import GithubSVG from "../assets/svg/GithubSVG";
import TwitterSVG from "../assets/svg/TwitterSVG";
import LinkedInSVG from "../assets/svg/LinkedInSVG";
import YoutubeSVG from "../assets/svg/YoutubeSVG";
import EmailSVG from "../assets/svg/EmailSVG";

export default function SoftwareFooter() {
  return (
    <footer className="software-footer">
      <div className="container mt-5 mb-4 d-flex justify-content-between align-items-center">
        <ul className="icons d-flex w-45">
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
        <p>&copy;2022 GriffCodes LLC</p>
      </div>
    </footer>
  );
}
