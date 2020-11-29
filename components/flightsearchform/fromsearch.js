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
  const [inputText, setInputText] = useState("");
  const [from, setFrom] = useRecoilState(from_);
  const [fromcity, setFromCity] = useRecoilState(fromcity_);
  const [fromLocal, setFromLocal] = useRecoilState(fromLocal_);
  const [fromArray, setFromArray] = useState(null);
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
      if (!fromLocal) {
        throw new Error(fromLocal);
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

  const fetcher = async (fromLocal) => {
    const res = await axiosAirportNames.request({
      url: `/locations?subType=CITY,AIRPORT&keyword=${fromLocal}`,
    });
    //  console.log("res in fetcher", res);
    return res;
  };

  const { data, error, isValidating, mutate } = useSWR(fromLocal, fetcher, {
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

  //  console.log("fromLocal", fromLocal, isValidating, data, error);

  const handleFromChange = (val) => {
    setFromLocal(val);
    setOpenSuggestionsPaper(true);
    if (isValidating === false) {
      if (data === undefined && val) mutate();
    }
  };

  const handlesuggestionclick = (e, suggestion) => {
    if (!suggestion) {
      setFrom("");
      setFromLocal("");
      setInputText("");
      setOpenSuggestionsPaper(false);
      return;
    }
    if (suggestion.subType === "CITY") {
      setFrom(suggestion.iataCode);
      setFromCity(suggestion.city);
      setFromLocal(suggestion.city);
      setInputText(suggestion.city);
    } else {
      setFrom(suggestion.iataCode);
      setFromCity(suggestion.city);
      setFromLocal(suggestion.cityIata);
      setInputText(suggestion.cityIata);
    }

    setOpenSuggestionsPaper(false);
  };

  const handleFromClick = () => {
    setFrom("");
    setFromLocal("");
    setInputText("");
  };

  const handleFromClickAway = () => {
    if (!data) {
      setFrom("");
      setFromLocal("");
      setInputText("");
      setOpenSuggestionsPaper(false);
      return;
    }
    if (data[0]) {
      if (data[0].subType === "CITY") {
        setFromLocal(data[0].city);
        setInputText(data[0].city);
        setFrom(data[0].iataCode);
        setFromCity(data[0].city);
      } else {
        setFromLocal(data[0].cityIata);
        setInputText(data[0].cityIata);
        setFrom(data[0].iataCode);
        setFromCity(data[0].city);
      }
      setOpenSuggestionsPaper(false);
    } else {
      if (fromLocal && !data.includes(fromLocal)) {
        setOpen(true);
        setFromLocal("");
        setInputText("");
        setFrom("");
      }
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  const debounceInput = useCallback(debounce(handleFromChange, 1000), []);

  return (
    <React.Fragment>
      <Container disableGutters>
        <Paper className={classes.inputpaper} variant="outlined">
          <InputBase
            placeholder="Where From ?"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              debounceInput(e.target.value);
            }}
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
