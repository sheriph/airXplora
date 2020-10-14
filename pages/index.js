import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { makeStyles } from "@material-ui/core";
import BaseHeader from "../components/headers/baseheader";
import BookingContainer from "../components/general/bookingcontainer";

const styles = makeStyles((theme) => ({
  baseBox: {
    margin: "0",
    padding: "0",
  },
}));

export default function Index() {
  const classes = styles();
  return (
    <Box className={classes.baseBox}>
      <BaseHeader title="airXplora : Your Travel Tech Companion" />

      <BookingContainer />
    </Box>
  );
}
