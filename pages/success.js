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
  const [flightOrder, setFlightOrder] = useState(undefined)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocal(JSON.parse(window.localStorage.getItem("local")));
      setFlightOffer(
        JSON.parse(window.localStorage.getItem("bookedFlightOffer"))
      );
      setFlightOrder(JSON.parse(window.localStorage.getItem("flightOrder")))
    }
  }, [null]);
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
            flightOrder = {flightOrder}
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
