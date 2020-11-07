import React, { useEffect, useState } from "react";
import {
  TextField,
  makeStyles,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ClickAwayListener,
  Typography,
  LinearProgress,
  InputBase,
} from "@material-ui/core";
import Axios from "axios";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AirportIcon from "@material-ui/icons/LocalAirport";
//import { addOriginLocationCode, addOriginDestination } from "../redux/actions";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import { prettyWord } from "../../components/general/utilities";
import { useRecoilState, useRecoilValue } from "recoil";
import { to_, from1_, trip_, toLocal_, fromLocal1_, tocity_ } from "../../recoil/state";
import Skeleton from "@material-ui/lab/Skeleton";

const style = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    marginTop: "5px",
    zIndex: "100000",
    minWidth: "300px",
  },
  textField: {
    height: "50px",
  },
  location: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  inputpaper: {
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ToSearch = () => {
  const classes = style();
  const [to, setTo] = useRecoilState(to_);
  const [toCity, setToCity] = useRecoilState(tocity_)


  
  const [toLocal, setToLocal] = useRecoilState(toLocal_);
  const [nextFrom, setNextFrom] = useRecoilState(from1_);
  const [nextFromLocal, setNextFromLocal] = useRecoilState(fromLocal1_);
  const tripType = useRecoilValue(trip_);
  const [toArray, setToArray] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openSuggestionsPaper, setOpenSuggestionsPaper] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const source = Axios.CancelToken.source();

  const handleToChange = (e) => {
    setToLocal(e.target.value);
    setOpenSuggestionsPaper(true);
    if (!toLocal) {
      return;
    }

    if (isloading === true) {
      source.cancel("operation cancelled");
    }

    setIsLoading(true);
    Axios({
      method: "post",
      url: "/api/airportautosuggest",
      cancelToken: source.token,
      data: {
        keyword: toLocal,
        subType: "AIRPORT,CITY",
      },
    })
      .then((res) => {
        const suggestionList = [];
        for (let item of res.data.data) {
          let autosuggestObj = {
            id: item.id,
            iataCode: item.iataCode,
            subType: item.subType,
            iataCodeCityName: `${item.iataCode} ${prettyWord(
              item.address.cityName
            )}`,
            city: `${prettyWord(item.address.cityName)}`,
            cityIata: `${prettyWord(item.address.cityName)} (${item.iataCode})`,
            details: `${item.iataCode} ${prettyWord(item.name)}`,
            countryName: `${prettyWord(item.address.countryName)}`,
          };
          suggestionList.push(autosuggestObj);
        }
        setToArray(suggestionList);
        if (isloading === true) {
          source.cancel("operation cancelled");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) console.log("request cancelled:", err.message);
        console.log("autosuggest fetch error", err);
        if (isloading === true) {
          source.cancel("operation cancelled");
        }
        setIsLoading(false);
      });
  };

  const handlesuggestionclick = (e, suggestion) => {
    if (!suggestion) {
      setTo("");
      setToLocal("");
      if (tripType === "Multi-city") {
        setNextFrom("");
        setNextFromLocal("");
      }
      setOpenSuggestionsPaper(false);
      return;
    }
    if (suggestion.subType === "CITY") {
      setToLocal(suggestion.city);
      setTo(suggestion.iataCode);
      setToCity(suggestion.city)
      if (tripType === "Multi-city") {
        setNextFrom(suggestion.iataCode);
        setNextFromLocal(suggestion.city);
      }
    } else {
      setTo(suggestion.iataCode);
      setToCity(suggestion.city)
      setToLocal(suggestion.cityIata);
      if (tripType === "Multi-city") {
        setNextFrom(suggestion.iataCode);
        setNextFromLocal(suggestion.cityIata);
      }
    }
    setOpenSuggestionsPaper(false);
  };

  const handleToClick = () => {
    setTo("");
    setToLocal("");
    if (tripType === "Multi-city") {
      setNextFrom("");
      setNextFromLocal("");
    }
  };

  const handleToClickAway = () => {
    if (!toArray) {
      setTo("");
      setToLocal("");
      if (tripType === "Multi-city") {
        setNextFrom("");
        setNextFromLocal("");
      }
      setOpenSuggestionsPaper(false);
      return;
    }
    if (toArray[0]) {
      if (toArray[0].subType === "CITY") {
        setTo(toArray[0].iataCode);
        setToCity(toArray[0].city)
        setToLocal(toArray[0].city);
        if (tripType === "Multi-city") {
          setNextFrom(toArray[0].iataCode);
          setNextFromLocal(toArray[0].city);
        }
      } else {
        setTo(toArray[0].iataCode);
        setToCity(toArray[0].city)
        setToLocal(toArray[0].cityIata);
        if (tripType === "Multi-city") {
          setNextFrom(toArray[0].iataCode);
          setNextFromLocal(toArray[0].cityIata);
        }
      }
      setOpenSuggestionsPaper(false);
    } else {
      if (to && !toArray.includes(to)) {
        setOpen(true);
        setTo("");
        setToLocal("");
        if (tripType === "Multi-city") {
          setNextFrom("");
          setNextFromLocal("");
        }
      }

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  return (
    <React.Fragment>
      <div>
        <Paper variant="outlined" className={classes.inputpaper}>
          <InputBase
            placeholder="To Where ?"
            value={toLocal}
            onChange={handleToChange}
            onClick={handleToClick}
            className={classes.textField}
            fullWidth
            inputProps={{ style: {} }}
            startAdornment={
              <LocationOnIcon
                color="primary"
                className={classes.location}
                fontSize="small"
              />
            }
          />
          {openSuggestionsPaper ? (
            <ClickAwayListener onClickAway={handleToClickAway}>
              <Paper className={classes.paper} elevation={3}>
                {isloading ? <LinearProgress /> : ""}
                <List component="nav" aria-label="main mailbox folders">
                  {toArray
                    ? toArray.map((suggestion) => (
                        <React.Fragment key={suggestion.id}>
                          <ListItem button>
                            <ListItemIcon>
                              {suggestion.subType === "CITY" ? (
                                <LocationOnIcon color="primary" />
                              ) : (
                                <AirportIcon color="primary" />
                              )}
                            </ListItemIcon>
                            <ListItemText
                              onClick={(e) =>
                                handlesuggestionclick(e, suggestion)
                              }
                            >
                              {suggestion.subType === "CITY" ? (
                                <React.Fragment>
                                  {suggestion.cityIata} <br />
                                  <Typography variant="caption">
                                    {suggestion.countryName}
                                  </Typography>
                                </React.Fragment>
                              ) : (
                                <React.Fragment>
                                  {suggestion.details} <br />
                                  <Typography variant="caption">
                                    {suggestion.countryName}
                                  </Typography>
                                </React.Fragment>
                              )}
                            </ListItemText>
                          </ListItem>
                        </React.Fragment>
                      ))
                    : [null, null, null, null].map((item, index) => (
                        <React.Fragment key={index}>
                          <ListItem button>
                            <ListItemIcon>
                              <Skeleton
                                variant="circle"
                                width={20}
                                height={20}
                              />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant="caption">
                                <Skeleton />
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        </React.Fragment>
                      ))}
                </List>
              </Paper>
            </ClickAwayListener>
          ) : (
            ""
          )}
        </Paper>
        {open ? (
          <Collapse in={open}>
            <Alert
              className={classes.alert}
              icon={<WarningIcon color="primary" />}
              color="warning"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon color="primary" fontSize="inherit" />
                </IconButton>
              }
            >
              Please, select from auto-suggest options
            </Alert>
          </Collapse>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};

export default ToSearch;
