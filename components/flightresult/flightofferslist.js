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

const fetcher = async (...arg) => {
  // console.log("url, lastSearch", arg);
  const data = await Axios({
    data: JSON.parse(arg[1]),
    method: "post",
    url: "/api/flightofferpost",
  })
    .then((res) => {
      // console.log("response", res);

      if (res.type === "error") throw new Error(res.error);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

const FlightOffersList = ({ storeData }) => {
  const [rd, setRenderedData] = useRecoilState(flightOffers_);
  const isLoading = useRecoilValue(isLoading_);
  const uidata = useRecoilValue(flightOffers_);

  const { data, error, isValidating, mutate } = useSWR(
    ["/api/flightofferpost", JSON.stringify(storeData.lastSearch)],
    fetcher,
    {
      focusThrottleInterval: 86400000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 86400000,
      dedupingInterval: 86400000,
      errorRetryInterval: 1000,
      errorRetryCount: 12,
      onLoadingSlow: () => {
        console.log("slow network detected");
      },
      onSuccess: (data) => {
        console.log("on success flightoffers data", data);
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

  if (error) return <>Ouch, something went wrong....</>;

  if (!data || !uidata)
    return (
      <>
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
        <Typography>
          Oops, Zero airlines found, please modify your search terms{" "}
        </Typography>
      </>
    );

  return (
    <>
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
              {uidata.map((flightOffer, index) => {
                return (
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
                );
              })}
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
