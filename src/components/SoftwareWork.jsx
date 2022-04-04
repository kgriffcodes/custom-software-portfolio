import React from "react";

export default function SoftwareWork(props) {
  return (
    <div
      className={`${props.extraClasses} border-light border-3 border-bottom single-work-div d-flex flex-column flex-md-row align-items-center justify-content-between`}
    >
      <div className="work-img-container">
        <img className="software-work-img" src={props.pic} alt={props.alt} />
      </div>
      <div className="project-text text-center py-5">
        <h2 className="project-title px-2">{props.projectTitle}</h2>
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
