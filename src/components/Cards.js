import { Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import React from "react";
import MediaCard from "./MediaCard";
import { projectsDataLayer1, projectsDataLayer2 } from "./data/Data";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {projectsDataLayer1.map((prjt) => (
          <Grid item xs={3} sm={6} md={3} key={prjt.key}>
            <MediaCard
              imageUrl={prjt.imageUrl}
              description={prjt.description}
              title={prjt.title}
              link={prjt.link}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {projectsDataLayer2.map((prjt) => (
          <Grid item xs={3} sm={6} md={3} key={prjt.key}>
            <MediaCard
              imageUrl={prjt.imageUrl}
              description={prjt.description}
              title={prjt.title}
              link={prjt.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
