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
  InputAdornment,
  InputBase,
  Container,
} from "@material-ui/core";
import Axios from "axios";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AirportIcon from "@material-ui/icons/LocalAirport";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import { prettyWord } from "../general/utilities";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fromSearchState, setFromSearchState } from "../../recoil/state";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const style = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    marginTop: "5px",
    zIndex: "100000",
  },
  textField: {
    height: "50px",
  },
  radio: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3)
  },
}));

const FromSearch = () => {
  const classes = style();
  const from = useRecoilValue(fromSearchState);
  const setFrom = useSetRecoilState(setFromSearchState);
  const [fromArray, setFromArray] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openSuggestionsPaper, setOpenSuggestionsPaper] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  let cancelToken = Axios.CancelToken;
  let source = cancelToken.source();

  useEffect(() => {
    if (!from /* || from.length > 6 */) {
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
        keyword: from,
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
        setFromArray(suggestionList);
        setIsLoading(false);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) console.log("request cancelled:", err.message);
        console.log("autosuggest fetch error", err);
        setIsLoading(false);
      });
  }, [from]);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    setOpenSuggestionsPaper(true);
  };

  const handlesuggestionclick = (e, suggestion) => {
    if (suggestion.subType === "CITY") {
      setFrom(suggestion.iataCity);
    } else {
      setFrom(suggestion.iataCodeCityName);
    }

    setOpenSuggestionsPaper(false);
  };

  const handleFromClick = () => {
    setFrom("");
  };

  const handleFromClickAway = () => {
    if (fromArray[0]) {
      if (fromArray[0].subType === "CITY") {
        setFrom(fromArray[0].iataCity);
      } else {
        setFrom(fromArray[0].iataCodeCityName);
      }
      setOpenSuggestionsPaper(false);
    } else {
      if (from && !fromArray.includes(from)) {
        setOpen(true);
        setFrom("");
      }

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  const [elevation, setElevation] = useState(1);
  const [variant, setVariant] = useState("outlined");

  return (
    <React.Fragment>
      <Container disableGutters>
        <Paper elevation={elevation} variant={variant}>
          <InputBase
            placeholder="Where From ?"
            onFocus={() => {
              setVariant("elevation");
              setElevation(3);
            }}
            onBlur={() => {
              setVariant("outlined");
              setElevation(1);
            }}
            value={from}
            onChange={handleFromChange}
            onClick={handleFromClick}
            className={classes.textField}
            fullWidth
            inputProps={{ style: {} }}
            startAdornment={
              <RadioButtonUncheckedIcon
                className={classes.radio}
                fontSize="small"
              />
            }
          />
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
        {openSuggestionsPaper ? (
          <ClickAwayListener onClickAway={handleFromClickAway}>
            <Paper className={classes.paper} elevation={6}>
              {isloading ? <LinearProgress /> : ""}
              <List component="nav" aria-label="main mailbox folders">
                {fromArray
                  ? fromArray.map((suggestion) => (
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
      </Container>
    </React.Fragment>
  );
};

export default FromSearch;
