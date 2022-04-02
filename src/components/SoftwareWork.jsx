import React from "react";

export default function SoftwareWork(props) {
  return (
    <div
      className={`${props.extraClasses} border-3 border-top single-work-div d-flex flex-column flex-lg-row align-items-center justify-content-start`}
    >
      <img
        className="software-work-img img-fluid h-50"
        src={props.pic}
        alt={props.alt}
      />
      <div className="project-text text-center py-5">
        <h2 className="project-title">{props.projectTitle}</h2>
        <p className="mw-75 mx-auto project-description">
          {props.projectDescription}
        </p>
        <a
          href={props.link}
          rel="noreferrer"
          target="_blank"
          className="btn btn-outline-secondary btn-lg"
        >
          See it Online
        </a>
      </div>
    </div>
  );
}
