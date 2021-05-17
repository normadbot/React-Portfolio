import { Avatar, Grid, Tooltip, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import React from "react";
import "./WorkedAt.css";
import siemensLogo from "../assets/siemens1.svg";
import wipro from "../assets/wipro1.png";
import WindowsDimension from "./WindowsDimension";
import { useTheme } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
function WorkedAt() {
  const { width } = WindowsDimension();
  const theme = useTheme();
  let content;
  if (width > theme.breakpoints.values.sm) {
    content = (
      <React.Fragment>
        <div className="workedAt">
          <div className="workedAt-title">
            <Typography variant="h2">Worked For</Typography>
          </div>
          <div className="stylingLogo">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs key="1">
                <Tooltip disableTouchListener title="Siemens">
                  <img src={siemensLogo} className="logoImg" />
                </Tooltip>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
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
  } else {
    content = (
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {/* <Grid container direction="row" justify="center" alignItems="center">
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
        </Grid> */}
      </Carousel>
    );
  }

  return content;
}

export default WorkedAt;
