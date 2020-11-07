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
import DepartureDatePicker2 from "./departuredate2";

import ReturnDatePicker from "./returndate";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  setOpenDepartCalendarState,
  isCalendarOpen_,
  trip_,
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
    marginLeft: "20px",
  },
}));

const DatePicker2 = () => {
  const classes = styles();
  const tripType = useRecoilValue(trip_);

  return (
    <Container disableGutters>
      <Paper variant="outlined" className={classes.paper}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs="auto">
            <DateRangeIcon color = "primary" className={classes.icon} />
          </Grid>
          <Grid item xs>
            <DepartureDatePicker2 />
          </Grid>
          {tripType === "One way" || tripType === "Multi-city" ? (
            ""
          ) : (
            <React.Fragment>
              <Grid item xs>
                <Typography align="center">-</Typography>
              </Grid>
              <Grid item xs>
                <ReturnDatePicker />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default DatePicker2;
