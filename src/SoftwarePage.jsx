import React from "react";
import "./css/software.css";
//component imports
import SoftwareNav from "./components/SoftwareNav";
import SoftwareWork from "./components/SoftwareWork";
import SoftwareContact from "./components/SoftwareContact";
import SoftwareFooter from "./components/SoftwareFooter";
//img imports
import softwareHeadshot from "./assets/img/code-entrance.JPG";
import Resume from "./assets/img/kayla_griffith_resume.pdf";
import JesusPic from "./assets/img/jesusCamposImg.JPG";
import DinaPic from "./assets/img/dinaWalkerImg.png";
import OhWherePic from "./assets/img/saveMeFromMyself.jpg";

const workExamplesArr = [
  {
    pic: JesusPic,
    alt: "picture of Jesus Campos sitting in front of Lake Michigan on a sunny day holding his arms up and smiling",
    link: "https://jcampos.netlify.app/",
    projectTitle: "Jesus Campos Creative",
    projectDescription:
      "A creative portfolio built from scratch that employs a headless CMS so that future content updates can be completely handled by the client. Built using a combination of React, vanilla JS, and Sanity CMS.",
  },
  {
    pic: DinaPic,
    alt: "Logo for Dina Walker Art, which is white text on a black background",
    link: "https://www.dinawalkerart.com/",
    projectTitle: "Dina Walker Art",
    projectDescription:
      "An artist portfolio site built leveraging Squarespace tech along with custom Javascript code.",
  },
  {
    pic: OhWherePic,
    alt: "picture of a button that says 'Save me from Myself!'",
    link: "https://oh-where-to-eat.netlify.app/oh-where-to-eat/",
    projectTitle: "Oh, where to eat...",
    projectDescription:
      "If you, like me, struggle to decide on a place to eat, Oh, where to eat... is the site for you. Best viewed on Firefox and Chrome.",
  },
];

export default function Software() {
  return (
    <div className="software-page griffcodes-blue">
      <SoftwareNav />
      <section className="hero-section h-100vh text-center text-sm-start">
        <div className="d-flex flex-column flex-column-reverse flex-sm-row align-items-center justify-content-between h-100 d-inline-block">
          <div className="text-center w-sm-50 d-inline-block">
            <h1 className="griffcodes-h1 norwester mt-5 mx-5">
              GriffCodes Software
            </h1>
            <p className="mw-75 mx-auto">
              <span className="hi-im-kayla">Hi, I'm Kayla.</span> I am a web
              developer and fullstack Javascript engineer focused on bettering
              people's lives with technology.
            </p>
            <a href="#work" className="btn btn-outline-secondary btn-lg">
              View My Work
            </a>
          </div>
          <img
            id="hero-img"
            className="img-fluid w-sm-50"
            src={softwareHeadshot}
            alt=""
          />
        </div>
      </section>
      <div id="work">
        <div className="griffcodes-blue-bg py-5">
          <div className="container norwester h1 text-center">My Work</div>
        </div>
        {workExamplesArr.map((data, idx) => (
          <SoftwareWork
            key={idx}
            pic={data.pic}
            alt={data.alt}
            link={data.link}
            projectTitle={data.projectTitle}
            projectDescription={data.projectDescription}
            extraClasses={(idx + 1) % 2 === 0 ? "flex-sm-row-reverse" : null}
          />
        ))}
      </div>
      <section className="h-25vh text-center pt-3 my-5">
        <a
          id="resume"
          href={Resume}
          download=""
          className="btn btn-outline-secondary btn-lg mt-5 mb-5"
        >
          Download My Resume
        </a>
      </section>
      <SoftwareContact />
      <SoftwareFooter />
    </div>
  );
}
