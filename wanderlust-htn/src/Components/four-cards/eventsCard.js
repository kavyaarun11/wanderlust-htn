import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "../Card.css";
import { createTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
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
