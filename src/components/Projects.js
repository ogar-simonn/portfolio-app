import React from "react";
import projects from "../data";
import Project from "./Project";
const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title light-text">My Projects</h2>
      <div className="container">
        <div className="row justify-content-lg-center">
          {projects.map((item, index) => {
            return <Project {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
