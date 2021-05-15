import React from "react";
import "./SidebarTop.css";
import img from "../assets/ImgLogo_round.png";
import { IconButton, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
function SidebarTop() {
  return (
    <React.Fragment>
      <div className="sidebartop">
        <div className="sidebartop-image">
          <img src={img} />
        </div>
        <div className="sidebar-namediv">
          <Typography variant="h5" className="sidebar-name">
            Sarabjeet Singh
          </Typography>
          <Typography variant="subtitle2" className="sidebar-title">
            Software Engineer
          </Typography>
          <Typography variant="subtitle2" className="sidebar-location">
            Bengaluru, India
          </Typography>
        </div>
        <div >
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
      </div>
    </React.Fragment>
  );
}

export default SidebarTop;
