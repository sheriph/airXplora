import React from "react";
import { Grid, Container, Box, Hidden } from "@material-ui/core";
import FromAndToSearch from "./fromandtosearch";
import DatePicker from "../datepicker/datepicker";
import SelectPassengerandClass from "./passandclass";
import SearchButton from "./searchbutton";
import TripType from "./triptype";
import { useRecoilValue } from "recoil";
import { trip_ } from "../../recoil/state";
import MultiSearch from "./multisearch";

const FlightFinder = () => {
  const triptype = useRecoilValue(trip_);
  return (
    <>
      <Container disableGutters>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <TripType />
          </Grid>
          {triptype !== "Multi-city" ? (
            <React.Fragment>
              <Grid item xs={12}>
                <FromAndToSearch />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box my={1}>
                  <DatePicker />
                </Box>
              </Grid>
              <Grid item xs={8} sm={6}>
                <Box my={1}>
                  <SelectPassengerandClass />
                </Box>
              </Grid>
              <Grid item xs={4} sm={12}>
                <Box my={1}>
                  <SearchButton />
                </Box>
              </Grid>
            </React.Fragment>
          ) : (
            <MultiSearch />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default FlightFinder;
