import React from "react";
import { Grid, Container, Box, Hidden } from "@material-ui/core";
import FromAndToSearch from "./fromandtosearch";
import DatePicker from "../datepicker/datepicker";
import SelectPassengerandClass from "./passandclass";
import SearchButton from "./searchbutton";

const Search = () => {
  return (
    <>
        <Container disableGutters>
          <Grid container justify="center" alignItems="center">
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
          </Grid>
        </Container>
     {/*  <Hidden smDown>
        <Container disableGutters>
          <Grid container justify="center" alignItems="center">
            <Grid item xs>
              <FromAndToSearch />
            </Grid>
            <Grid item xs ={3}>
              <DatePicker />
            </Grid>
            <Grid item xs ={3}>
              <SelectPassengerandClass />
            </Grid>
            <Grid item xs ={1}>
              <SearchButton />
            </Grid>
          </Grid>
        </Container>
      </Hidden> */}
    </>
  );
};

export default Search;
