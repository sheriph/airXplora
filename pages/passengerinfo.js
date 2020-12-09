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
import { createOrder } from "../components/general/utilities";
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
  const router = useRouter();

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
      },
      onSuccess: (data) => {
        console.log("success data", data);
        window.localStorage.setItem(
          "flightOrder",
          JSON.stringify(data.data.data)
        );
        setLoading(false);
        router.push("/success");
      },
    }
  );

  console.log("isValidating", isValidating);

  const onSubmit = (data) => {
    console.log("submitting", data);

    const order = createOrder(data, bookedFlightOffer);
    console.log("order", order);
    // fetcher({ data: order });
    setMyOrder({ data: order });
    setLoading(true);
    // mutate([], true);
  };

  console.log("errors", errors);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const passengerinfo = JSON.parse(
        window.localStorage.getItem("passengerInfo")
      );
      const flightOffer = JSON.parse(
        window.localStorage.getItem("bookedFlightOffer")
      );
      if (isObject(flightOffer)) {
        setBookedFlightOffer(flightOffer);
      }
      if (Array.isArray(passengerinfo)) {
        setTravellersProfile(passengerinfo);
      }
      setLocal(JSON.parse(window.localStorage.getItem("local")));
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log("isloading", myOrder);

      mutate([], true);
    }
  }, [isLoading]);

  //if (isEmpty(travellersProfile)) return <> Loading ...</>;

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
        <Container>
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
                          ageLimit = 12;
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
                        disabled={!checked || isLoading}
                        endIcon={
                          isLoading ? (
                            <CircularProgress size="20px" color="primary" />
                          ) : (
                            ""
                          )
                        }
                      >
                        {isLoading ? "CONFIRMING SEAT .." : "Complete Booking"}
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
