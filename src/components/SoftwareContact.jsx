import React from "react";

export default function SoftwareContact() {
  return (
    <section className="mt-1 mb-5">
      <div id="contact" className="container text-center mw-75">
        <h3 className="contact-header mb-4 bg-accent">
          Looking for a website? Get in touch!
        </h3>
        <form method="post" action="https://formspree.io/f/myylpbyn">
          <div className="">
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="form-floating contact-user-info my-2 me-1">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                />
                <label className="contact-label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="form-floating contact-user-info my-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="floatingEmail"
                  placeholder="name@example.com"
                />
                <label className="contact-label" htmlFor="floatingEmail">
                  Email Address
                </label>
              </div>
            </div>
            <div className="form-floating mt-4">
              <textarea
                className="form-control"
                name="message"
                id="contactMessage"
                rows="6"
                placeholder="Your Message Here"
              ></textarea>
              <label className="contact-label" htmlFor="contactMessage">
                Message
              </label>
            </div>
          </div>
          <button
            className="btn btn-primary btn-lg my-5"
            type="submit"
            name="submit"
            id="submit"
            value="Send Message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
