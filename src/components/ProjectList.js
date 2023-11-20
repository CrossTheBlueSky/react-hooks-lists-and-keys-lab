import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const allItems = projects.map((proj)=>{
    return   <ProjectItem key={proj.id} name={proj.name} about={proj.about} technologies={proj.technologies}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {allItems}
      </div>
    </div>
  );
}

export default ProjectList;
