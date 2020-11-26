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
import { Grid, Divider, Box, useMediaQuery, Tooltip } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { useRecoilValue } from "recoil";
import { flightOffer_ } from "../../recoil/state";
import GetAirportName from "./getairportname";
import {
  getAirlineName,
  getBaggageAllowance,
  getClassOfBooking,
  getDate,
  getLayover,
  getTime,
} from "../general/utilities";
import GetAirlineName from "./getairlinename";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

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
  flightIconOut: {
    fontSize: "15px",
    transform: "rotate(180deg)",
  },
  oppositecontentroot: {
    flex: "none",
    padding: "10px 3px 10px 0px",
    alignSelf: "flex-end",
  },
  timelinecontentroot: {
    padding: "5px",
    position: "relative",
    bottom: "15px",
  },
  timelineseparatorroot: {
    height: "120px",
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

const StopoverTimeline = ({ outBoundSegments, flightOffer }) => {
  const classes = styles();
  //  const flightOffer = useRecoilValue(flightOffer_);
  // const outBoundSegments = flightOffer.itineraries[0].segments;
  //  console.log("outBoundSegments stop", outBoundSegments, flightOffer);

  if (!flightOffer || !outBoundSegments) return <>Loading ...</>;

  const [stopsArray, setStopsArray] = useState([]);

  useEffect(() => {
    if (outBoundSegments.length > 1) {
      let newStopsArray = [];
      for (let i = 0; i < outBoundSegments.length - 1; i++) {
        let cloneFirstSegment = { ...outBoundSegments[i] };
        delete cloneFirstSegment.departure;
        let cloneNextSegment = { ...outBoundSegments[i + 1] };
        delete cloneNextSegment.arrival;
        let sumClone = {
          a: { ...cloneFirstSegment },
          b: { ...cloneNextSegment },
          id: i,
        };
        newStopsArray.push(sumClone);
      }
      //  console.log("stopsArray", stopsArray);
      setStopsArray(newStopsArray);
    }
  }, []);

  return (
    <>
      {stopsArray.map((segment) => {
        return (
          <TimelineItem key={segment.id}>
            <TimelineOppositeContent
              classes={{ root: classes.oppositecontentroot }}
            >
              <Typography variant="body2" color="textSecondary">
                <img
                  src={`/airlinelogo/${segment.b.carrierCode}16.png`}
                  width="16px"
                  height="16px"
                  alt="timelinelogo"
                />
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator
              classes={{ root: classes.timelineseparatorroot }}
            >
              <TimelineDot
                classes={{ root: classes.timelinedot }}
                variant="outlined"
                color="primary"
              >
                <FlightLandIcon
                  //   fontSize="small"
                  color="primary"
                  className={classes.flightIcon}
                />
              </TimelineDot>
              <TimelineDot
                classes={{ root: classes.timelinedot }}
                variant="outlined"
                color="primary"
              >
                <FlightIcon
                  //   fontSize="small"
                  color="primary"
                  className={classes.flightIconOut}
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
                        airportCodes={segment.a.arrival.iataCode}
                      />
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="caption" component="p">
                  Arrival: {getTime(segment.a.arrival.at)},
                  {getDate(segment.a.arrival.at)}
                </Typography>
                <Typography variant="caption" component="p">
                  Depart: {getTime(segment.b.departure.at)},
                  {getDate(segment.b.departure.at)} |&nbsp;
                  <GetAirlineName airlineCodes={segment.b.carrierCode} />
                  <Tooltip
                    title={
                      <Typography variant="caption" component="p">
                        Aircraft:&nbsp;
                        <GetAirlineName
                          airlineCodes={
                            segment.b.operating
                              ? segment.b.operating.carrierCode
                              : segment.b.carrierCode
                          }
                        />
                        &nbsp;
                        {segment.b.aircraft.code}
                      </Typography>
                    }
                    arrow
                    placement="top"
                    PopperProps={{ keepMounted: true }}
                    enterTouchDelay={0}
                  >
                    <HelpOutlineIcon
                      className={classes.errorIcon}
                      color="primary"
                    />
                  </Tooltip>
                </Typography>
                <Typography variant="caption" component="p"></Typography>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <LocalMallIcon
                          className={classes.bagicon}
                          color="primary"
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="caption" component="p">
                          {getBaggageAllowance(flightOffer, segment.b.id)[0]}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption" component="p">
                      {getClassOfBooking(flightOffer, segment.b.id)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center">
                  <Grid item xs={3}>
                    <Divider />
                  </Grid>
                  <Grid item xs="auto">
                    <Box px={1}>
                      <Typography variant="caption">
                        layover:&nbsp;
                        {getLayover(
                          segment.a.arrival.at,
                          segment.b.departure.at
                        )}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Divider />
                  </Grid>
                </Grid>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </>
  );
};
export default StopoverTimeline;
