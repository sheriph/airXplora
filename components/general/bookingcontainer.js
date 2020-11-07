import React from "react";
import {
  Grid,
  Box,
  makeStyles,
  Card,
  CardMedia,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import FlightFinder from "../flightsearchform/flightfinder";

const styles = makeStyles((theme) => ({
  box: {},
  media: {
   // height: "400px",
    paddingTop: "15px",
    paddingBottom: "10px"
  },
  grid: {
  //  position: "relative",
  },
  paper: {
    margin: "20px",
  //  minHeight: "400px",
  },
}));

const BookingContainer = () => {
  const classes = styles();
  return (
    <Box className={classes.box}>
      <Card>
        <CardMedia className={classes.media} image="/backgroundimage2.jpg">
          <Grid
            className={classes.grid}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={24} className={classes.paper}>
                <Container>
                  <Box py = {5}>
                    <FlightFinder />
                  </Box>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </CardMedia>
      </Card>
    </Box>
  );
};

export default BookingContainer;
