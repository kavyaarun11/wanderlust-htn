import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../Card.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useHistory, withRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { ButtonBase } from "@material-ui/core";
import { Link, BrowserRouter } from "react-router-dom";
import background from "../../images/Event_Card.svg";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    margin: "auto",
  },
  media: {
    height: 100,
    background: "black",
  },
  text: {
    padding: 20,
  },
});

function EventsCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className='create-card-container'>
      <div onClick={() => history.push("/events")}>
        <CardActionArea
          className='Create-trip-card'
          id='cardFrame'
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <CardContent className='CardBox'></CardContent>
        </CardActionArea>
      </div>
    </Card>
  );
}
export default EventsCard;
