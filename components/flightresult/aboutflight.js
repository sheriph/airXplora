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
} from "@material-ui/core";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import EditIcon from "@material-ui/icons/Edit";
import FlightFinder from "../flightsearchform/flightfinder";
import CancelIcon from "@material-ui/icons/Cancel";
import { useRecoilValue } from "recoil";
import { prevState_ } from "../../recoil/state";

const styles = makeStyles((theme) => ({
  importexporticon: {
    transform: "rotate(90deg)",
  },
  container: {
    paddingBottom: "10px",
    paddingTop: "10px",

    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
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
}));
const AboutFlight = ({prevState}) => {
  const classes = styles();

  const [openCollapse, toggleOpenCollapse] = useState(false);

  const edit = () => {
    toggleOpenCollapse((prev) => !prev);
  };

 // const prevState = useRecoilValue(prevState_);

  if (!prevState) return <> loading .. </>;
  return (
    <Container disableGutters>
      <Container className={classes.container}>
        <Grid container justify="space-evenly" alignItems="center" spacing={1}>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                {prevState.tripType === "Round trip"
                  ? "Your Round Trip"
                  : `${
                      prevState.tripType === "One way"
                        ? "Your One Way Trip"
                        : "Your Multi-trip"
                    }`}
              </Grid>
              <Grid item>
                {prevState.tripType === "Multi-city"
                  ? `From ${prevState.fromCity}`
                  : `${prevState.fromCity} - ${prevState.toCity}`}
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" className={classes.datebox}>
              <Grid item>
                <Grid container direction="column">
                  <Grid item className={classes.day}>
                    <Typography variant="button">
                      {new Date(prevState.departureDate)
                        .toDateString()
                        .slice(0, 3)
                        .toUpperCase()}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.month}>
                    <Typography variant="button">
                      {new Date(prevState.departureDate)
                        .toDateString()
                        .slice(4, 7)
                        .toUpperCase()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  {new Date(prevState.departureDate).getDate()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {prevState.tripType === "Round trip" ? (
            <>
              <Grid item>
                <ImportExportIcon className={classes.importexporticon} />
              </Grid>
              <Grid item>
                <Grid container alignItems="center" className={classes.datebox}>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item className={classes.day}>
                        <Typography variant="button">
                          {new Date(prevState.returnDate)
                            .toDateString()
                            .slice(0, 3)
                            .toUpperCase()}
                        </Typography>
                      </Grid>
                      <Grid item className={classes.month}>
                        <Typography variant="button">
                          {new Date(prevState.returnDate)
                            .toDateString()
                            .slice(4, 7)
                            .toUpperCase()}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">
                      {new Date(prevState.returnDate).getDate()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            ""
          )}

          <Grid item>
            <Typography>
              <Button
                onClick={edit}
                startIcon={
                  openCollapse === true ? <CancelIcon /> : <EditIcon />
                }
                variant="outlined"
                color="inherit"
              >
                {openCollapse === true ? "Close" : "Edit"}
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Collapse in={openCollapse} timeout={250} unmountOnExit>
        <Grid container className={classes.gridcontainer}>
          <Grid item>
            <FlightFinder />
          </Grid>
        </Grid>
      </Collapse>
    </Container>
  );
};

export default AboutFlight;
