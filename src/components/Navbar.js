import React, { useState } from "react";
import "./Navbar.css";
import img from "../assets/ImgLogo_round.png";
import {
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
function Navbar() {
  const [sidebar, setsidebar] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setsidebar(open);
  };
  const list = () => {
    <List>
      <ListItem>It should work</ListItem>
    </List>;
  };
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <img src={img} className="navbar-image" />
      </div>
      <div className="navbar-title">
        <Typography variant="h5">Sarabjeet Singh</Typography>
        <Typography variant="subtitle1">Software Engineer</Typography>
      </div>
      
        <IconButton 
          className="navbar-menu"
          centerRipple="true"
          focusRipple="true"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      
      <Drawer
        anchor={"right"}
        open={sidebar}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { position: "absolute" } }}
        BackdropProps={{ style: { position: "absolute" } }}
      >
        <SidebarTop />
        <Divider />
        <SidebarBottom onButtonClick={toggleDrawer(false)}/>
      </Drawer>
    </nav>
  );
}

export default Navbar;
