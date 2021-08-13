import React from "react";
import Seperator from "../../common/seperator/index";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
    <Seperator/>
      <label className="section-title">Projects</label>
      <div>
        {data.map((projects) => {
          return <ProjectCard projects={projects} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
