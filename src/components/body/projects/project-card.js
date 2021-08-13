import React from "react";
import "./project-card.css";

function ProjectCard({ projects }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{projects.title}</label>
        <div className="project-links">
          {projects.demo && (
            <a className="project-link" href={projects.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {projects.github && (
            <a className="project-link" href={projects.github}>
              <div className="link-button">
                <i class="devicon-github-original"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{projects.about}</p>
        <div className="project-tags">
          {projects.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={projects.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
