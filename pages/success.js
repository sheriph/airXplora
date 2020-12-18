import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Grid } from "@material-ui/core";
import FlightSumarry from "../components/flightresult/flightsummary";
import BaseHeader from "../components/headers/baseheader";
import ClassicFooter from "../components/footers/classicfooter";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const styles = makeStyles((theme) => ({
  table: {
    //   maxWidth: 200,
  },
  container: {
    backgroundColor: theme.palette.grey[200],
  },
}));

const SuccessfullBooking = () => {
  const classes = styles();
  const [local, setLocal] = useState(undefined);
  const [bookedFlightOffer, setFlightOffer] = useState(undefined);
  const [flightOrder, setFlightOrder] = useState(undefined);
  const [fareRules, setFareRules] = useState(undefined);

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
    if (typeof window !== "undefined") {
      setFlightOffer(
        JSON.parse(window.localStorage.getItem("bookedFlightOffer"))
      );
      setFlightOrder(JSON.parse(window.localStorage.getItem("flightOrder")));
      const fareRules = window.localStorage.getItem("fareRules");
      if (fareRules !== "undefined") setFareRules(JSON.parse(fareRules));
    }
  }, [null]);

  useEffect(() => {
    //this test for stale and undefined data
    if (typeof window !== "undefined") {
      const local = JSON.parse(window.localStorage.getItem("local"));
      if (local === "undefined") {
        alertPop(
          "you have not done any search, please search for a flight on the homepage",
          "info"
        );
        setTimeout(() => {
          router.push("/").then((res) => {
            window.scrollTo(0, 0);
          });
        }, 3000);
      }
      const departureDate = local.prevState.departureDate;
      if (new Date(departureDate).getTime() < new Date().getTime()) {
        alertPop("travel date is in the past, redirecting to hompage", "info");
        setTimeout(() => {
          router.push("/").then((res) => {
            window.scrollTo(0, 0);
          });
        }, 3000);
      }
      setLocal(local);
    }
  }, []);

  console.log("sucess fare rules", fareRules);
  return (
    <Container disableGutters maxWidth="xl" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <BaseHeader title="airXplora : Your Travel Tech Companion" />
        </Grid>
      </Grid>
      <Container>
        {bookedFlightOffer && local ? (
          <FlightSumarry
            flightOffer={bookedFlightOffer}
            prevState={local.prevState}
            noShowHeader={true}
            noShowHeader2={true}
            successfulBooking={true}
            flightOrder={flightOrder}
            farePenalties={fareRules}
            travelers={flightOrder.travelers}
          />
        ) : (
          ""
        )}
      </Container>
      <Grid item xs={12}>
        <ClassicFooter />
      </Grid>
    </Container>
  );
};

export default SuccessfullBooking;
