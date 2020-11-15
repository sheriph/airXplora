import React, { useEffect, useState } from "react";
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
import { Grid, Divider, Box, Tooltip } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { useRecoilValue } from "recoil";
import { flightOffer_, prevState_ } from "../../recoil/state";
import GetAirportName from "./getairportname";
import {
  getBaggageAllowance,
  getClassOfBooking,
  getDate,
  getTime,
} from "../general/utilities";
import GetAirlineName from "./getairlinename";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const styles = makeStyles((theme) => ({
  paper: {
    padding: "5px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  flightIcon: {
    transform: "rotate(180deg)",
    fontSize: "15px",
  },
  oppositecontentroot: {
    flex: "none",
    padding: "10px 3px 10px 0px",
    alignSelf: "flex-end",
  },
  timelinecontentroot: {
    padding: "5px",
    position: "relative",
    bottom: "10px",
  },
  timelineseparatorroot: {
    height: "90px",
  },
  bagicon: {
    fontSize: "14px",
    position: "relative",
    top: "2px",
  },
  timelinedot: {
    padding: "0",
  },
  errorIcon: {
    fontSize: "12px",
  },
}));

const BeginTimeline2 = ({ flightOffer }) => {
  const classes = styles();

  //  const flightOffer = useRecoilValue(flightOffer_);

  if (!flightOffer) return <>Loading ...</>;

  const inBoundItinerary = flightOffer.itineraries[1];

  /*   console.log(
    "begin inboundItinerary flightOffer",
    inBoundItinerary,
    flightOffer
  ); */

  return (
    <TimelineItem>
      <TimelineOppositeContent classes={{ root: classes.oppositecontentroot }}>
        <Typography variant="body2" color="textSecondary">
          <img
            src={`/airlinelogo/${inBoundItinerary.segments[0].carrierCode}16.png`}
            width="16px"
            height="16px"
            alt="timelinelogo"
          />
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator classes={{ root: classes.timelineseparatorroot }}>
        <TimelineDot
          classes={{ root: classes.timelinedot }}
          variant="outlined"
          color="primary"
        >
          <FlightIcon
            //   fontSize="small"
            color="primary"
            className={classes.flightIcon}
          />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent classes={{ root: classes.timelinecontentroot }}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container justify="center">
            <Grid item>
              <Typography align="center" variant="caption" component="p">
                <GetAirportName
                  airportCodes={inBoundItinerary.segments[0].departure.iataCode}
                />
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="caption" component="p">
            Depart: {getTime(inBoundItinerary.segments[0].departure.at)},
            {getDate(inBoundItinerary.segments[0].departure.at)} |&nbsp;
            <GetAirlineName
              airlineCodes={inBoundItinerary.segments[0].carrierCode}
            />
            <Tooltip
              title={
                <Typography variant="caption" component="p">
                  Aircraft:&nbsp;
                  <GetAirlineName
                    airlineCodes={
                      inBoundItinerary.segments[0].operating
                        ? inBoundItinerary.segments[0].operating.carrierCode
                        : inBoundItinerary.segments[0].carrierCode
                    }
                  />
                  &nbsp;
                  {inBoundItinerary.segments[0].aircraft.code}
                </Typography>
              }
              arrow
              placement="top"
              PopperProps={{ keepMounted: true }}
            >
              <ErrorOutlineIcon className={classes.errorIcon} color="primary" />
            </Tooltip>
          </Typography>
          <Typography variant="caption" component="p"></Typography>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <LocalMallIcon className={classes.bagicon} color="primary" />
                </Grid>
                <Grid item>
                  <Typography variant="caption" component="p">
                    {
                      getBaggageAllowance(
                        flightOffer,
                        inBoundItinerary.segments[0].id
                      )[0]
                    }
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" component="p">
                {getClassOfBooking(
                  flightOffer,
                  inBoundItinerary.segments[0].id
                )}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};
export default BeginTimeline2;
