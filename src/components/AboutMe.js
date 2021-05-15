import { Typography } from "@material-ui/core";
import React from "react";
import "./AboutMe.css";
import TimeLines from "./TimeLines";
import Tools from "./Tools";

function AboutMe() {
  return (
    <React.Fragment>
      <div className="aboutme">
        <Typography variant="h2" className="aboutme-title">
          About Me
        </Typography>
        <div className='aboutme-timelines'>
          <TimeLines />
        </div>
        <hr className="aboutme-divider" size="20px" />
        <Tools />
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
