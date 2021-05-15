import { Avatar, Grid, Tooltip, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import React from "react";
import "./WorkedAt.css";
import siemensLogo from "../assets/siemens1.svg";
import wipro from "../assets/wipro1.png";
function WorkedAt() {
  return (
    <React.Fragment>
      <div className="workedAt">
        <div className="workedAt-title">
          <Typography variant="h2">Worked For</Typography>
        </div>
        <div className="stylingLogo">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs key="1">
              <Tooltip disableTouchListener title="Siemens">
                <img src={siemensLogo} className="logoImg" />
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs key="2">
              <Tooltip disableTouchListener title="Wipro">
                <img src={wipro} className="logoImgwipro" />
              </Tooltip>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkedAt;
