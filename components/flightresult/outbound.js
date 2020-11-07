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
import BeginTimeline from "./begintimeline";
import StopoverTimeline from "./stopovertimeline";
import EndTimeline from "./endtimeline";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { useRecoilValue } from "recoil";
import { prevState_ } from "../../recoil/state";
import { getFlightDuration } from "../general/utilities";

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
    maxWidth: "375px",
  },
  outboundcontainer: {
    maxWidth: "450px",
    position: "relative",
    bottom: "30px",
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

const OutboundFlight = ({ flightOffer }) => {
  const classes = styles();
  const prevState = useRecoilValue(prevState_);

  const outBoundItinerary = flightOffer.itineraries[0];
  const outBoundSegments = flightOffer.itineraries[0].segments;
  const lastSegment =
    flightOffer.itineraries[0].segments[
      flightOffer.itineraries[0].segments.length - 1
    ];
  const itineraries = flightOffer.itineraries;

  //  console.log("flightOffer", flightOffer)
  return (
    <React.Fragment>
      <Container disableGutters className={classes.container}>
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
                    className={classes.outboundflightIcon}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="button">
                    {prevState.fromCity} - {prevState.toCity}
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
                    {getFlightDuration(flightOffer.itineraries[0].duration)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {prevState.tripType === "Multi-city" ? (
              <>
                {itineraries.map((itinerary, index) => {
               //   const outBoundItinerary = flightOffer.itineraries[index];
                  const outBoundSegments = itinerary.segments;
                  const lastSegment =
                    itinerary.segments[itinerary.segments.length - 1];
                  //  console.log("itinerary", itinerary);
                  return (
                    <Timeline
                      classes={{ root: classes.timelineroot }}
                      align="left"
                      key={index}
                    >
                      <BeginTimeline
                        flightOffer={flightOffer}
                        outBoundItinerary={itinerary}
                      />
                      <StopoverTimeline
                        flightOffer={flightOffer}
                        outBoundSegments={outBoundSegments}
                      />
                      <EndTimeline lastSegment={lastSegment} />
                    </Timeline>
                  );
                })}
              </>
            ) : (
              <Timeline classes={{ root: classes.timelineroot }} align="left">
                <BeginTimeline
                  flightOffer={flightOffer}
                  outBoundItinerary={outBoundItinerary}
                />
                <StopoverTimeline
                  flightOffer={flightOffer}
                  outBoundSegments={outBoundSegments}
                />
                <EndTimeline lastSegment={lastSegment} />
              </Timeline>
            )}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default OutboundFlight;
