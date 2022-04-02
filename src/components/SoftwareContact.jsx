import React from "react";

export default function SoftwareContact() {
  return (
    <section className="mt-1 mb-5">
      <div id="contact" className="container text-center mw-75">
        <h3 className="contact-header mb-2">
          Looking for a website? Get in touch!
        </h3>
        <form method="post" action="https://formspree.io/f/myylpbyn">
          <div className="">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column w-45">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="d-flex flex-column w-45">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center mt-4">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
          </div>
          <button
            className="btn btn-outline-secondary btn-lg my-5"
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
