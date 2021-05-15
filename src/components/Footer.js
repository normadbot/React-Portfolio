import { Container, Grid } from "@material-ui/core";
import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <Grid container justify="center">
            Made with 
            <FaHeart className='padding-leftright padding-left heart-color'/>
            <span className='padding-leftright'>&copy;</span> 
            {new Date().getFullYear()}
          </Grid>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
