import React from "react";
import "./MediaCard.css";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function MediaCard({ imageUrl, title, description, link }) {
  return (
    <React.Fragment>
      <Card className="mediacard-root">
        <CardActionArea>
          <CardMedia
            height="140"
            style={{ backgroundImage: `url(${imageUrl})` }}
            alt={title}
            title={title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" target="_blank" href={link}>
            Github Link
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default MediaCard;
