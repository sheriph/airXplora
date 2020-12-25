import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  makeStyles,
  Grid,
  Drawer,
  Button,
  useMediaQuery,
  ButtonGroup,
  Paper,
} from "@material-ui/core";

import FlightSumarry from "../flightresult/flightsummary";
import ResultCard from "../flightresult/classsicresultcard";

import useSWR from "swr";
import { useCollection, useDocument } from "@nandorojo/swr-firestore";
import Axios from "axios";
import LazyLoad from "react-lazyload";
import Skeleton from "@material-ui/lab/Skeleton";
import FareCalendar from "../flightresult/farecalendar";
import PricingTable from "../flightresult/pricingtable";
import {
  flightOffers_,
  flightOffer_,
  isDrawerOpen_,
  isLoading_,
} from "../../recoil/state";
import { useRecoilState, useRecoilValue } from "recoil";
import Filter from "../filter/filter";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
const qs = require("qs");
import TopBarProgress from "react-topbar-progress-indicator";

const styles = makeStyles((theme) => ({
  baseBox: {
    margin: "0",
    padding: "0",
  },
  hotdeals: {
    paddingTop: "20px",
  },
  resultcard: {
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  filterbox: {
    paddingTop: "20px",
  },
  drawer: {
    width: "400px",
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
  container: {
    backgroundColor: theme.palette.grey[200],
  },
  placeholdercontainer: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  skeletonpad: {
    margin: "15px 5px 15px 5px",
  },
}));

const FlightOffersList = ({ storeData }) => {
  const [rd, setRenderedData] = useRecoilState(flightOffers_);
  const isLoading = useRecoilValue(isLoading_);
  const uidata = useRecoilValue(flightOffers_);
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { data: commissionData } = useDocument(
    "adminSettings/commissionSettings"
  );

  TopBarProgress.config({
    barColors: {
      0: "#f50000",
      0.5: "#2ec730",
      "1.0": "#2ec730",
    },
    shadowBlur: 7,
  });

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

  const axiosFlightOffers = Axios.create({
    method: "post",
    baseURL: "https://test.api.amadeus.com/v2/shopping/flight-offers",
  });

  axiosFlightOffers.interceptors.request.use(
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

  axiosFlightOffers.interceptors.response.use(
    (res) => {
      console.log("response at interceptor", commissionData, res);
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
            console.log("token at response interceptor", res.data.access_token);
            window.sessionStorage.setItem("accessToken", res.data.access_token);
          })
          .catch((err) => console.log(err.response));
      }
      if (error.response.status === 400) {
        alertPop(
          "Stored date is in the past, please make a new search, redirecting to the homepage",
          "warning"
        );
        setTimeout(() => {
          router.push("/");
        }, 5000);
      }
      return Promise.reject(error);
    }
  );

  const fetcher = async () => {
    const res = await axiosFlightOffers.request({
      data: JSON.stringify(storeData.lastSearch),
    });
    if (res.status !== 200) {
      throw new Error("response status not correct");
    }
    return res.data.data;
  };

  const { data, error, isValidating, mutate } = useSWR(
    commissionData ? "flightOffers" : null,
    fetcher,
    {
      focusThrottleInterval: 86400000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 86400000,
      // dedupingInterval: 86400000,
      errorRetryInterval: 1000,
      shouldRetryOnError: true,
      errorRetryCount: 3,
      onLoadingSlow: () => {
        // alertPop("slow network detected", "warning");
      },
      onError: (error) => {
        //  console.log("on eror", error);
        //  alertPop("error getting flight options, trying again ....", "warning");
      },
      onSuccess: (data) => {
        //  alertPop("flight options received", "success");
        setRenderedData(data);
      },
      //  initialData: defaultData,
    }
  );

  const classes = styles();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [stateFlightOffer, setStateFlightOffer] = useState(null);
  const [isDrawerOpen, toggleDrawerState] = useRecoilState(isDrawerOpen_);

  const toggleDrawer = (flightOffer) => {
    // console.log("clicked drawer", flightOffer);
    setStateFlightOffer(flightOffer);
    toggleDrawerState((prev) => !prev);
  };

  // if (error) return <>Ouch, something went wrong....</>;

  if (!data || !uidata || error)
    return (
      <>
        {isValidating && <TopBarProgress />}
        {[1, 2, 3, 5, 5].map((item, index) => (
          <Skeleton
            className={classes.skeletonpad}
            key={index}
            width="100%"
            height={200}
            variant="rect"
            component={Paper}
          />
        ))}
      </>
    );

  if (data.length === 0)
    return (
      <>
        {isValidating && <TopBarProgress />}
        <Typography>
          Oops, Zero airlines found, please modify your search terms{" "}
        </Typography>
      </>
    );

  return (
    <>
      {isValidating && <TopBarProgress />}
      <Grid item xs={12}>
        <PricingTable
          component={
            <FareCalendar
              prevState={storeData.prevState}
              lastSearch={storeData.lastSearch}
            />
          }
          flightOffer={data[0]}
        />
      </Grid>
      <Grid item container>
        {isDesktop ? (
          <Grid item xs={12} md={3} className={classes.filterbox}>
            <Filter
              // mutate={mutate}
              defaultFlightOffers={data}
              isMobile={false}
            />
          </Grid>
        ) : (
          <Grid item xs={12} md={3}>
            <Filter
              // updateData={setRenderedData}
              defaultFlightOffers={data}
              isMobile={true}
            />
          </Grid>
        )}
        <Grid item xs={12} md={9} className={classes.resultcard}>
          {uidata.length === 0 ? (
            <Typography variant="h4">
              OOps, no result found. Please modify your search terms
            </Typography>
          ) : (
            <>
              {uidata.map((flightOffer, index) => (
                <LazyLoad
                  key={flightOffer.id}
                  height={150}
                  offset={300}
                  //  unmountIfInvisible
                  placeholder={
                    <Container className={classes.placeholdercontainer}>
                      <Box p={3}>
                        <Skeleton variant="rect" height={150} />
                      </Box>
                    </Container>
                  }
                  scroll
                >
                  <Box py={1}>
                    {isLoading ? (
                      <Skeleton
                        className={classes.skeletonpad}
                        key={index}
                        width="100%"
                        height={200}
                        variant="rect"
                        component={Paper}
                      />
                    ) : (
                      <Box onClick={() => toggleDrawer(flightOffer)}>
                        <ResultCard flightOffer={flightOffer} />
                      </Box>
                    )}
                  </Box>
                </LazyLoad>
              ))}
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
                  <FlightSumarry
                    flightOffer={stateFlightOffer}
                    prevState={storeData.prevState}
                  />
                </Container>
              </Drawer>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FlightOffersList;
