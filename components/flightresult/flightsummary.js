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
import {
  Grid,
  Divider,
  Box,
  Container,
  Button,
  useMediaQuery,
  ButtonBase,
} from "@material-ui/core";
import BeginTimeline from "./begintimeline";
import StopoverTimeline from "./stopovertimeline";
import EndTimeline from "./endtimeline";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ScheduleIcon from "@material-ui/icons/Schedule";
import OutboundFlight from "./outbound";
import InboundFlight from "./inbound";
import CloseIcon from "@material-ui/icons/Close";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDrawerOpen_, prevState_ } from "../../recoil/state";
import { formatPrice } from "../general/utilities";

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
    paddingTop: "10px",
    paddingBottom: "10px",
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
  inboundcard: {
    position: "relative",
    bottom: "40px",
  },
  sumarryGrid: {
    paddingTop: "15px",
  },
}));

const FlightSumarry = ({ flightOffer, prevState }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const classes = styles();
  const [isDrawerOpen, toggleDrawerState] = useRecoilState(isDrawerOpen_);
  // const prevState = useRecoilValue(prevState_);
  if (!flightOffer || !prevState) return <>Loading ...</>;
  return (
    <React.Fragment>
      <Container disableGutters className={classes.container}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Button variant="contained" color="primary" fullWidth>
              Book Now
            </Button>
          </Grid>
          <Grid item>
            <Typography color="primary">
              &#8358;{formatPrice(flightOffer.price.total)}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={<CloseIcon />}
              onClick={() => {
                console.log("close drawer");
                toggleDrawerState(false);
              }}
            >
              Close
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.sumarryGrid}
        >
          <Grid item>
            <OutboundFlight prevState={prevState} flightOffer={flightOffer} />
          </Grid>

          {prevState.tripType === "One way" ||
          prevState.tripType === "Multi-city" ? (
            ""
          ) : (
            <Grid
              item
              className={isMobile === true ? classes.inboundcard : classes.none}
            >
              <InboundFlight prevState={prevState} flightOffer={flightOffer} />
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default FlightSumarry;
