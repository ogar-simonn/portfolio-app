import React from "react";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <h2 className="light-text section-title">Get In Touch with Simon</h2>
      <div className="form-container">
        <form action="https://formspree.io/f/xzbwlqpa" type="POST">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-text form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email address"
              className="form-text form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              placeholder="Leave a message for simon"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button className="btn special">submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
