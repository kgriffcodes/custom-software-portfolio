import React from "react";
import "./css/software.css";
//component imports
import SoftwareNav from "./components/SoftwareNav";
import CardSection from "./components/CardSection";
import HeaderBanner from "./components/HeaderBanner";
import SoftwareWork from "./components/SoftwareWork";
import SoftwareContact from "./components/SoftwareContact";
import SoftwareFooter from "./components/SoftwareFooter";
//img imports
import softwareHeadshot from "./assets/img/code-entrance.JPG";
import Resume from "./assets/img/kayla_griffith_resume.pdf";
import JonPic from "./assets/img/jon-palmer.png";
import JesusPic from "./assets/img/jesusCamposImg.JPG";
import MorningCommPic from "./assets/img/morningCommute.jpg";
import DinaPic from "./assets/img/dinaWalkerImg.png";
import OhWherePic from "./assets/img/saveMeFromMyself.jpg";

const workExamplesArr = [
    {
        pic: JonPic,
        alt: "a picture of a website header that looks like a neon sign spelling out Jonathan Palmer",
        link: "https://www.jonathan-palmer.com/",
        projectTitle: "Jonathan Palmer",
        projectDescription:
            "A portfolio site for an editor, producer, and director showcasing his various video work. Built using React, SASS, and vanilla JS.",
    },
    {
        pic: JesusPic,
        alt: "picture of Jesus Campos sitting in front of Lake Michigan on a sunny day holding his arms up and smiling",
        link: "https://jcampos.netlify.app/",
        projectTitle: "Jesus Campos Creative",
        projectDescription:
            "A portfolio site that employs a headless CMS so all future content updates can be handled by the client. Built using a combo of React, vanilla JS, and Sanity CMS.",
    },
    {
        pic: MorningCommPic,
        alt: "Black text that states 'Check Your Morning Commute' on a light yellow background",
        link: "https://musical-kelpie-6c7256.netlify.app/",
        projectTitle: "Morning Commute App",
        projectDescription:
            "A react app used to check the traffic and weather conditions of your morning commute. App integrates both the google maps and open weather APIs.",
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
        link: "https://oh-where-to-eat.netlify.app/",
        projectTitle: "Oh, where to eat...",
        projectDescription:
            "If you, like me, struggle to decide on a place to eat, Oh, where to eat... is the site for you. Best viewed on Firefox and Chrome.",
    },
];

export default function Software() {
    return (
        <div className="software-page text-primary">
            <SoftwareNav />
            <section className="hero-section text-center text-sm-start">
                <div className="hero-container d-flex flex-column flex-column-reverse flex-md-row align-items-center justify-content-end justify-content-md-between h-100 d-inline-block">
                    <div className="text-center w-sm-50 d-inline-block py-3">
                        <h1 className="griffcodes-h1 norwester mt-3 mx-5">
                            GriffCodes
                        </h1>
                        <p className="mw-75 mx-auto">
                            <span className="hi-im-kayla">Hi, I'm Kayla.</span>{" "}
                            I'm a software engineer focused on bettering
                            people's lives with technology.
                        </p>
                        <a
                            href="#work"
                            className="btn btn-outline-secondary btn-lg mb-3"
                        >
                            View My Work
                        </a>
                    </div>
                    <img
                        id="hero-img"
                        className="d-block img-fluid w-sm-50"
                        src={softwareHeadshot}
                        alt=""
                    />
                </div>
            </section>
            <CardSection />
            <div id="work">
                <HeaderBanner title="Checkout My Work" />
                <div className="">
                    {workExamplesArr.map((data, idx) => (
                        <SoftwareWork
                            key={idx}
                            pic={data.pic}
                            alt={data.alt}
                            link={data.link}
                            projectTitle={data.projectTitle}
                            projectDescription={data.projectDescription}
                            extraClasses={
                                (idx + 1) % 2 === 0
                                    ? "flex-lg-row-reverse"
                                    : null
                            }
                        />
                    ))}
                </div>
            </div>
            <section className="text-center pt-3 my-5">
                <a
                    id="resume"
                    href={Resume}
                    download=""
                    className="btn btn-primary btn-lg"
                >
                    Download My Resume
                </a>
            </section>
            <SoftwareContact />
            <SoftwareFooter />
        </div>
    );
}
