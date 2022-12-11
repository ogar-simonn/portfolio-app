import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
const Project = ({ name, description, links }) => {
  const { liveSite, gitRepo } = links;
  return (
    <div className="projects-container  col-md-6 col-lg-4">
      <div className="project">
        <p className="special">featured project</p>
        <h3 className="light-text">{name}</h3>
        <p>{description}</p>
        <div className="btn-container">
          <a
            href={gitRepo}
            target="_blank"
            className="external-link"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href={liveSite}
            target="_blank"
            className="external-link"
            rel="noreferrer"
          >
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
