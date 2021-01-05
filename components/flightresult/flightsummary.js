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
import { useSnackbar } from "notistack";
import cookieCutter from "cookie-cutter";
import PassengerList from "./passengerlist";

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
    //  bottom: "20px",
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
  offerPricing,
  farePenalties,
  travelers,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const classes = styles();
  const [isDrawerOpen, toggleDrawerState] = useRecoilState(isDrawerOpen_);
  const [isLoading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const [showPriceTable, setShowPrice] = useState(false);
  const [showFareRules, setShowFare] = useState(false);
  const [shouldFetch, setFetch] = useState(false);
  console.log("farePenalties", farePenalties);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const alertPop = (message, type) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
      },
      variant: type,
    });
  };

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
    baseURL:
      "https://test.api.amadeus.com/v1/shopping/flight-offers/pricing?include=detailed-fare-rules&forceClass=false",
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

  const { data, error, isValidating } = useSWR(
    shouldFetch ? "static" : null,
    fetcher,
    {
      onError: (error) => {
        console.log("error from fetcher", error, error.response);
        if (error.response) {
          for (let item of error.response.data.errors) {
            alertPop(item.title, "info");
            alertPop(item.detail, "info");
          }
        }
      },
      onErrorRetry: (error, key, option, revalidate, { retryCount }) => {
        console.log("retryCount", retryCount);
        if (retryCount >= 4) {
          setFetch(false);
          return;
        }
        console.log("trying again");

        setTimeout(() => {
          revalidate({ retryCount: retryCount + 1 });
        }, 500);
      },
      onSuccess: (data) => {
        console.log("running post success data");
        console.log("success data", data.data);
        if (data.data.warning) {
          alertPop(data.data.warning.detail, "warning");
          if (data.data.warning.code === "0") {
            alertPop(
              "Fares keep changing as many people are booking. Always complete your booking faster to avoid fare increase change",
              "info"
            );
          }
          alertPop(
            "Sorry, we are redirecting you to the search result.",
            "info"
          );

          setTimeout(() => {
            router.push("/flightresult").then((res) => {
              window.scrollTo(0, 0);
            });
          }, 5000);
          return;
        }
        window.localStorage.setItem(
          "passengerInfo",
          JSON.stringify(getPassengerInfo(data.data.data))
        );
        window.localStorage.setItem(
          "bookedFlightOffer",
          JSON.stringify(flightOffer)
        );

        window.localStorage.setItem("offerPricing", JSON.stringify(data.data));
        toggleDrawerState(false);
        router.push("/passengerinfo").then((res) => {
          window.scrollTo(0, 0);
        });
      },
    }
  );

  return (
    <React.Fragment>
      <Container disableGutters className={classes.container}>
        {successfulBooking && (
          <Alert severity="success">
            Your reservation is confirmed with booking reference{" "}
            <Typography display="inline" variant="subtitle2">
              {flightOrder && flightOrder.associatedRecords[0].reference}
            </Typography>
            <PassengerList travelers={travelers} />
          </Alert>
        )}
        <Accordion expanded={expanded}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Grid container justify="space-between" alignItems="center">
              {noShowHeader2 === undefined ? (
                <Grid
                  item
                  xs={2}
                  sm
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
              <Grid xs={5} sm item container justify="center" spacing={1}>
                <Grid
                  item
                  // xs="auto"
                  onClick={(e) => {
                    setExpanded((prev) => !prev);
                    setShowFare(false);
                    setShowPrice(true);
                  }}
                >
                  <Typography color="primary">
                    &#8358;
                    {formatPrice(
                      flightOffer.price.agencyTotal || flightOffer.price.total
                    )}
                  </Typography>
                </Grid>
                <Grid
                  item
                  //  xs="auto"
                  onClick={(e) => {
                    setExpanded((prev) => !prev);
                    setShowFare(false);
                    setShowPrice(true);
                  }}
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
                    disabled={isValidating}
                    onClick={() => {
                      setFetch(true);
                    }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    endIcon={
                      isValidating ? (
                        <CircularProgress size="20px" color="primary" />
                      ) : (
                        ""
                      )
                    }
                  >
                    {isValidating ? "Booking..." : "Book Now"}
                  </Button>
                </Grid>
              ) : (
                <Grid xs={5} sm item container justify="center" spacing={1}>
                  <Grid
                    item
                    // xs="auto"
                    onClick={(e) => {
                      setExpanded((prev) => !prev);
                      setShowFare(true);
                      setShowPrice(false);
                    }}
                  >
                    <Typography color="primary">Ticket Rules</Typography>
                  </Grid>
                  <Grid
                    item
                    //  xs="auto"
                    onClick={(e) => {
                      setExpanded((prev) => !prev);
                      setShowFare(true);
                      setShowPrice(false);
                    }}
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
              )}
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justify="center">
              {showPriceTable && (
                <Grid item>
                  <PriceSummary flightOffer={flightOffer} />
                </Grid>
              )}
              {showFareRules && (
                <Grid item>
                  <Box>
                    {farePenalties &&
                      farePenalties.map((rule, index) => (
                        <Box pb={2} key={index}>
                          <Typography gutterBottom variant="caption">
                            FARE CODE: {rule.fareBasis} | {rule.name}
                          </Typography>
                          <Divider variant="fullWidth" />
                          <Typography variant="caption">
                            {rule.details.map((text, index) => (
                              <span key={index}>{text.text}</span>
                            ))}
                          </Typography>
                          <Divider variant="fullWidth" />
                        </Box>
                      ))}
                  </Box>
                </Grid>
              )}
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
