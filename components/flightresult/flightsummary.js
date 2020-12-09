import React, { useState } from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import { formatPrice, getPassengerInfo } from "../general/utilities";
import Axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PriceSummary from "./pricesummarytable";
const qs = require("qs");
import Alert from "@material-ui/lab/Alert";

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

const FlightSumarry = ({
  flightOffer,
  prevState,
  noShowHeader,
  noShowHeader2,
  successfulBooking,
  flightOrder,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const classes = styles();
  const [isDrawerOpen, toggleDrawerState] = useRecoilState(isDrawerOpen_);
  const [isLoading, setIsLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  // const prevState = useRecoilValue(prevState_);
  if (!flightOffer || !prevState) return <>Loading ...</>;

  const priceVerifierObj = {
    data: {
      type: "flight-offers-pricing",
      flightOffers: [flightOffer],
    },
  };
  console.log("priceVerifierObj", priceVerifierObj);
  const axiosToken = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const axiosConfirmPrice = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v1/shopping/flight-offers/pricing",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosConfirmPrice.interceptors.request.use(
    (req) => {
      req.headers = {
        Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
      };
      return req;
    },
    (error) => {
      //   console.log("rejecting request b4 its sent");
      Promise.reject(error);
    }
  );

  axiosConfirmPrice.interceptors.response.use(
    (res) => {
      if (res.status !== 200) {
        throw new Error("error response in interceptor", res.statusText);
      }
      return res;
    },
    async (error) => {
      if (
        error.response &&
        error.response.config &&
        error.response.status === 401
      ) {
        await axiosToken
          .request({
            data: qs.stringify({
              client_id: " kYUgZVtfSuy1NmE3kzGwtubzWGteoK1z",
              client_secret: "KDvXBul4gw1pL6rg",
              grant_type: "client_credentials",
            }),
          })
          .then((res) => {
            console.log("token at response interceptor", res.data.access_token);
            window.sessionStorage.setItem("accessToken", res.data.access_token);
          })
          .catch((err) => console.log(err.response));
      }
      return Promise.reject(error);
    }
  );

  const fetcher = async (arg) => {
    const res = await axiosConfirmPrice.request({ data: priceVerifierObj });
    //  console.log("res in fetcher", res);
    return res;
  };

  const { data, error, isValidating, mutate } = useSWR("static", fetcher, {
    focusThrottleInterval: 86400000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 86400000,
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 3000,
    initialData: [],
    onLoadingSlow: () => {
      //  console.log("slow network detected");
    },
    onError: (error) => {
      console.log("error from fetcher", error);
    },
    onSuccess: (data) => {
      //  setPriceValid(true);
      console.log("success data", data.data);
      const passengerInfo = getPassengerInfo(data.data.data);
      console.log("passengerInfo", passengerInfo);
      if (data.data.data) {
        window.localStorage.setItem(
          "passengerInfo",
          JSON.stringify(passengerInfo)
        );
        window.localStorage.setItem(
          "bookedFlightOffer",
          JSON.stringify(flightOffer)
        );
      }
      setIsLoading(false);
      toggleDrawerState(false);
      router.push("/passengerinfo");

      // window.sessionStorage.setItem("bookingData", JSON.stringify(data));
      //   setFromArray(data);
    },
  });

  console.log("flightOffer", flightOffer);

  return (
    <React.Fragment>
      <Container disableGutters className={classes.container}>
        {successfulBooking && (
          <Alert severity="success">
            Your reservation is confirmed with booking reference{" "}
            <Typography display = "inline" variant = "subtitle2">
              {flightOrder && flightOrder.associatedRecords[0].reference}
            </Typography>
          </Alert>
        )}
        <Accordion expanded={expanded}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Grid container justify="space-between" alignItems="center">
              {noShowHeader2 === undefined ? (
                <Grid
                  item
                  xs="auto"
                  onClick={() => {
                    console.log("close drawer");
                    toggleDrawerState(false);
                  }}
                >
                  <CloseIcon color="primary" />
                </Grid>
              ) : (
                ""
              )}
              <Grid xs item container justify="center" spacing={1}>
                <Grid
                  item
                  // xs="auto"
                  onClick={(e) => setExpanded((prev) => !prev)}
                >
                  <Typography color="primary">
                    &#8358;{formatPrice(flightOffer.price.total)}
                  </Typography>
                </Grid>
                <Grid
                  item
                  //  xs="auto"
                  onClick={(e) => setExpanded((prev) => !prev)}
                >
                  <ExpandMoreIcon
                    className={
                      expanded
                        ? "MuiAccordionSummary-expandIcon Mui-expanded"
                        : ""
                    }
                    color="primary"
                  />
                </Grid>
              </Grid>
              {noShowHeader === undefined ? (
                <Grid item xs="auto">
                  <Button
                    size="small"
                    disabled={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      mutate();
                    }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    endIcon={
                      isLoading ? (
                        <CircularProgress size="20px" color="primary" />
                      ) : (
                        ""
                      )
                    }
                  >
                    {isLoading ? "Booking..." : "Book Now"}
                  </Button>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justify="center">
              <Grid item>
                <PriceSummary flightOffer={flightOffer} />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

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
        {successfulBooking && (
          <Alert component={Paper} severity="error">
            <Typography>
              This booking is UNPAID and will automatically cancel on{" "}
              {flightOffer &&
                new Date(flightOffer.lastTicketingDate).toDateString()}
              .
              <br />
              Want to secure your booking ?
            </Typography>
            <Button color="primary" variant="contained">
              PAY NOW
            </Button>
          </Alert>
        )}
      </Container>
    </React.Fragment>
  );
};

export default FlightSumarry;
