import React, { useState } from "react";
import Axios from "axios";
import useSWR from "swr";
import Skeleton from "@material-ui/lab/Skeleton";
import { formatPrice } from "../general/utilities";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDrawerOpen_, lowestValue_, matrixPrice_ } from "../../recoil/state";
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
const qs = require("qs");

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

/* const fetcher = async (...arg) => {
  // console.log("url, lastSearch", arg);
  const data = await Axios({
    data: JSON.parse(arg[3]),
    method: "post",
    url: "/api/flightofferpost",
  })
    .then((res) => {
      const { type, error } = res.data;
      if (type === "error") throw new Error(error);
      else if (res.data[0]) return res.data[0];
      else throw new Error("error: Empty flightOffer response");
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return data;
}; */

const GetFlightOffer = ({ departureDate, returnDate, lastSearch }) => {
  const classes = styles();
  const [matrixPrice, setMatrixPrice] = useRecoilState(matrixPrice_);
  const matrixPriceSub = useRecoilValue(matrixPrice_);
  const [lv, setLowestValue] = useRecoilState(lowestValue_);
  const lowestValue = useRecoilValue(lowestValue_);

  const axiosToken = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const axiosFlightOffer = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v2/shopping/flight-offers",
  });

  axiosFlightOffer.interceptors.request.use(
    (req) => {
      req.headers = {
        Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };
      return req;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosFlightOffer.interceptors.response.use(
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
    const res = await axiosFlightOffer.request({ data: arg[3] });
    if (
      res.status !== 200 ||
      !res.data ||
      !res.data.data ||
      !res.data.data[0]
    ) {
      throw new Error("response status not correct");
    }
    return res.data.data[0];
  };

  const { data, error, isValidating } = useSWR(
    [
      "/api/flightofferpost",
      departureDate,
      returnDate,
      JSON.stringify(lastSearch),
    ],
    fetcher,
    {
      focusThrottleInterval: 86400000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 86400000,
      // dedupingInterval: 86400000,
      errorRetryInterval: 7000,
      shouldRetryOnError: true,
      errorRetryCount: 5,
      onLoadingSlow: () => {
      },
      onError: (error) => {
      },
      onSuccess: (data) => {
        if (typeof data.price.total !== "string") {
          throw new Error("cant find price");
        }
        let set = new Set(matrixPriceSub);
        set.add(data.price.total);
        setMatrixPrice(Array.from(set));
        setLowestValue(Math.min(...matrixPriceSub));
      },
      //  initialData: defaultData,
    }
  );

  // console.log("data, error", data, error);

  // return "25,000";

  const popupState = usePopupState({
    variant: "popper",
    popupId: "demoPopper",
  });

  if (error) return <>....</>;
  if (!data) return <Skeleton width="100%" variant="text" />;

  if (data) {
    // console.log("airline name response:", data);

    //  const lowestValue = Math.min(...matrixPriceSub);
    const highestValue = Math.max(...matrixPriceSub);

    const MyPopper = () => (
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
              <ResultCard flightOffer={data} />
            </Grid>
          </Grid>
        </Paper>
      </Popper>
    );

    if (lowestValue === Number(data.price.total))
      return (
        <>
          <Paper
            {...bindToggle(popupState)}
            elevation={4}
            className={classes.paperlowest}
          >
            <Typography variant="caption">
              &#8358;{formatPrice(data.price.total)}
            </Typography>
          </Paper>
          <MyPopper />
        </>
      );

    return (
      <React.Fragment>
        <Typography
          className={
            highestValue === Number(data.price.total)
              ? classes.typographyhighest
              : classes.typography
          }
          variant="caption"
          {...bindToggle(popupState)}
        >
          &#8358;{formatPrice(data.price.total)}
        </Typography>
        <MyPopper />
      </React.Fragment>
    );
  }
};

export default GetFlightOffer;
