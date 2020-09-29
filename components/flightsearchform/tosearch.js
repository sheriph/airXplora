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
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toSearchState, setToSearchState } from "../../recoil/state";

const style = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    marginTop: "5px",
    zIndex: "100000",
  },
  textField: {
    height: "50px",
  },
  location: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
}));

const ToSearch = () => {
  const classes = style();
  const to = useRecoilValue(toSearchState);
  const setTo = useSetRecoilState(setToSearchState);
  const [toArray, setToArray] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openSuggestionsPaper, setOpenSuggestionsPaper] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  let cancelToken = Axios.CancelToken;
  let source = cancelToken.source();

  useEffect(() => {
    if (!to) {
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
        keyword: to,
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
            iataCity: `All Airports in ${prettyWord(item.address.cityName)} (${
              item.iataCode
            })`,
            details: `${item.iataCode} ${prettyWord(item.name)}`,
            countryName: `${prettyWord(item.address.countryName)}`,
          };
          suggestionList.push(autosuggestObj);
        }
        setToArray(suggestionList);
        setIsLoading(false);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) console.log("request cancelled:", err.message);
        console.log("autosuggest fetch error", err);
        setIsLoading(false);
      });
  }, [to]);

  const handleToChange = (e) => {
    setTo(e.target.value);
    setOpenSuggestionsPaper(true);
  };

  const handlesuggestionclick = (e, suggestion) => {
    if (suggestion.subType === "CITY") {
      setTo(suggestion.iataCity);
    } else {
      setTo(suggestion.iataCodeCityName);
    }

    setOpenSuggestionsPaper(false);
  };

  const handleToClick = () => {
    setTo("");
  };

  const handleToClickAway = () => {
    if (toArray[0]) {
      if (toArray[0].subType === "CITY") {
        setTo(toArray[0].iataCity);
      } else {
        setTo(toArray[0].iataCodeCityName);
      }
      setOpenSuggestionsPaper(false);
    } else {
      if (to && !toArray.includes(to)) {
        setOpen(true);
        setTo("");
      }

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  const [elevation, setElevation] = useState(0);
  const [variant, setVariant] = useState("outlined");
  return (
    <React.Fragment>
      <div>
        <Paper elevation={elevation} variant={variant}>
          <InputBase
            onFocus={() => {
              setVariant("elevation");
              setElevation(3);
            }}
            onBlur={() => {
              setVariant("outlined");
              setElevation(1);
            }}
            placeholder="To Where ?"
            value={to}
            onChange={handleToChange}
            onClick={handleToClick}
            className={classes.textField}
            fullWidth
            inputProps={{ style: {} }}
            startAdornment={
              <LocationOnIcon className={classes.location} fontSize="small" />
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
                                <LocationOnIcon />
                              ) : (
                                <AirportIcon />
                              )}
                            </ListItemIcon>
                            <ListItemText
                              onClick={(e) =>
                                handlesuggestionclick(e, suggestion)
                              }
                            >
                              {suggestion.subType === "CITY" ? (
                                <React.Fragment>
                                  {suggestion.iataCity} <br />
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
                    : ""}
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
              icon={<WarningIcon />}
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
                  <CloseIcon fontSize="inherit" />
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
