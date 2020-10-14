import React from "react";
import FromSearch from "../components/flightsearchform/fromsearch";
import ToSearch from "../components/flightsearchform/tosearch";
import FromAndToSearch from "../components/flightsearchform/fromandtosearch";
import DepartureDatePicker from "../components/datepicker/departuredate";
import { Box, TextField } from "@material-ui/core";
import ReturnDatePicker from "../components/datepicker/returndate";
import DatePicker from "../components/datepicker/datepicker";
import SelectPassengerandClass from "../components/flightsearchform/passandclass";
import AddButton from "../components/flightsearchform/addbutton";
import Search from "../components/flightsearchform/search";
const Test = () => {
  return (
    <Box my={5}>
      <Search />
    </Box>
  );
};

export default Test;
