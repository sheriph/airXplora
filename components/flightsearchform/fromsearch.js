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
import { useRecoilState } from "recoil";
import { from_, fromLocal_, fromcity_ } from "../../recoil/state";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
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
  radio: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  inputpaper: {
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const FromSearch = () => {
  const classes = style();
  const [from, setFrom] = useRecoilState(from_);
  const [fromcity, setFromCity] = useRecoilState(fromcity_)

  
  const [fromLocal, setFromLocal] = useRecoilState(fromLocal_);
  const [fromArray, setFromArray] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openSuggestionsPaper, setOpenSuggestionsPaper] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const source = Axios.CancelToken.source();

  const handleFromChange = (e) => {
    setFromLocal(e.target.value);
    setOpenSuggestionsPaper(true);
    if (!fromLocal /* || from.length > 6 */) {
      return;
    }

    if (isloading === true) {
      source.cancel("operation cancelled and starting a new search");
    }

    setIsLoading(true);
    Axios({
      method: "post",
      url: "/api/airportautosuggest",
      cancelToken: source.token,
      data: {
        keyword: fromLocal,
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
        setFromArray(suggestionList);
        if (isloading === true) {
          source.cancel("operation cancelled and starting a new search");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) console.log("request cancelled:", err.message);
        console.log("autosuggest fetch error", err);
        if (isloading === true) {
          source.cancel("operation cancelled and starting a new search");
        }
        setIsLoading(false);
      });
  };

  const handlesuggestionclick = (e, suggestion) => {
    if (!suggestion) {
      setFrom("");
      setFromLocal("");
      setOpenSuggestionsPaper(false);
      return;
    }
    if (suggestion.subType === "CITY") {
      setFrom(suggestion.iataCode);
      setFromCity(suggestion.city)
      setFromLocal(suggestion.city);
    } else {
      setFrom(suggestion.iataCode);
      setFromCity(suggestion.city)
      setFromLocal(suggestion.cityIata);
    }

    setOpenSuggestionsPaper(false);
  };

  const handleFromClick = () => {
    setFrom("");
    setFromLocal("");
  };

  const handleFromClickAway = () => {
    if (!fromArray) {
      setFrom("");
      setFromLocal("");
      setOpenSuggestionsPaper(false);
      return;
    }
    if (fromArray[0]) {
      if (fromArray[0].subType === "CITY") {
        setFromLocal(fromArray[0].city);
        setFrom(fromArray[0].iataCode);
        setFromCity(fromArray[0].city)
      } else {
        setFromLocal(fromArray[0].cityIata);
        setFrom(fromArray[0].iataCode);
        setFromCity(fromArray[0].city)
      }
      setOpenSuggestionsPaper(false);
    } else {
      if (fromLocal && !fromArray.includes(fromLocal)) {
        setOpen(true);
        setFromLocal("");
        setFrom("");
      }

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  return (
    <React.Fragment>
      <Container disableGutters>
        <Paper className={classes.inputpaper} variant="outlined">
          <InputBase
            placeholder="Where From ?"
            value={fromLocal}
            onChange={(e) => handleFromChange(e)}
            onClick={handleFromClick}
            className={classes.textField}
            fullWidth
            inputProps={{ style: {} }}
            startAdornment={
              <RadioButtonUncheckedIcon
                className={classes.radio}
                fontSize="small"
                color="primary"
              />
            }
          />
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
                                {suggestion.city} <br />
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
                  : [null, null, null, null, null].map((item, index) => (
                      <React.Fragment key={index}>
                        <ListItem button>
                          <ListItemIcon>
                            <Skeleton variant="circle" width={20} height={20} />
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
      </Container>
    </React.Fragment>
  );
};

export default FromSearch;
