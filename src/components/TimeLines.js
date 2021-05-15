import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import "./TimeLines.css";
import { aboutMedata } from "./data/AboutMeData";

const styles = {
  createAtStyle: {
    color: "rgb(255, 255, 255)",
    fontSize: "0.75rem",
  },
  bubbleStyle: {
    position: "absolute",
    top: "0px",
    color: "rgb(255, 255, 255)",
    borderRadius: "50%",
    width: "2.25rem",
    height: "2.25rem",
    marginLeft: "1px",
    background: "rgb(48, 48, 48)",
    border: "2px solid rgb(53, 179, 179)",
    display: "flex",
    left: "-0.125rem",
    pointerEvents: "none",
  },
  descriptionStyle: {
    width: "60%",
    background: "rgb(255, 255, 255)",
    boxShadow: "rgb(0 0 0 / 10%) 0px 1px 3px 0px",
    marginTop: "1em",
    marginBottom: "1em",
    lineHeight: "1.6",
    padding: "0.5em 1em",
    color: "rgb(0, 0, 0)",
    fontSize: "0.875rem",
    borderRadius: "0.5rem",
  },
  iconStyle:{
    display:'flex',
    fontSize:'1rem',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  colorWhite:{
    color: "rgb(255, 255, 255)",
    width:'40%',
    top: '200px',
    right: '300px',
  }
};

function TimeLines() {
  return (
    <React.Fragment>
      <Timeline lineColor="rgb(53, 179, 179)" style={styles.colorWhite}>
        {aboutMedata.map((me) => (
          <TimelineEvent
            key={me.date}
            title={me.title}
            titleStyle={styles.createAtStyle}
            createdAt={<span className="createAtStyle">{me.date}</span>}
            icon={<span style={styles.iconStyle}>{me.icon}</span>}
            bubbleStyle={styles.bubbleStyle}
            contentStyle={styles.descriptionStyle}
            collapsible
          >
            {me.description}
          </TimelineEvent>
        ))}
      </Timeline>
    </React.Fragment>
  );
}

export default TimeLines;
