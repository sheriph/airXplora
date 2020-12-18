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
import FareCalendar from "../components/flightresult/farecalendar";
import PricingTable from "../components/flightresult/pricingtable";
import FlightOffersList from "../components/flightresult/flightofferslist";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

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
  container: {
    backgroundColor: theme.palette.grey[200],
  },
  placeholdercontainer: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

const FlightResult = () => {
  const classes = styles();
  const [local, setLocal] = useState(null);
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const alertPop = (message, type) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: type,
    });
  };



  useEffect(() => {
    //this test for stale and undefined data
    if (typeof window !== "undefined") {
      const local = JSON.parse(window.localStorage.getItem("local"));
      if (local === "undefined") {
        alertPop(
          "you have made any search, please search for a flight on the homepage",
          "success"
        );
        setTimeout(() => {
          router.push("/").then((res) => {
            window.scrollTo(0, 0);
          });
        }, 3000);
      }
      const departureDate = local.prevState.departureDate;
      if (new Date(departureDate).getTime() < new Date().getTime()) {
        alertPop(
          "travel date is in the past, redirecting to hompage",
          "success"
        );
        setTimeout(() => {
          router.push("/").then((res) => {
            window.scrollTo(0, 0);
          });
        }, 3000);
      }
      setLocal(local);
    }
  }, []);

  return (
    <Container disableGutters maxWidth="xl" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <BaseHeader title="airXplora : Your Travel Tech Companion" />
        </Grid>
        <Grid item xs={12}>
          {local ? (
            <AboutFlight prevState={local.prevState} />
          ) : (
            <Skeleton variant="rect" height={118} />
          )}
        </Grid>
        {local ? <FlightOffersList storeData={local} /> : ""}
        <Grid item xs={12}>
          <ClassicFooter />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FlightResult;
