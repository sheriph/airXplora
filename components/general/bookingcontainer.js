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

const styles = makeStyles((theme) => ({
  box: {},
  media: {
    height: "400px",
    paddingTop: "15px",
  },
  grid: {
    position: "absolute",
  },
  paper: {
    height: "400px",
    margin: "20px",
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
                 
                  This is the Booking Engine Container
                  .....................................................
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
