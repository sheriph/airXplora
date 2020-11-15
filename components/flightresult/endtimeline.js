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
import { Grid, Divider, Box } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { flightOffer_ } from "../../recoil/state";
import GetAirportName from "./getairportname";
import { getDate, getTime } from "../general/utilities";
import GetAirlineName from "./getairlinename";

const styles = makeStyles((theme) => ({
  paper: {
    padding: "5px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  flightIcon: {
    fontSize: "15px",
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
  timelinedot: {
    padding: "0",
  },
}));

const EndTimeline = ({ lastSegment }) => {
  const classes = styles();
  /*   const flightOffer = useRecoilValue(flightOffer_);
  const lastSegment =
    flightOffer.itineraries[0].segments[
      flightOffer.itineraries[0].segments.length - 1
    ]; */

  //console.log("lastSegment", lastSegment);

  // console.log("endtimeline flightOffer", flightOffer);
  if (!lastSegment) return <>Loading ...</>;

  return (
    <TimelineItem>
      <TimelineOppositeContent
        classes={{ root: classes.oppositecontentroot }}
      ></TimelineOppositeContent>
      <TimelineSeparator classes={{ root: classes.timelineseparatorroot }}>
        <TimelineDot
          classes={{ root: classes.timelinedot }}
          variant="outlined"
          color="primary"
        >
          <FlightLandIcon className={classes.flightIcon} color="primary" />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent classes={{ root: classes.timelinecontentroot }}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container justify="center">
            <Grid item>
              <Typography align="center" variant="caption" component="p">
                <GetAirportName airportCodes={lastSegment.arrival.iataCode} />
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="caption" component="p">
            Arrival: {getTime(lastSegment.arrival.at)},
            {getDate(lastSegment.arrival.at)}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};
export default EndTimeline;
