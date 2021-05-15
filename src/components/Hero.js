import { Container, Typography } from "@material-ui/core";
import React from "react";
import "./Hero.css";
import { FaCoffee, FaCode } from "react-icons/fa";

function Hero() {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="hero-imagedcontainer">
          <Container className="hero-contextcontainer">
            <Typography variant="h1" className="hero-content">
              Turning
              <FaCoffee className="hero-coffeicon" />
              into
              <FaCode className="hero-codeicon" />
              since 2019
            </Typography>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
