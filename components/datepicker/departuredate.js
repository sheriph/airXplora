import "date-fns";
import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { makeStyles, TextField, Container, Grid } from "@material-ui/core";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  departureDate_,
  setDepartureDate_,
  returnDate_,
  setReturnDate_,
  setIsCalendarOpen_,
} from "../../recoil/state";

const style = makeStyles((theme) => ({
  datepicker: {
    width: "90px",
    // maxWidth: "120px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

function DepartureDatePicker() {
  const classes = style();
  //const [departureDate, setDepartureDate] = useState(new Date());

  const departureDate = useRecoilValue(departureDate_);
  const setDepartureDate = useSetRecoilState(setDepartureDate_);
  const returnDate = useRecoilValue(returnDate_);
  const setReturnDate = useSetRecoilState(setReturnDate_);
  const setCalendarOpen = useSetRecoilState(setIsCalendarOpen_);

  /*   const prettyDate = (date) => date.toISOString().split("T")[0];

  useEffect(() => {
    addDepartureDate(prettyDate(departureDate));
  }, [departureDate]); */

  const getMaxDate = () => {
    let currentDate = new Date();
    let dateString = `${currentDate.getFullYear() + 1}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    return dateString;
  };
  return (
    <Container disableGutters>
      <Grid container justify="center" alignItems = "center">
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              disableToolbar
              onOpen={() => setCalendarOpen(true)}
              onClose={() => setCalendarOpen(false)}
              className={classes.datepicker}
              allowKeyboardControl={false}
              autoOk={true}
              variant="inline"
              inputVariant="outlined"
              // label="Departure"
              value={departureDate}
              onChange={(e) => {
                setDepartureDate(e);
                if (returnDate) {
                  if (returnDate.getTime() < e.getTime()) {
                    setReturnDate(null);
                  }
                }
              }}
              format="E dd MMM"
              disablePast={true}
              maxDate={getMaxDate()}
              inputProps={{ style: { padding: "0", textAlign: "left", cursor: "pointer" } }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DepartureDatePicker;
