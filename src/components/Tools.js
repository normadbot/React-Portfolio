import { Avatar, Button, Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import "./Tools.css";
import img from "../assets/ImgLogo_round.png";
import dogimg from "../assets/dog2.png";
import { tools } from "./data/Data";
import { GitHub, LinkedIn } from "@material-ui/icons";
function Tools() {
  return (
    <div className="tools">
      <div className="tools-avatar">
        <Avatar src={img} className="tools-avatarimage" />
        <Avatar src={dogimg} className="tools-dogeimage" />
      </div>
      <Typography variant="h4" className='tools-title'>Tools</Typography>
      <div className="tools-list">
        <Grid container spacing={3}>
          {tools.map((tool) => (
            <Grid item xs={3} key={tool.name}>
              <Tooltip title={tool.name} disableTouchListener>
                <div className="tools-icon">{tool.icon}</div>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </div>
      <hr className='tools-line' size="20px" />
      <div className="tools-social">
          <IconButton 
            focusRipple="true"
            href="https://github.com/normadbot"
            target="_blank"
          >
            <GitHub fontSize="medium" />
          </IconButton>
          <IconButton
            focusRipple="true"
            target="_blank"
            href="https://www.linkedin.com/in/sarabjeetsingh5/"
          >
            <LinkedIn fontSize="medium" />
          </IconButton>
        </div>
        <div className='tools-buttondiv'>
            <Button id="viewResumeButton" variant="contained" color="#35b3b3" className='tools-button'>View Resume</Button>
        </div>
    </div>
  );
}

export default Tools;
