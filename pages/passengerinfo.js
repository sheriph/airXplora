import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  FormControl,
  FormHelperText,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { isEmpty, isObject } from "lodash";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PassengerForm from "../components/passengerinfo/passengerform";
import Switch from "@material-ui/core/Switch";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import BaseHeader from "../components/headers/baseheader";
import Skeleton from "@material-ui/lab/Skeleton";
import ClassicFooter from "../components/footers/classicfooter";
import ResultCard from "../components/flightresult/classsicresultcard";
import FlightSumarry from "../components/flightresult/flightsummary";
import { useRecoilState } from "recoil";
import { isDrawerOpen_ } from "../recoil/state";
import { createOrder, getFareRules } from "../components/general/utilities";
import Axios from "axios";
import useSWR from "swr";
const qs = require("qs");
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";

const styles = makeStyles((theme) => ({
  groupradio: {
    flexDirection: "row",
  },
  item: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  container: {
    backgroundColor: theme.palette.grey[200],
  },
  formcontainer: {
    backgroundColor: theme.palette.common.white,
    marginTop: "10px",
    marginBottom: "30px",
    padding: "10px",
    //  maxWidth: "1200px",
  },
  drawer: {
    width: "400px",
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      //  showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const PassengerInfo = () => {
  const classes = styles();

  const { register, errors, handleSubmit, control } = useForm();

  const [checked, setChecked] = useState(false);

  const [travellersProfile, setTravellersProfile] = useState(undefined);
  const [bookedFlightOffer, setBookedFlightOffer] = useState(undefined);
  const [isDrawerOpen, toggleDrawerState] = useRecoilState(isDrawerOpen_);
  const [local, setLocal] = useState(undefined);
  const [isLoading, setLoading] = useState(false);
  const [myOrder, setMyOrder] = useState(undefined);
  const [offerPricing, setOfferPricing] = useState(undefined);
  const [fareRules, setFareRules] = useState(undefined);
  const [counter, setCounter] = useState(0);
  const [isMutate, setMutate] = useState(false);

  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const alertPop = (message, type) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: type,
    });
  };

  const axiosToken = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const axiosCreateOrder = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v1/booking/flight-orders",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosCreateOrder.interceptors.request.use(
    (req) => {
      console.log("req", req);
      if (!req) throw new Error(req);
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

  axiosCreateOrder.interceptors.response.use(
    (res) => res,
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

  const fetcher = async (...arg) => {
    const res = await axiosCreateOrder.request({
      data: arg[1],
    });
    if (res.status !== 201) {
      throw new Error("error response", res);
    }
    return res;
  };

  const { data, error, isValidating, mutate } = useSWR(
    ["/api", myOrder],
    fetcher,
    {
      focusThrottleInterval: 86400000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 86400000,
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 3000,
      initialData: [],
      onLoadingSlow: () => {
        //  console.log("slow network detected");
      },
      onError: (error) => {
        console.log("error from fetcher", error.response, error);
        if (error.response) {
          for (let item of error.response.data.errors) {
            alertPop(item.title, "info");
            alertPop(item.detail, "info");
          }
        }
        // setMutate(false);
      },
      onSuccess: (data) => {
        console.log("success data", data);
        window.localStorage.setItem(
          "flightOrder",
          JSON.stringify(data.data.data)
        );
        //  setMutate(false);
        router.push("/success");
      },
    }
  );

  console.log("isValidating", isValidating);

  const onSubmit = async (submissionData) => {
    const order = createOrder(submissionData, bookedFlightOffer);
    setMyOrder({ data: order });
    setLoading(true);
    const priceVerifierObj = {
      data: {
        type: "flight-offers-pricing",
        flightOffers: [bookedFlightOffer],
      },
    };
    console.log("priceVerifierObj", priceVerifierObj);

    const axiosConfirmPrice = Axios.create({
      method: "post",
      baseURL:
        "https://test.api.amadeus.com/v1/shopping/flight-offers/pricing?include=detailed-fare-rules&forceClass=false",
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosConfirmPrice.interceptors.request.use(
      (req) => {
        req.headers = {
          Authorization: `Bearer ${window.sessionStorage.getItem(
            "accessToken"
          )}`,
        };
        return req;
      },
      (error) => {
        //  console.log("rejecting request b4 its sent");
        Promise.reject(error);
      }
    );

    axiosConfirmPrice.interceptors.response.use(
      (res) => {
        if (res.status !== 200) {
          throw new Error("error response in interceptor", res.statusText);
        }
        return res;
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
              console.log(
                "token at response interceptor",
                res.data.access_token
              );
              window.sessionStorage.setItem(
                "accessToken",
                res.data.access_token
              );
              setCounter((prev) => prev + 1);
              if (counter < 3) {
                console.log("trying again");
                onSubmit(submissionData);
                return;
              }
            })
            .catch((err) => console.log(err.response));
        }
        return Promise.reject(error);
      }
    );

    const res = await axiosConfirmPrice
      .request({ data: priceVerifierObj })
      .catch((err) => {
        console.log("catch block", err);
        setLoading(false);
      });

    if (res) {
      setLoading(true);
      console.log("price verified", res.data);

      if (res.data.warning) {
        alertPop(res.data.warning.detail, "warning");
        if (res.data.warning.code === "0") {
          alertPop(
            "Fares keep changing as many people are booking. Always complete your booking faster to avoid fare increase change",
            "success"
          );
        }
        alertPop(
          "Sorry, we are redirecting you to the search result.",
          "warning"
        );
        setLoading(false);
        setTimeout(() => {
          router.push("/flightresult");
        }, 5000);
        return;
      }

      console.log("submittion data", submissionData);

      console.log("order", order);
      // fetcher({ data: order });
      setLoading(false);
      mutate([], true);
      // setMutate(true);
      // mutate([], true);
    }
  };

  console.log("errors", errors);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const offerPricing = JSON.parse(
        window.localStorage.getItem("offerPricing")
      );
      const fareRules = getFareRules(offerPricing);
      console.log("fareRules", fareRules);
      window.localStorage.setItem("fareRules", JSON.stringify(fareRules));
      setFareRules(fareRules);
      const bookedFlight = JSON.parse(
        window.localStorage.getItem("bookedFlightOffer")
      );
      setOfferPricing(offerPricing);
      setBookedFlightOffer(bookedFlight);

      const passengerinfo = JSON.parse(
        window.localStorage.getItem("passengerInfo")
      );

      if (Array.isArray(passengerinfo)) {
        setTravellersProfile(passengerinfo);
      }
    }
  }, []);

  /*   useEffect(() => {
    if (isMutate) {
      console.log("isloading", myOrder);

      mutate([], true);
    }
  }, [isMutate]); */

  useEffect(() => {
    //this test for stale and undefined data
    if (typeof window !== "undefined") {
      const local = JSON.parse(window.localStorage.getItem("local"));
      if (local === "undefined") {
        alertPop(
          "you have made any search, please search for a flight on the homepage",
          "success"
        );
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
      const departureDate = local.prevState.departureDate;
      if (new Date(departureDate).getTime() < new Date().getTime()) {
        alertPop(
          "travel date is in the past, redirecting to homepage",
          "success"
        );
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
      setLocal(local);
    }
  }, []);

  //if (isEmpty(travellersProfile)) return <> Loading ...</>;
  console.log("fareRules", fareRules);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <BaseHeader title="airXplora : Your Travel Tech Companion" />
        </Grid>
        <Grid item xs={12}>
          {bookedFlightOffer ? (
            <Box my={2} onClick={() => toggleDrawerState((prev) => !prev)}>
              <ResultCard flightOffer={bookedFlightOffer} />
            </Box>
          ) : (
            <Skeleton variant="rect" height={118} />
          )}
        </Grid>
        <Container disableGutters>
          {travellersProfile ? (
            <Grid
              component={Paper}
              item
              xs={12}
              className={classes.formcontainer}
              container
              justify="center"
            >
              <Grid item xs={12}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3} justify="space-evenly">
                    <Grid item xs={12}>
                      {travellersProfile.map((item, index) => {
                        let ageLimit = 120;
                        if (item.travelerType === "CHILD") {
                          ageLimit = 11;
                        } else if (item.travelerType === "HELD_INFANT") {
                          ageLimit = 2;
                        }

                        return (
                          <PassengerForm
                            register={register}
                            errors={errors}
                            handleSubmit={handleSubmit}
                            control={control}
                            ageLimit={ageLimit}
                            key={item.travelerId}
                            travelerId={item.travelerId}
                            item={item}
                          />
                        );
                      })}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Grid container justify="space-between">
                        <Grid item>
                          <Typography
                            color="primary"
                            component="a"
                            variant="caption"
                          >
                            Yes, I have read the terms of this booking
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Switch
                            checked={checked}
                            onChange={() => setChecked((prev) => !prev)}
                            name="checkedB"
                            color="primary"
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<NavigateNextIcon />}
                        type="submit"
                        size="small"
                        disabled={!checked || isLoading || isValidating}
                        endIcon={
                          isLoading || isValidating ? (
                            <CircularProgress size="20px" color="primary" />
                          ) : (
                            ""
                          )
                        }
                      >
                        {isLoading || isValidating
                          ? "CONFIRMING SEAT .."
                          : "Complete Booking"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          ) : (
            <Skeleton variant="rect" height={118} />
          )}
        </Container>
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={isDrawerOpen}
          ModalProps={{
            keepMounted: false,
            onBackdropClick: () => toggleDrawerState((prev) => !prev),
          }}
          transitionDuration={250}
        >
          <Container>
            {local && bookedFlightOffer ? (
              <FlightSumarry
                flightOffer={bookedFlightOffer}
                prevState={local.prevState}
                noShowHeader={true}
                farePenalties={fareRules}
              />
            ) : (
              "Loading"
            )}
          </Container>
        </Drawer>
        <Grid item xs={12}>
          <ClassicFooter />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PassengerInfo;
