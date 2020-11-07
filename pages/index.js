import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { makeStyles, Grid } from "@material-ui/core";
import BaseHeader from "../components/headers/baseheader";
import BookingContainer from "../components/general/bookingcontainer";
import ClassicFooter from "../components/footers/classicfooter";
import HotDeal from "../components/hotdealcards/classichotdeal";

const styles = makeStyles((theme) => ({
  baseBox: {
    margin: "0",
    padding: "0",
  },
  hotdeals: {
    paddingTop: "20px"
  }
}));

export default function Index() {
  const classes = styles();
  return (
    <Container maxWidth = "xl" disableGutters>
      <Grid container>
        <Grid item xs={12}>
          <BaseHeader title="airXplora : Your Travel Tech Companion" />
        </Grid>
        <Grid item xs={12}>
          <BookingContainer />
        </Grid>
        <Grid item xs={12} className = {classes.hotdeals}>
          <HotDeal />
        </Grid>
        <Grid item xs={12}>
          <ClassicFooter />
        </Grid>
      </Grid>
    </Container>
  );
}
