import "date-fns";
import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import {
  makeStyles,
  TextField,
  Container,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { departureDate4_, returnDate_ } from "../../recoil/state";

const style = makeStyles((theme) => ({
  datepicker: {
    width: "90px",
    // maxWidth: "120px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

function DepartureDatePicker4() {
  const classes = style();
  //const [departureDate, setDepartureDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useRecoilState(departureDate4_);

  const [returnDate, setReturnDate] = useRecoilState(returnDate_);
  const isMobile = useMediaQuery("(max-width: 600px)");

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
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              disableToolbar
              className={classes.datepicker}
              allowKeyboardControl={false}
              autoOk={true}
              variant={isMobile ? "dialog" : "inline"}
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
                if (tripType === "Multi-city") {
                  setReturnDate(e);
                }
              }}
              format="E dd MMM"
              disablePast={true}
              maxDate={getMaxDate()}
              inputProps={{
                style: { padding: "0", textAlign: "left", cursor: "pointer" },
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DepartureDatePicker4;
