import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Head from "next/head";
import {
  Button,
  Paper,
  Icon,
  Select,
  MenuItem,
  Typography,
  Box,
  Grid,
  Popper,
  Fade,
  ButtonBase,
  Divider,
  FormControl,
  InputLabel,
  Collapse,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AddButton from "./addbutton";
import PassengerValue from "./passengerval";
import RemoveButton from "./removebutton";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
  bindToggle,
  bindPopper,
} from "material-ui-popup-state/hooks";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import AppsIcon from "@material-ui/icons/Apps";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  adult_,
  child_,
  infant_,
  classOfBooking_,
  trip_,
} from "../../recoil/state";

const styles = makeStyles((theme) => ({
  grid: {
    height: "48px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    cursor: "pointer",
    //   cursor: "pointer",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
  paper: {
    width: "100%",
    "& .MuiPaper-outlined": {
      border: "1px",
    },
  },
  popper: {
    width: "300px",
    padding: theme.spacing(3),
  },
  boxes: {
    //  padding: theme.spacing(1),
    width: "35px",
    height: "35px",
  },
  divider: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  buttonBase: {
    width: "100%",
    height: "50px",
  },
  appicon: {
    marginLeft: "10%",
  },
}));

//[ ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST ]

const SelectPassengerandClass = () => {
  const [adultPassenger, setAdultPassenger] = useRecoilState(adult_);
  const [childPassenger, setChildPassenger] = useRecoilState(child_);
  const [infantPassenger, setInfantPassenger] = useRecoilState(infant_);
  const [showInfantErrorMessage, setShowInfantErrorMessage] = useState(false);
  const [classOfBooking, setClassOfBooking] = useState("Economy");
  const [stateClassOfBooking, setStateClassOfBooking] = useRecoilState(
    classOfBooking_
  );

  const [openClassOfBooking, setOpenClassOfBooking] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);

  useEffect(() => {
    switch (classOfBooking) {
      case "Economy":
        setStateClassOfBooking("ECONOMY");
        return;
      case "Premium Economy":
        setStateClassOfBooking("PREMIUM_ECONOMY");
        return;
      case "Business":
        setStateClassOfBooking("BUSINESS");
        return;
      case "First":
        setStateClassOfBooking("FIRST");
        return;
      default:
        return;
    }
  }, [classOfBooking]);

  useEffect(() => {}, [adultPassenger]);

  useEffect(() => {}, [childPassenger]);
  useEffect(() => {}, [infantPassenger]);

  const classes = styles();

  let travelersNumber = adultPassenger + childPassenger + infantPassenger;

  const popupState = usePopupState({ variant: "popper", popupId: "mypopper" });
  const handleChange = (e) => {
    setClassOfBooking(e.target.value);
  };
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.grid}
        {...bindToggle(popupState)}
      >
        <Grid item xs={2}>
          <AppsIcon color="primary" className={classes.appicon} />
        </Grid>
        <Grid item xs={10}>
          <ButtonBase className={classes.buttonBase}>
            <Box className={classes.paper}>
              <Typography align="left">
                {travelersNumber}{" "}
                {travelersNumber > 1 ? "Travelers" : "Traveler"},{" "}
                {classOfBooking}
              </Typography>
            </Box>
          </ButtonBase>
        </Grid>
      </Grid>

      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={popupState.close}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={7} className={classes.popper}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography>Adult</Typography>
                    <Typography variant="caption">12+ yrs</Typography>
                  </Grid>
                  <Grid item container xs>
                    <Grid
                      item
                      onClick={() => setAdultPassenger((prev) => prev + 1)}
                    >
                      <AddButton />
                    </Grid>
                    <Grid item>
                      <PassengerValue val={adultPassenger} />
                    </Grid>
                    <Grid
                      item
                      onClick={() => {
                        if (adultPassenger > 1) {
                          setAdultPassenger((prev) => prev - 1);
                        }
                      }}
                    >
                      <RemoveButton />
                    </Grid>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography>Children</Typography>
                    <Typography variant="caption">2 - 11 yrs</Typography>
                  </Grid>
                  <Grid item container xs>
                    <Grid
                      item
                      onClick={() => setChildPassenger((prev) => prev + 1)}
                    >
                      <AddButton />
                    </Grid>
                    <Grid item>
                      <PassengerValue val={childPassenger} />
                    </Grid>
                    <Grid
                      item
                      onClick={() => {
                        if (childPassenger > 0) {
                          setChildPassenger((prev) => prev - 1);
                        }
                      }}
                    >
                      <RemoveButton />
                    </Grid>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography>Infant</Typography>
                    <Typography variant="caption">under 2 yrs</Typography>
                  </Grid>
                  <Grid item container xs>
                    <Grid
                      item
                      onClick={() => {
                        if (infantPassenger < adultPassenger) {
                          setInfantPassenger((prev) => prev + 1);
                        } else {
                          setShowInfantErrorMessage(true);
                          setTimeout(
                            () => setShowInfantErrorMessage(false),
                            3000
                          );
                        }
                      }}
                    >
                      <AddButton />
                    </Grid>
                    <Grid item>
                      <PassengerValue val={infantPassenger} />
                    </Grid>
                    <Grid
                      item
                      onClick={() => {
                        if (infantPassenger > 0) {
                          setInfantPassenger((prev) => prev - 1);
                        }
                      }}
                    >
                      <RemoveButton />
                    </Grid>
                  </Grid>
                  <Collapse
                    in={showInfantErrorMessage}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Grid item xs={12}>
                      <Alert
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setShowInfantErrorMessage(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" color="primary" />
                          </IconButton>
                        }
                        severity="error"
                      >
                        Sorry, you must not have more infant than adult
                      </Alert>
                    </Grid>
                  </Collapse>
                </Grid>
                <Divider className={classes.divider} />
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  onClick={() => setOpenCollapse((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                >
                  <Grid item>
                    <AirlineSeatReclineExtraIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography>{classOfBooking}</Typography>
                  </Grid>
                  <Grid item>
                    <KeyboardArrowDownIcon color="primary" />
                  </Grid>
                </Grid>

                <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    onClick={() => {
                      setClassOfBooking("Economy");
                      setOpenCollapse((prev) => !prev);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Grid item>
                      {classOfBooking === "Economy" ? (
                        <CheckIcon color="primary" />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item>
                      <Typography>Economy</Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    onClick={() => {
                      setClassOfBooking("Premium Economy");
                      setOpenCollapse((prev) => !prev);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Grid item>
                      {classOfBooking === "Premium Economy" ? (
                        <CheckIcon color="primary" />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item>
                      <Typography>Premium Economy</Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    onClick={() => {
                      setClassOfBooking("Business");
                      setOpenCollapse((prev) => !prev);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Grid item>
                      {classOfBooking === "Business" ? (
                        <CheckIcon color="primary" />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item>
                      <Typography>Business</Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    onClick={() => {
                      setClassOfBooking("Premium Economy");
                      setOpenCollapse((prev) => !prev);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Grid item>
                      {classOfBooking === "First" ? (
                        <CheckIcon color="primary" />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item>
                      <Typography>First</Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Collapse>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default SelectPassengerandClass;
