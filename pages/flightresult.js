import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import {
  makeStyles,
  Grid,
  Drawer,
  Button,
  useMediaQuery,
  ButtonGroup,
  Paper,
} from "@material-ui/core";
import BaseHeader from "../components/headers/baseheader";
import BookingContainer from "../components/general/bookingcontainer";
import ClassicFooter from "../components/footers/classicfooter";
import HotDeal from "../components/hotdealcards/classichotdeal";
import AboutFlight from "../components/flightresult/aboutflight";
import FlightSumarry from "../components/flightresult/flightsummary";
import ResultCard from "../components/flightresult/classsicresultcard";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  data2_,
  flightOffers_,
  flightOffer_,
  isDrawerOpen_,
  lastSearch_,
  prevState_,
} from "../recoil/state";
import Filter from "../components/filter/filter";
import useSWR from "swr";
import { useCollection, useDocument } from "@nandorojo/swr-firestore";
import Axios from "axios";
import LazyLoad from "react-lazyload";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = makeStyles((theme) => ({
  baseBox: {
    margin: "0",
    padding: "0",
  },
  hotdeals: {
    paddingTop: "20px",
  },
  resultcard: {
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  filterbox: {
    paddingTop: "20px",
  },
  drawer: {
    width: "400px",
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
  drawerContainer: {},
  container: {
    backgroundColor: theme.palette.grey[200],
  },
  placeholdercontainer: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

export default function FlightResult() {
  const [flightOffers, setFlightOffers] = useRecoilState(flightOffers_);
  const [prevState, setPrevState] = useRecoilState(prevState_);
  const [lastSearch, setLastSearch] = useRecoilState(lastSearch_);

  const classes = styles();
  const [isDrawerOpen, toggleDrawerState] = useRecoilState(isDrawerOpen_);
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [stateFlightOffer, setStateFlightOffer] = useRecoilState(flightOffer_);
  const toggleDrawer = (flightOffer) => {
    // console.log("clicked drawer", flightOffer);
    setStateFlightOffer(flightOffer);
    toggleDrawerState((prev) => !prev);
  };

  const { data, set, update } = useDocument("flightData/stateData", {
    onSuccess: (data) => {
      //   console.log("data from store:", data);
    },
    parseDates: [
      "prevState.departureDate",
      "prevState.departureDate1",
      "prevState.departureDate2",
      "prevState.departureDate3",
      "prevState.departureDate4",
      "prevState.returnDate",
    ],
    focusThrottleInterval: 86400000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 86400000,
    dedupingInterval: 86400000,
    errorRetryCount: 12,
    onLoadingSlow: () => {
      console.log("slow network detected");
    },
  });
  useEffect(() => {
    if (!data) return;
    console.log("fetching....");
    Axios({
      data: data.lastSearch,
      method: "post",
      url: "/api/flightofferpost",
    })
      .then((res) => {
        //  console.log("response", res.data);

        setLastSearch(data.lastSearch);
        setPrevState(data.prevState);
        setFlightOffers(res.data);
        return;
      })
      .catch((err) => console.log(err));
  }, [data]);

  if (!flightOffers) return <> Loading ... </>;
  return (
    <Container disableGutters maxWidth="xl" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <BaseHeader title="airXplora : Your Travel Tech Companion" />
        </Grid>
        <Grid item xs={12}>
          <AboutFlight />
        </Grid>
        <Grid item container>
          {isDesktop ? (
            <Grid item xs={12} md={3} className={classes.filterbox}>
              <Filter isMobile={false} />
            </Grid>
          ) : (
            <Grid item xs={12} md={3}>
              <Filter isMobile={true} />
            </Grid>
          )}
          <Grid item xs={12} md={9} className={classes.resultcard}>
            {flightOffers.length === 0 ? (
              <Typography variant="h4">
                OOps, no result found. Please modify your search terms
              </Typography>
            ) : (
              <>
                {flightOffers.map((flightOffer, index) => (
                  <LazyLoad
                    key={flightOffer.id}
                    height={150}
                    offset={100}
                    unmountIfInvisible
                    placeholder={
                      <Container className={classes.placeholdercontainer}>
                        <Box p={3}>
                          <Skeleton variant="rect" height={150} />
                        </Box>
                      </Container>
                    }
                  >
                    <Box py={1}>
                      <Box onClick={() => toggleDrawer(flightOffer)}>
                        <ResultCard flightOffer={flightOffer} />
                      </Box>
                    </Box>
                  </LazyLoad>
                ))}
                <Drawer
                  className={classes.drawer}
                  anchor="right"
                  open={isDrawerOpen}
                  ModalProps={{
                    keepMounted: false,
                    onBackdropClick: () => toggleDrawerState((prev) => !prev),
                  }}
                  transitionDuration={250}
                >
                  <Container className={classes.drawerContainer}>
                    <FlightSumarry flightOffer={stateFlightOffer} />
                  </Container>
                </Drawer>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ClassicFooter />
        </Grid>
      </Grid>
    </Container>
  );
}
