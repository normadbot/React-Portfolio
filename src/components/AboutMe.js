import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./AboutMe.css";
import TimeLines from "./TimeLines";
import Tools from "./Tools";

function AboutMe() {
  return (
    <Grid id="aboutMe" container className="aboutme-outergrid">
      <Grid item className="aboutme-titlegrid">
        <Typography variant="h2">About Me</Typography>
      </Grid>

      <Grid container className="aboutme-allgrid">
        <Grid item className="aboutme-timeline">
          <TimeLines />
        </Grid>
        <Grid item className="aboutme-divider">
          <hr className="aboutme-dividerline" size="20px" />
        </Grid>
        <Grid item className="aboutme-tools">
          <Tools />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
