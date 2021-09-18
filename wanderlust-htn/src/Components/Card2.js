import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Card.css";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },});


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 'auto',
    
  },
  media: {
    height: 150,
    background: 'black',
  },

  text:{
    padding: 20,
  }

});

export default function MediaCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
            <CardActionArea className = {classes.container} >

        <CardContent className="CardBox2">
          <Typography gutterBottom variant="h5" component="h2" className = "Cardcontent">
            {/* <b>Previous Trips</b> */}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
      );
      }