import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import "./SidebarBottom.css";

function SidebarBottom() {
  return (
    <React.Fragment>
      <List>
        <ListItem button>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem
          key="Email"
          component="a"
          button
          href="mailto:sabysingh298@gmail.com"
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default SidebarBottom;
