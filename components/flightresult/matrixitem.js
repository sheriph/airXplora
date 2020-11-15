import React, { useState } from "react";
import Axios from "axios";
import useSWR from "swr";
import Skeleton from "@material-ui/lab/Skeleton";
import { formatPrice } from "../general/utilities";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDrawerOpen_, matrixPrice_ } from "../../recoil/state";
import {
  Container,
  Drawer,
  Grid,
  makeStyles,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import {
  usePopupState,
  bindToggle,
  bindPopper,
} from "material-ui-popup-state/hooks";
import { ClickAwayListener } from "@material-ui/core";
import ResultCard from "./classsicresultcard";
import CancelIcon from "@material-ui/icons/Cancel";
import FlightSumarry from "./flightsummary";

const styles = makeStyles((theme) => ({
  typographyhighest: {
    padding: "3px",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.light,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.common.white,
    },
  },
  paperlowest: {
    padding: "3px",
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.common.white,
    },
  },
  typography: {
    padding: "3px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  drawer: {
    width: "400px",
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
}));

const MatrixItem = ({ value, lowestValue, highestValue, flightOffer }) => {
  const classes = styles();
  const [isDrawerOpen, toggleDrawer] = useRecoilState(isDrawerOpen_);

  const popupState = usePopupState({
    variant: "popper",
    popupId: "demoPopper",
  });

  if (lowestValue === true)
    return (
      <>
        <Paper
          {...bindToggle(popupState)}
          elevation={4}
          className={classes.paperlowest}
        >
          <Typography variant="caption">&#8358;{formatPrice(value)}</Typography>
        </Paper>
        <Popper keepMounted={false} {...bindPopper(popupState)}>
          <Paper variant="elevation" elevation={12}>
            <Grid container justify="center">
              <Grid item>
                <CancelIcon
                  onClick={() => {
                    popupState.close();
                  }}
                  color="primary"
                  fontSize="large"
                  className={classes.cancelicon}
                />
              </Grid>
              <Grid item xs={12} onClick={() => toggleDrawer((prev) => !prev)}>
                <ResultCard flightOffer={flightOffer} />
              </Grid>
            </Grid>
          </Paper>
        </Popper>
{/*         <Drawer
          className={classes.drawer}
          anchor="right"
          open={isDrawerOpen}
          ModalProps={{
            keepMounted: false,
            onBackdropClick: () => toggleDrawer((prev) => !prev),
          }}
          transitionDuration={250}
        >
          <Container>
            <FlightSumarry flightOffer={flightOffer} />
          </Container>
        </Drawer> */}
      </>
    );

  return (
    <React.Fragment>
      <Typography
        className={
          highestValue === true ? classes.typographyhighest : classes.typography
        }
        variant="caption"
        {...bindToggle(popupState)}
      >
        &#8358;{formatPrice(value)}
      </Typography>
      <Popper keepMounted={false} {...bindPopper(popupState)}>
        <Paper variant="elevation" elevation={12}>
          <Grid container justify="center">
            <Grid item>
              <CancelIcon
                onClick={() => {
                  popupState.close();
                }}
                color="primary"
                fontSize="large"
                className={classes.cancelicon}
              />
            </Grid>
            <Grid item xs={12} onClick={() => toggleDrawer((prev) => !prev)}>
              <ResultCard flightOffer={flightOffer} />
            </Grid>
          </Grid>
        </Paper>
      </Popper>

   {/*    <Drawer
        className={classes.drawer}
        anchor="right"
        open={isDrawerOpen}
        ModalProps={{
          keepMounted: false,
          onBackdropClick: () => toggleDrawer((prev) => !prev),
        }}
        transitionDuration={250}
      >
        <Container>
          <FlightSumarry flightOffer={flightOffer} />
        </Container>
      </Drawer> */}
    </React.Fragment>
  );
};

export default MatrixItem;
