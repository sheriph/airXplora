import React, { useState } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  TextField,
  Container,
  Typography,
} from "@material-ui/core";
import DepartureDatePicker from "./departuredate";
import ReturnDatePicker from "./returndate";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  setOpenDepartCalendarState,
  isCalendarOpen_,
} from "../../recoil/state";

const styles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    height: "50px",
    display: "flex",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
  icon: {
    marginLeft: "20px"
  }
}));

const DatePicker = () => {
  const classes = styles();
  const isCalendarOpen = useRecoilValue(isCalendarOpen_);

  return (
    <Container disableGutters>
      <Paper
        variant={isCalendarOpen ? "elevation" : "outlined"}
        elevation={3}
        className={classes.paper}
      >
        <Grid container alignItems="center" justify="center">
          <Grid item xs={2}>
            <DateRangeIcon className={classes.icon} />
          </Grid>
          <Grid item xs={4}>
            <DepartureDatePicker />
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">-</Typography>
          </Grid>
          <Grid item xs={4}>
            <ReturnDatePicker />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DatePicker;
