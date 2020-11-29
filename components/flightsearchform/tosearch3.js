import React, { useCallback, useEffect, useState } from "react";
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
import {
  to3_,
  from4_,
  trip_,
  toLocal3_,
  fromLocal4_,
} from "../../recoil/state";
import Skeleton from "@material-ui/lab/Skeleton";
import useSWR from "swr";
const qs = require("qs");
import { debounce } from "lodash";

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

const ToSearch3 = () => {
  const classes = style();
  const [to, setTo] = useRecoilState(to3_);
  const [inputText, setInputText] = useState("");
  const [toLocal, setToLocal] = useRecoilState(toLocal3_);

  const [toArray, setToArray] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openSuggestionsPaper, setOpenSuggestionsPaper] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const source = Axios.CancelToken.source();

  const axiosToken = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const axiosAirportNames = Axios.create({
    method: "get",
    baseURL: "https://test.api.amadeus.com/v1/reference-data",
  });

  axiosAirportNames.interceptors.request.use(
    (req) => {
      //  console.log("req at req interceptor", req);
      if (!toLocal) {
        throw new Error(toLocal);
      }
      req.headers = {
        Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
      };
      return req;
    },
    (error) => {
      //   console.log("rejecting request b4 its sent");
      Promise.reject(error);
    }
  );

  axiosAirportNames.interceptors.response.use(
    (res) => {
      if (res.status !== 200 || !res.data || !res.data.data) {
        throw new Error("error response in interceptor", res.statusText);
      }
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
      return suggestionList;
    },
    async (error) => {
      if (
        error.response &&
        error.response.config &&
        error.response.status === 401
      ) {
        await axiosToken
          .request({
            data: qs.stringify({
              client_id: " kYUgZVtfSuy1NmE3kzGwtubzWGteoK1z",
              client_secret: "KDvXBul4gw1pL6rg",
              grant_type: "client_credentials",
            }),
          })
          .then((res) => {
            console.log("token at response interceptor", res.data.access_token);
            window.sessionStorage.setItem("accessToken", res.data.access_token);
          })
          .catch((err) => console.log(err.response));
      }
      return Promise.reject(error);
    }
  );

  const fetcher = async (toLocal) => {
    const res = await axiosAirportNames.request({
      url: `/locations?subType=CITY,AIRPORT&keyword=${toLocal}`,
    });
    //  console.log("res in fetcher", res);
    return res;
  };

  const { data, error, isValidating, mutate } = useSWR(toLocal, fetcher, {
    focusThrottleInterval: 86400000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 86400000,
    shouldRetryOnError: true,
    errorRetryCount: 5,
    errorRetryInterval: 3000,
    onLoadingSlow: () => {
      //  console.log("slow network detected");
    },
    onError: (error) => {
      //   console.log("error from fetcher", error);
    },
    onSuccess: (data) => {
      //   console.log("success data", data);
      //   setFromArray(data);
    },
  });

  //  console.log("toLocal", toLocal, isValidating, data, error);

  const handleToChange = (val) => {
    setToLocal(val);
    setOpenSuggestionsPaper(true);
    if (isValidating === false) {
      if (data === undefined && val) mutate();
    }
  };

  const handlesuggestionclick = (e, suggestion) => {
    if (!suggestion) {
      setTo("");
      setToLocal("");
      setInputText("");

      setOpenSuggestionsPaper(false);
      return;
    }
    if (suggestion.subType === "CITY") {
      setToLocal(suggestion.city);
      setInputText(suggestion.city);
      setTo(suggestion.iataCode);
    } else {
      setTo(suggestion.iataCode);
      setToLocal(suggestion.cityIata);
      setInputText(suggestion.cityIata);
    }
    setOpenSuggestionsPaper(false);
  };

  const handleToClick = () => {
    setTo("");
    setToLocal("");
    setInputText("");
  };

  const handleToClickAway = () => {
    if (!data) {
      setTo("");
      setToLocal("");
      setInputText("");

      setOpenSuggestionsPaper(false);
      return;
    }
    if (data[0]) {
      if (data[0].subType === "CITY") {
        setTo(data[0].iataCode);
        setToLocal(data[0].city);
        setInputText(data[0].city);
      } else {
        setTo(data[0].iataCode);
        setToLocal(data[0].cityIata);
        setInputText(data[0].cityIata);
      }
      setOpenSuggestionsPaper(false);
    } else {
      if (to && !data.includes(to)) {
        setOpen(true);
        setTo("");
        setToLocal("");
        setInputText("");
      }

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  const debounceInput = useCallback(debounce(handleToChange, 1000), []);

  return (
    <React.Fragment>
      <div>
        <Paper variant="outlined" className={classes.inputpaper}>
          <InputBase
            placeholder="To Where ?"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              debounceInput(e.target.value);
            }}
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
                {isValidating ? <LinearProgress /> : ""}
                <List component="nav" aria-label="main mailbox folders">
                  {data && data.length > 0
                    ? data.map((suggestion) => (
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
export default ToSearch3;
