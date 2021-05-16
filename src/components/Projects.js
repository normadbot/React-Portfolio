import { Typography } from "@material-ui/core";
import React from "react";
import Cards from "./Cards";
import "./Projects.css";
import WorkedAt from "./WorkedAt";
function Projects() {
  return (
    <React.Fragment>
      <section id="project" className="project">
        <div className="project-title">
          <Typography variant="h2" className="project-titlestyle">
            Projects
          </Typography>
        </div>

        <Cards />
        <WorkedAt/>
      </section>
    </React.Fragment>
  );
}

export default Projects;
