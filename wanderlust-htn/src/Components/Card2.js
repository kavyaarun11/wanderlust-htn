import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Card.css";
import {createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },});

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
      
    },
    media: {
      height: 150,
      background: 'black'
    
  
    },
    text:{
      padding: 20,
    }
  });



export default function MediaCard2() {
        const classes = useStyles();
  return (
<Card className= "card-container">
            <CardActionArea className = {classes.container} id="cardFrame">
        <CardContent  className="CardBox2">
          <Typography gutterBottom variant="h5" component="h2" className = "Cardcontent"> </Typography>
              </CardContent>
              </CardActionArea>
</Card>
  );
      } 