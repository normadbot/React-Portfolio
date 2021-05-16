import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./SidebarBottom.css";
const projectsLink = React.forwardRef((props, ref) => (
  <AnchorLink href="#project" offset={() => 50} {...props} ref={ref} />
));
const aboutMeLink = React.forwardRef((props, ref) => (
  <AnchorLink href="#aboutMe" offset={() => 50} {...props} ref={ref} />
));

function SidebarBottom(props) {
  return (
    <React.Fragment>
      <List>
        <ListItem button component={projectsLink} onClick={props.onButtonClick}>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={aboutMeLink} onClick={props.onButtonClick}>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem onClick={props.onButtonClick}
          key="Email"
          component="a"
          button
          href="mailto:sabysingh298@gmail.com"
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button onClick={props.onButtonClick}>
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default SidebarBottom;
