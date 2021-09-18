import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Card.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useHistory, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateTrip from "../Components/createTrip";
import { ButtonBase } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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

function MediaCard() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className='card-container'>
      <CardActionArea
        className={classes.container}
        id='cardFrame'
        onClick={() => history.push("/create-trip")}
      >
        <CardContent className='CardBox1'>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className='Cardcontent'
          >
            {" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default withRouter(MediaCard);
