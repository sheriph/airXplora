import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Button,
  Popper,
  Slide,
  Collapse,
  Paper,
  Box,
} from "@material-ui/core";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import LinearBuffer from "../backdrop/linearbuffer";
import { useRecoilValue } from "recoil";
import { prevState_ } from "../../recoil/state";

const styles = makeStyles((theme) => ({
  importexporticon: {
    transform: "rotate(90deg)",
    color: theme.palette.primary.main,
  },
  container: {
    paddingBottom: "10px",
    paddingTop: "10px",
    maxWidth: "600px",

    //  backgroundColor: theme.palette.primary.light,
    //  color: theme.palette.common.white,
  },
  gridcontainer: {
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  day: {
    position: "relative",
    top: "5px",
  },
  month: {
    position: "relative",
    bottom: "5px",
  },
  city: {
    position: "relative",
    top: "15px",
  },
  datebox: {
  //  width: "min-content",

  },
}));
const MyBackdrop = ({ state }) => {
  const classes = styles();
  console.log("state", state);
  return (
    <Container disableGutters className={classes.container}>
      <Paper variant="elevation" elevation={10}>
        <Box py={2}>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                alignContent="center"
                direction="column"
              >
                <Grid item>
                  <Typography>Finding the best Flight For You</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container alignItems="center" className={classes.datebox}>
                <Grid item xs={12} className={classes.city}>
                  <Typography variant="h4">{state.fromCity}</Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item className={classes.day}>
                      <Typography variant="button">
                        {new Date(state.departurDate)
                          .toDateString()
                          .slice(0, 3)
                          .toUpperCase()}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.month}>
                      <Typography variant="button">
                        {new Date(state.departurDate)
                          .toDateString()
                          .slice(4, 7)
                          .toUpperCase()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="h4">
                    {new Date(state.departurDate).getDate()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <ImportExportIcon className={classes.importexporticon} />
            </Grid>

            <Grid item>
              <Grid container alignItems="center" className={classes.datebox}>
                <Grid item xs={12} className={classes.city}>
                  <Typography variant="h4">{state.toCity}</Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item className={classes.day}>
                      <Typography variant="button">
                        {new Date(state.returnDate)
                          .toDateString()
                          .slice(0, 3)
                          .toUpperCase()}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.month}>
                      <Typography variant="button">
                        {new Date(state.returnDate)
                          .toDateString()
                          .slice(4, 7)
                          .toUpperCase()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="h4">
                    {new Date(state.returnDate).getDate()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <LinearBuffer />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default MyBackdrop;
