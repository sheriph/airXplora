import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FlightIcon from "@material-ui/icons/Flight";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import { Grid, Divider, Box, Container, Button } from "@material-ui/core";
import BeginTimeline2 from "./begintimeline2";

import EndTimeline2 from "./endtimeline2";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { useRecoilValue } from "recoil";
import { flightOffer_, prevState_ } from "../../recoil/state";
import { getFlightDuration } from "../general/utilities";
import StopoverTimeline2 from "./stopovertimeline2";

const styles = makeStyles((theme) => ({
  paper: {
    padding: "5px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  flightIcon: {
    transform: "rotate(180deg)",
  },
  oppositecontentroot: {
    flex: "none",
    padding: "10px 3px 10px 0px",
    alignSelf: "flex-end",
    width: "25px",
  },
  timelinecontentroot: {
    padding: "5px",
    position: "relative",
    bottom: "10px",
  },
  timelineseparatorroot: {
    height: "90px",
  },
  container: {
    maxWidth: "450px",
  },
  inboundcontainer: {
    maxWidth: "375px",
    position: "relative",
    // bottom: "30px",
  },
  inboundflightIcon: {
    transform: "rotate(300deg)",
  },
  outboundflightIcon: {
    transform: "rotate(45deg)",
  },
  timelineroot: {
    padding: "0",
  },
  booknowbottom: {
    position: "relative",
    bottom: "30px",
  },
  booknowbuttontop: {
    marginBottom: "10px",
  },
}));

const InboundFlight = ({ flightOffer, prevState }) => {
  const classes = styles();
  // const prevState = useRecoilValue(prevState_);
  // const flightOffer = useRecoilValue(flightOffer_);

  if (!flightOffer || !prevState) return <>Loading ...</>;

  const inBoundItinerary = flightOffer.itineraries[1];
  // console.log("prevState1", prevState);
  // console.log("outBoundItinerary", outBoundItinerary);
  return (
    <React.Fragment>
      <Container disableGutters className={classes.inboundcontainer}>
        <Grid container>
          <Grid
            item
            xs={12}
            container
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <FlightIcon
                    color="primary"
                    className={classes.inboundflightIcon}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="button">
                    {prevState.toCity} - {prevState.fromCity}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <ScheduleIcon color="primary" />
                </Grid>
                <Grid item>
                  <Typography variant="button">
                    {getFlightDuration(inBoundItinerary.duration)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Timeline classes={{ root: classes.timelineroot }} align="left">
              <BeginTimeline2 flightOffer={flightOffer} />
              <StopoverTimeline2 flightOffer={flightOffer} />
              <EndTimeline2 flightOffer={flightOffer} />
            </Timeline>
          </Grid>
          {/*  <Grid item xs={12} className = {classes.booknowbottom}>
            <Button variant="contained" color="primary" fullWidth>
              Book Now
            </Button>
          </Grid> */}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default InboundFlight;
