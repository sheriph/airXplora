import "date-fns";
import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { makeStyles, Container, Grid } from "@material-ui/core";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  returnDate_,
  setReturnDate_,
  departureDate_,
  setIsCalendarOpen_,
} from "../../recoil/state";

const style = makeStyles((theme) => ({
  datepicker: {
    width: "100px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

function ReturnDatePicker() {
  const classes = style();
  //const [returnDate, setReturnDate] = useState(null);

  const returnDate = useRecoilValue(returnDate_);
  const setReturnDate = useSetRecoilState(setReturnDate_);
  const departureDate = useRecoilValue(departureDate_);
  const setCalendarOpen = useSetRecoilState(setIsCalendarOpen_);

  /*   const prettyDate = (date) => date.toISOString().split("T")[0];


  useEffect(()=>{
    if(!arrivalDate){return}
    addReturnDate(prettyDate(arrivalDate))
  }, [arrivalDate]) */

  const getMaxDate = () => {
    let currentDate = new Date();
    let dateString = `${currentDate.getFullYear() + 1}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    return dateString;
  };

  return (
    <Container disableGutters>
      <Grid container justify="center" alignItems="center">
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
              placeholder="Return ?"
              // label="Return"
              value={returnDate}
              onChange={setReturnDate}
              format="E dd MMM"
              disablePast={true}
              maxDate={getMaxDate()}
              minDate={departureDate}
              //   minDate={departureDate ? departureDate : ""}
              minDateMessage={false}
              inputProps={{ style: { padding: "0", textAlign: "left", cursor: "pointer" } }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ReturnDatePicker;
