import React from "react";

export default function SoftwareWork(props) {
  return (
    <div
      className={`${props.extraClasses} d-flex flex-column flex-sm-row align-items-center justify-content-between`}
    >
      <img
        className="software-work-img img-fluid h-50"
        src={props.pic}
        alt={props.alt}
      />
      <div className="text-center">
        <h2>{props.projectTitle}</h2>
        <p className="mw-75 mx-auto">{props.projectDescription}</p>
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
