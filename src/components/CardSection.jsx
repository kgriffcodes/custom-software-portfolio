import React from "react";
import HeaderBanner from "./HeaderBanner";
import TalkBubbleSVG from "../assets/svg/TalkBubbleSVG";
import WrenchSVG from "../assets/svg/WrenchSVG";
import SparkleSVG from "../assets/svg/SparkleSVG";

export default function CardSection() {
  return (
    <div>
      <HeaderBanner title="My Process" />
      <section className="p-5">
        <div className="container text-center">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-primary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <TalkBubbleSVG />
                  </div>
                  <h3 className="card-title norwester mb-3">Consultation</h3>
                  <p className="card-text">
                    After we sit down to discuss your website needs, I'll draft
                    a project proposal detailing the scope of the project. After
                    all parties are happy, we'll be off to the races!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-gcgreen text-primarydark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <WrenchSVG />
                  </div>
                  <h3 className="card-title norwester mb-3">Site Build</h3>
                  <p className="card-text">
                    I'll begin building your site based on the agreed upon
                    specifications. During the build phase, you'll regularly be
                    looped into project progress with updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-primary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <SparkleSVG />
                  </div>
                  <h3 className="card-title norwester mb-3">Deployment</h3>
                  <p className="card-text">
                    The most exciting part! The site is deployed and you can
                    access it at the designated URL. All site assets will be
                    turned over to you, and the rest is history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
