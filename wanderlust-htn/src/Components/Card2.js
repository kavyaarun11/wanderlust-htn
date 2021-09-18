import React from 'react';
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



export default function MediaCard2() {

  return (
<Card className="card-container">
            <CardActionArea className = "card-action-area">

        <CardContent  className="card-content">
          <Typography gutterBottom variant="h5" component="h2" className = "Cardcontent">
            Past Trips
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      );
      }