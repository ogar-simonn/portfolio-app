import React from "react";

const About = () => {
  return (
    <section className="section about-section" id="about">
      <h2 className="light-text section-title">About Me</h2>
      <div className="description">
        <p>
          My name is Ogar Simon, a{" "}
          <span className="special">front end developer</span> currently based
          in Abuja, Nigeria. I have have passion for building and maintaining
          applications with the best techologies.
        </p>
        <p>Here are a few technologies I have been working with recently:</p>
        <ul>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>JavaScript (ES6+)</li>
          <li>React JS</li>
          <li>Bootstrap </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
