import React from "react";
import { socialLinks } from "../data";
import { AiOutlineGithub } from "react-icons/ai";
const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="hero-container">
        <div>
          <p className="special">Hello, my name is,</p>
          <h2 className="light-text">Ogar Simon</h2>
          <h2>A front End developer</h2>
          <p>
            I'm a Front end developer with strong passion for building
            responsive and accessible front end web applications.
          </p>
          <a href="#projects" className="btn special">
            Check out my projects
          </a>
          <div className="btn-container social-links">
            {socialLinks.map((item, index) => {
              return (
                <a
                  href={item.url}
                  className="external-link social-link"
                  key={index}
                >
                  <AiOutlineGithub />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
