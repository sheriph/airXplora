import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  from_,
  from1_,
  from2_,
  from3_,
  from4_,
  to_,
  to1_,
  to2_,
  to3_,
  to4_,
  adult_,
  child_,
  infant_,
  departureDate_,
  departureDate1_,
  departureDate2_,
  departureDate3_,
  departureDate4_,
  returnDate_,
  trip_,
  showRepeater1_,
  showRepeater2_,
  showRepeater3_,
  classOfBooking_,
  fromcity_,
  tocity_,
  fromLocal_,
  fromLocal3_,
  fromLocal4_,
  fromLocal1_,
  fromLocal2_,
  toLocal_,
  toLocal1_,
  toLocal2_,
  toLocal3_,
  toLocal4_,
  prevState_,
  flightOffer_,
  lastSearch_,
} from "../../recoil/state";
import { useSnackbar } from "notistack";
import Axios from "axios";
import MyBackdrop from "../backdrop/backdrop";
import { useRouter } from "next/router";
import CheckIcon from "@material-ui/icons/Check";
import { useDocument } from "@nandorojo/swr-firestore";

const styles = makeStyles((theme) => ({
  button: {
    height: "48px",
    width: "100%",
  },
  backdroproot: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "10001",
  },
}));

/* const StateIcon = ({ isloading }) => {
  if (isloading === true) {
    return <CircularProgress color="inherit" size={20} />;
  }
  if (isloading === false) {
    return <SearchIcon color="inherit" />;
  }

  if (isloading === "confirmed") {
    return <CheckIcon color="inherit" />;
  }
}; */

const SearchButton = () => {
  const classes = styles();
  const from = useRecoilValue(from_);
  const fromCity = useRecoilValue(fromcity_);
  const from1 = useRecoilValue(from1_);
  const from2 = useRecoilValue(from2_);
  const from3 = useRecoilValue(from3_);
  const from4 = useRecoilValue(from4_);
  const to = useRecoilValue(to_);
  const toCity = useRecoilValue(tocity_);
  const to1 = useRecoilValue(to1_);
  const to2 = useRecoilValue(to2_);
  const to3 = useRecoilValue(to3_);
  const to4 = useRecoilValue(to4_);

  const fromLocal = useRecoilValue(fromLocal_);
  const fromLocal1 = useRecoilValue(fromLocal1_);
  const fromLocal2 = useRecoilValue(fromLocal2_);
  const fromLocal3 = useRecoilValue(fromLocal3_);
  const fromLocal4 = useRecoilValue(fromLocal4_);
  const toLocal = useRecoilValue(toLocal_);
  const toLocal1 = useRecoilValue(toLocal1_);
  const toLocal2 = useRecoilValue(toLocal2_);
  const toLocal3 = useRecoilValue(toLocal3_);
  const toLocal4 = useRecoilValue(toLocal4_);

  const adult = useRecoilValue(adult_);
  const child = useRecoilValue(child_);
  const infant = useRecoilValue(infant_);

  const departureDate = useRecoilValue(departureDate_);
  const departureDate1 = useRecoilValue(departureDate1_);
  const departureDate2 = useRecoilValue(departureDate2_);
  const departureDate3 = useRecoilValue(departureDate3_);
  const departureDate4 = useRecoilValue(departureDate4_);
  const returnDate = useRecoilValue(returnDate_);
  const tripType = useRecoilValue(trip_);
  const repeater1 = useRecoilValue(showRepeater1_);
  const repeater2 = useRecoilValue(showRepeater2_);
  const repeater3 = useRecoilValue(showRepeater3_);
  const repeater4 = useRecoilValue(showRepeater3_);
  const classOfBooking = useRecoilValue(classOfBooking_);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isloading, setLoading] = useState(false);

  const alertPop = (message, type) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: type,
    });
  };

  const state = {
    from,
    fromCity,
    from1,
    from2,
    from3,
    from4,
    to,
    toCity,
    to1,
    to2,
    to3,
    to4,
    fromLocal,
    fromLocal1,
    fromLocal2,
    fromLocal3,
    fromLocal4,
    fromLocal,
    fromLocal1,
    fromLocal2,
    fromLocal3,
    fromLocal4,
    toLocal,
    toLocal1,
    toLocal2,
    toLocal3,
    toLocal4,
    departureDate,
    departureDate1,
    departureDate2,
    departureDate3,
    departureDate4,
    returnDate,
    tripType,
    adult,
    child,
    infant,
  };

  const [prevState, setPrevState] = useRecoilState(prevState_);
  const router = useRouter();
  const [flightOffers, setFlightOffers] = useRecoilState(flightOffer_);
  const [lastSearch, setLastSearch] = useRecoilState(lastSearch_);
  const { set } = useDocument("flightData/stateData");

  const handleSearch = () => {
    const dataModel = {
      currencyCode: "NGN",
      createOriginDestinations: () => {
        if (tripType === "Round trip") {
          if (from && to && departureDate && returnDate) {
            let obj1 = {
              id: "1",
              originLocationCode: from,
              destinationLocationCode: to,
              departureDateTimeRange: {
                date: departureDate.toJSON().split("T")[0],
              },
            };

            let obj2 = {
              id: "2",
              originLocationCode: to,
              destinationLocationCode: from,
              departureDateTimeRange: {
                date: returnDate.toJSON().split("T")[0],
              },
            };

            return [obj1, obj2];
          } else {
            console.log("check the missing");

            alertPop("Please provide the missing info", "warning");

            return null;
          }
        } else if (tripType === "One way") {
          if (from && to && departureDate) {
            let obj1 = {
              id: "1",
              originLocationCode: from,
              destinationLocationCode: to,
              departureDateTimeRange: {
                date: departureDate.toJSON().split("T")[0],
              },
            };
            return [obj1];
          } else {
            console.log("check the missing");
            alertPop("Please provide the missing info", "warning");
            return null;
          }
        } else if (tripType === "Multi-city") {
          let originDestinations = [
            {
              id: "1",
              originLocationCode: from,
              destinationLocationCode: to,
              departureDateTimeRange: {
                date: departureDate.toJSON().split("T")[0],
              },
            },
            {
              id: "2",
              originLocationCode: from1,
              destinationLocationCode: to1,
              departureDateTimeRange: {
                date: departureDate1.toJSON().split("T")[0],
              },
            },
            {
              id: "3",
              originLocationCode: from2,
              destinationLocationCode: to2,
              departureDateTimeRange: {
                date: departureDate2.toJSON().split("T")[0],
              },
            },
            {
              id: "4",
              originLocationCode: from3,
              destinationLocationCode: to3,
              departureDateTimeRange: {
                date: departureDate3.toJSON().split("T")[0],
              },
            },
            {
              id: "5",
              originLocationCode: from4,
              destinationLocationCode: to4,
              departureDateTimeRange: {
                date: departureDate4.toJSON().split("T")[0],
              },
            },
          ];
          if (repeater1 === false) {
            originDestinations = originDestinations.slice(0, 1);
          } else if (repeater2 === false) {
            originDestinations = originDestinations.slice(0, 2);
          } else if (repeater3 === false) {
            originDestinations = originDestinations.slice(0, 3);
          } else if (repeater4 === false) {
            originDestinations = originDestinations.slice(0, 4);
          } else if (to4 === "" || from4 === "") {
            originDestinations = originDestinations.slice(0, 4);
          }
          for (let obj of originDestinations) {
            for (let item in obj) {
              if (obj[item] === "") {
                console.log("some input missing");
                alertPop("Please provide the missing info", "warning");
                return null;
              }
            }
          }
          return originDestinations;
        }
      },

      createTravelers: () => {
        let travelersArray = [];
        let id = 1;
        for (let i = 0; i < adult; i++) {
          let adultObj = { id: `${id++}`, travelerType: "ADULT" };
          travelersArray.push(adultObj);
        }

        if (child > 0) {
          for (let i = 0; i < child; i++) {
            let childObj = { id: `${id++}`, travelerType: "CHILD" };
            travelersArray.push(childObj);
          }
        }
        if (infant > 0) {
          let associatedAdultId = adult;
          // let assAdult = adult - 1;
          for (let i = 0; i < infant; i++) {
            let infantObj = {
              id: `${id++}`,
              travelerType: "HELD_INFANT",
              associatedAdultId: `${associatedAdultId--}`,
            };
            travelersArray.push(infantObj);
          }
        }
        return travelersArray;
      },
      sources: ["GDS"],
      searchCriteria: {
        maxFlightOffers: 250,
        flightFilters: {
          cabinRestrictions: [
            {
              cabin: classOfBooking,
              coverage: "MOST_SEGMENTS",
              originDestinationIds: ["1"],
            },
          ],
          carrierRestrictions: {
            excludedCarrierCodes: ["OZ"],
          },
        },
      },
    };

    let data = {};
    data.currencyCode = dataModel.currencyCode;
    data.originDestinations = dataModel.createOriginDestinations();
    data.travelers = dataModel.createTravelers();
    data.sources = dataModel.sources;
    data.searchCriteria = dataModel.searchCriteria;

    for (let item in data) {
      if (data[item] === null) {
        return;
      }
    }

    console.log("state", state);

    console.log("congrats, u made it here: see data", data);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "local",
        JSON.stringify({ lastSearch: data, prevState: state })
      );
      router.push("/flightresult").then((res) => {
        window.scrollTo(0, 0);
      });
    }
  };
  return (
    <React.Fragment>
      <Button
        disableElevation
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SearchIcon color="inherit" />}
        className={classes.button}
        onClick={handleSearch}
      >
        Search
      </Button>
      {/*  <Backdrop classes={{ root: classes.backdroproot }} open={isloading}>
        <MyBackdrop state={state} />
      </Backdrop> */}
    </React.Fragment>
  );
};

export default SearchButton;
