// new array methods definitions//

import next from "next";

// Warn if overriding existing method
/* if (Array.prototype.equals)
  console.warn(
    "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
  ); */
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array) return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length) return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

// end of new array method definitons //

export const isArrayEquals = (a, b) => a.equals(b);

export const getTime = (rawTimeString) => {
  let time = rawTimeString.split("T")[1].slice(0, 5);
  let timeArray = time.split(":");
  let hrs = timeArray[0];
  let min = timeArray[1];
  let newhrs = hrs > 12 ? hrs - 12 : hrs;
  let suffix = hrs > 12 ? "pm" : "am";
  return ` ${newhrs}:${min}${suffix}`;
};

export const getNumberOfNights = (
  departureRawTimeString,
  arrivalRawTimeString
) => {
  const depaturedate = new Date(departureRawTimeString.split("T")[0]);

  const arrivaldate = new Date(arrivalRawTimeString.split("T")[0]);

  for (let i = 0; i < 10; i++) {
    let compareddate = new Date(
      depaturedate.getFullYear(),
      depaturedate.getMonth(),
      depaturedate.getDate() + i
    );
    if (compareddate.getDate() === arrivaldate.getDate()) {
      return i;
    }
  }
};

export const getFlightStops = (itineraryIndex) => {
  if (itineraryIndex.segments.length === 1) {
    return `Direct`;
  } else if (itineraryIndex.segments.length > 1) {
    let suffix = itineraryIndex.segments.length - 1 > 1 ? "Stops" : "Stop";
    let arr = [];
    for (let i = 0; i < itineraryIndex.segments.length - 1; i++) {
      arr.push(itineraryIndex.segments[i].arrival.iataCode);
    }

    return `${itineraryIndex.segments.length - 1} ${suffix} in ${arr.join()}`;
  }
};

export const getFlightDuration = (durationString) => {
  return `${durationString.slice(2).toLocaleLowerCase().split("h")[0] + "h"} ${
    durationString.slice(2).toLocaleLowerCase().split("h")[1]
  }`;
};

export const getAirlineName = (airlineCode, flightOfferData) => {
  for (let prop in flightOfferData.dictionaries.carriers) {
    if (prop === airlineCode) {
      const airlineName = flightOfferData.dictionaries.carriers[prop];
      return airlineName
        .toLocaleLowerCase()
        .split(" ")
        .map((e) => e.slice(0, 1).toLocaleUpperCase() + e.slice(1))
        .join(" ");
    } /* else {
      let data = {
        airlineCode: airlineCode
      }
      Axios({
        method: "post",
        url: "/api/getaiportname",
        data: data,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } */
  }
  return airlineCode;
};

export const formatPrice = (price) => {
  let nodecimalprice = `${price}`.split(".")[0];
  let newPriceArray = nodecimalprice.split("");
  if (newPriceArray.length === 4) {
    newPriceArray[0] = newPriceArray[0] + ",";
  }
  if (newPriceArray.length === 5) {
    newPriceArray[1] = newPriceArray[1] + ",";
  }
  if (newPriceArray.length === 6) {
    newPriceArray[2] = newPriceArray[2] + ",";
  }
  if (newPriceArray.length === 7) {
    newPriceArray[3] = newPriceArray[3] + ",";
    newPriceArray[0] = newPriceArray[0] + ",";
  }
  if (newPriceArray.length === 8) {
    newPriceArray[4] = newPriceArray[4] + ",";
    newPriceArray[1] = newPriceArray[1] + ",";
  }

  return newPriceArray.join("");
};

export const getClassOfBooking = (flightOffer, segmentId) => {
  for (let props of flightOffer.travelerPricings) {
    for (let item of props.fareDetailsBySegment) {
      if (item.segmentId === segmentId) {
        if (item.cabin === "PREMIUM_ECONOMY") {
          return "Premium Economy";
        }
        if (item.cabin === "ECONOMY") {
          return "Economy";
        }
        if (item.cabin === "FIRST") {
          return "First Class";
        }
        if (item.cabin === "BUSINESS") {
          return "Business Class";
        }
      }
    }
  }
  return "Class Not Found";
};

export const getLayover = (arrivalOfThisSegment, departOfTheNextSegment) => {
  let timestampdifference =
    new Date(departOfTheNextSegment) - new Date(arrivalOfThisSegment);
  let timestampdifferenceinseconds = timestampdifference / 1000;
  let timestampdifferenceinminutes = timestampdifferenceinseconds / 60;
  let remainder = timestampdifferenceinminutes % 60;

  return `${(timestampdifferenceinminutes - remainder) / 60}h ${remainder}m`;
};

export const getDate = (dateString) => {
  let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  dateString = dateString.split("T")[0];
  let date = new Date(dateString);
  return ` ${weekDay[date.getDay()]} ${date.getDate()} ${
    month[date.getMonth()]
  }. `;
};

export const getBaggageAllowance = (flightOffer, segmentId) => {
  if (flightOffer.pricingOptions.includedCheckedBagsOnly === false)
    return ["No bag"];
  let baggageObj = [];

  start: for (let props of flightOffer.travelerPricings) {
    for (let item of baggageObj) {
      if (item.type === props.travelerType) continue start;
    }
    for (let item of props.fareDetailsBySegment) {
      if (item.segmentId === segmentId) {
        let obj = {
          type: "Adult",
        };
        let quantity = item.includedCheckedBags.quantity || "1";
        let weight = item.includedCheckedBags.weight || "23";
        let weightUnit = item.includedCheckedBags.weightUnit || "Kg";
        let id = item.segmentId;
        obj.quantity = quantity;
        obj.weight = weight;
        obj.weightUnit = weightUnit;
        obj.id = id;
        baggageObj.push(obj);
      }
    }
  }
  return baggageObj.map(
    (baggage) =>
      `${baggage.quantity} Bag(s) ${baggage.weight}${baggage.weightUnit}/${baggage.type}`
  );
};

export const getPriceBreakDown = (flightOffer) => {
  let travelerPricingObj = [{}];
  for (let props of flightOffer.travelerPricings) {
    if (props.travelerType === "ADULT") {
      let adultObj = {};
      adultObj.type = "Adult";
      adultObj.id = "adult";
      adultObj.price = props.price.total;
      travelerPricingObj[0] = adultObj;
    }
    if (props.travelerType === "CHILD") {
      let childObj = {};
      childObj.type = "Child";
      childObj.id = "child";
      childObj.price = props.price.total;
      travelerPricingObj[1] = childObj;
    }
    if (props.travelerType === "HELD_INFANT") {
      let infantObj = {};
      infantObj.type = "Infant";
      infantObj.id = "infant";
      infantObj.price = props.price.total;
      travelerPricingObj[2] = infantObj;
    }
  }
  return travelerPricingObj;
};

export const filterStopsFunction = (
  airlineFilteredOfferedData,
  stopsFilter
) => {
  if (stopsFilter.length === 0) {
    return airlineFilteredOfferedData;
  }

  let filteredOfferedData = airlineFilteredOfferedData.filter((flightOffer) => {
    for (let itineraryIndex of flightOffer.itineraries) {
      for (let stop of stopsFilter) {
        if (
          `${itineraryIndex.segments.length - 1}` === stop.replace(/\D/g, "") ||
          (itineraryIndex.segments.length === 1 && stop === "Direct Flight")
        ) {
          return true;
        }
      }
    }
  });

  return filteredOfferedData;
};

export const airlineFilterFunction = (flightOffers, airlineFilterArray) => {
  if (airlineFilterArray.length === 0) {
    return flightOffers;
  }

  let filteredOffers = [];
  for (let flightOffer of flightOffers) {
    if (Array.isArray(flightOffer)) {
      let subarr = [];

      for (let item of flightOffer) {
        for (let iataCode of item.validatingAirlineCodes) {
          for (let filterIataCode of airlineFilterArray) {
            if (iataCode === filterIataCode) {
              subarr.push(item);
            }
          }
        }
      }

      if (subarr.length > 0) {
        filteredOffers.push(subarr);
      }
    } else {
      for (let iataCode of flightOffer.validatingAirlineCodes) {
        for (let filterIataCode of airlineFilterArray) {
          if (iataCode === filterIataCode) {
            filteredOffers.push(flightOffer);
          }
        }
      }
    }
  }
  return filteredOffers;
};

export const getAirlineListData = (flightOffers) => {
  let set = new Set();
  let airlineList = [];

  for (let flightOffer of flightOffers) {
    for (let iataCode of flightOffer.validatingAirlineCodes) {
      /*  let obj = { airlineName: iataCode, isSelected: false };
      airlineList.push(obj); */
      set.add(iataCode);
    }
  }
  for (let iataCode of set) {
    let obj = { airlineName: iataCode, isSelected: false };
    airlineList.push(obj);
  }
  return airlineList;
};

export const getFlightStopsList = (flightOffers) => {
  let set = new Set();
  set.add("Any Number of Stops");
  for (let flightOffer of flightOffers) {
    set.add(flightOffer.stops);
  }
  return Array.from(set);
};

export const sortByPrice = (flightOffers, priceFilter) => {
  return flightOffers.filter(
    (flightOffer) =>
      flightOffer.price.total >= priceFilter[0] &&
      flightOffer.price.total <= priceFilter[1]
  );
};

export const getMaxAndMinPriceArray = (flightOffers) => {
  const max = Math.max(
    ...flightOffers.map((flightOffer) => Number(flightOffer.price.total))
  );

  const min = Math.min(
    ...flightOffers.map((flightOffer) => Number(flightOffer.price.total))
  );

  return [min, max];
};

export const getColapsibleResult = (flightOffers) => {
  let flightOffersWstops = addStops(flightOffers);
  let flightOfferWccProp = flightOffersWstops.filter(
    (flightOffer, index, arr) => {
      let carriersOfFlightOffer = [];
      for (let itineraryIndex of flightOffer.itineraries) {
        for (let segment of itineraryIndex.segments) {
          carriersOfFlightOffer.push(segment.carrierCode);
        }
      }

      flightOffer.carriersOfFlightOffer = carriersOfFlightOffer;

      if (
        index > 0 &&
        flightOffer.carriersOfFlightOffer.equals(
          arr[index - 1].carriersOfFlightOffer
        )
      ) {
        flightOffer.colapsible = true;
      } else {
        flightOffer.colapsible = false;
      }
      return true;
    }
  );

  let newFlightOffers = [];
  let itemLength = flightOfferWccProp.length;
  nexti: for (let i = 0; i < itemLength; i++) {
    if (flightOfferWccProp[i].colapsible === true) {
      let subarr = [];
      for (let k = i; k < itemLength; k++) {
        if (flightOfferWccProp[k].colapsible === true) {
          subarr.push(flightOfferWccProp[k]);
          if (k + 1 === flightOfferWccProp.length) {
            subarr.splice(5);
            newFlightOffers.push(subarr);
            i = k;
            continue nexti;
          }
        } else {
          subarr.splice(5);
          newFlightOffers.push(subarr);
          i = k - 1;
          continue nexti;
        }
      }
    } else {
      newFlightOffers.push(flightOfferWccProp[i]);
    }
  }

  return newFlightOffers;
};

export const formatDate2 = (dateString) => {
  let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  dateString = dateString.split("T")[0];
  let date = new Date(dateString);
  return `${weekDay[date.getDay()]}, ${date.getDate()} ${
    month[date.getMonth()]
  }`;
};

export const getPlusMinus3DaysArray = (date) => {
  let dateArr = [];

  for (let i = -2; i < 5; i++) {
    let currentDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + i
    );
    let obj = {};
    obj.currentDate = currentDate.toISOString().split("T")[0];
    let formatDate = formatDate2(currentDate.toISOString());
    obj.prettyDate = `${formatDate.split(",")[0]}${formatDate.split(",")[1]}`;
    dateArr.push(obj);
  }

  return dateArr;
};

export const getReturnDateAndData = (departureDate, returnDate, tripType) => {
  const departureDateMatrix = getPlusMinus3DaysArray(departureDate);
  const returnDateMatrix = getPlusMinus3DaysArray(returnDate);
  if (tripType === "Round trip") {
    let returnDateAndData = [];
    for (let item of returnDateMatrix) {
      let obj = {};
      //  obj.prettyDate = item.prettyDate;
      let data = [];
      for (let props of departureDateMatrix) {
        let obj = { departure: props.currentDate, return: item.currentDate };
        data.push(obj);
      }
      obj.data = [item.prettyDate, ...data];
      returnDateAndData.push(obj);
    }

    return returnDateAndData;
  } else if (tripType === "One way") {
    return [{ data: ["One way", ...departureDateMatrix] }];
  }
};

export const depDatesAndLowestFaresArr = (
  retDates,
  depDates,
  originLocationCode,
  destinationLocationCode,
  adults,
  children,
  infants,
  travelClass,
  currencyCode
  //fetchFlightOffer
) => {
  let depDatesAndLowestFaresArr = [];
  if (retDates) {
    for (let depDate of depDates) {
      let obj = {};
      obj.depDate = depDate;
      obj.priceGetter = [];
      obj.price = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ];
      for (let retDate of retDates) {
        let priceObj = {};
        priceObj.departureDate = depDate.date;
        priceObj.returnDate = retDate.date;
        priceObj.originLocationCode = originLocationCode;
        priceObj.destinationLocationCode = destinationLocationCode;
        priceObj.adults = adults;
        priceObj.children = children;
        priceObj.infants = infants;
        priceObj.travelClass = travelClass;
        priceObj.currencyCode = currencyCode;
        priceObj.max = 1;
        obj.priceGetter.push(priceObj);
      }
      depDatesAndLowestFaresArr.push(obj);
    }
  } else {
    let obj = {};
    obj.type = "FARES";
    obj.price = [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    obj.priceGetter = [];

    for (let date of depDates) {
      let priceObj = {};
      priceObj.departureDate = date.date;
      priceObj.originLocationCode = originLocationCode;
      priceObj.destinationLocationCode = destinationLocationCode;
      priceObj.adults = adults;
      priceObj.children = children;
      priceObj.infants = infants;
      priceObj.travelClass = travelClass;
      priceObj.currencyCode = currencyCode;
      priceObj.max = 1;
      obj.priceGetter.push(priceObj);
    }
    depDatesAndLowestFaresArr.push(obj);
  }

  return depDatesAndLowestFaresArr;
};

export const getStops = (flightOffers) => {
  let stops = [];
  let set = new Set();
  set.add("Any");
  for (let flightOffer of flightOffers) {
    for (let itinerary of flightOffer.itineraries) {
      if (itinerary.segments.length === 1) set.add("Nonstop (Direct)");
      if (itinerary.segments.length === 2) set.add("1 Stop");
      if (itinerary.segments.length === 3) set.add("2 Stops");
      if (itinerary.segments.length === 4) set.add("3 Stop");
    }
  }
  stops = [...Array.from(set)].map((stop) => {
    if (stop === "Any") return { type: stop, isSelected: true };
    return { type: stop, isSelected: false };
  });
  return stops;
};

export const addStops = (flightOffers) => {
  let w = "Non Stop Only";
  let x = "1 Stops or Less";
  let y = "2 Stops or Less";
  let z = "3 Stops or Less";
  let a = "4 Stops or Less";
  return flightOffers.filter((flightOffer) => {
    for (let itineraryIndex of flightOffer.itineraries) {
      if (itineraryIndex.segments.length === 1) {
        flightOffer.stops = w;
        return true;
      }
      if (itineraryIndex.segments.length === 2) {
        flightOffer.stops = x;
        return true;
      }
      if (itineraryIndex.segments.length === 3) {
        flightOffer.stops = y;
        return true;
      }
      if (itineraryIndex.segments.length === 4) {
        flightOffer.stops = z;
        return true;
      }
      if (itineraryIndex.segments.length === 5) {
        flightOffer.stops = a;
        return true;
      }
    }
  });
};
export const stopFilter = (flightOffers, stops) => {
  if (stops === "Any Number of Stops") {
    return flightOffers;
  }
  let filteredOffers = [];

  for (let flightOffer of flightOffers) {
    if (Array.isArray(flightOffer)) {
      let subarr = [];
      for (let item of flightOffer) {
        if (item.stops === stops) {
          subarr.push(item);
        }
      }
      filteredOffers.push(subarr);
    } else {
      if (flightOffer.stops === stops) {
        filteredOffers.push(flightOffer);
      }
    }
  }

  return filteredOffers;
};

export const prettyWord = (word) => {
  let newWord = [];
  for (let item of word.split(" ")) {
    let lowercase;
    lowercase = item.slice(0, 1) + item.slice(1).toLocaleLowerCase();
    newWord.push(lowercase);
  }
  return newWord.join(" ");
};

export const getLayoverPoints = (segments) => {
  if (segments) {
    let layover = [];
    for (let i = 0; i < segments.length; i++) {
      if (i > 0) {
        let layoverpoint = {};
        layoverpoint.id = i;
        layoverpoint.iataCode = segments[i].departure.iataCode;
        layover.push(layoverpoint);
      }
    }
    return layover;
  }
};

export const getPassengerInfo = (flightOfferPricing) => {
  let travelerPricings = flightOfferPricing.flightOffers[0].travelerPricings;
  let passengerInfo = [...travelerPricings];
  return passengerInfo.map((props) => {
    if (!flightOfferPricing.bookingRequirements.travelerRequirements)
      return { ...props };
    for (let item of flightOfferPricing.bookingRequirements
      .travelerRequirements) {
      if (item.travelerId === props.travelerId) {
        return { ...item, ...props };
      }
    }
  });
};

export const getPriceRows = (travelerPricings) => {
  return travelerPricings.map((item) => {
    return {
      type: item.travelerType,
      fare: item.price.base,
      taxes: Number(item.price.total) - Number(item.price.base),
      total: item.price.total,
    };
  });
};

export const createOrder = (data, bookedFlightOffer) => {
  const passengerId = bookedFlightOffer.travelerPricings.map(
    (item) => item.travelerId
  );
  let travellers = [];
  for (let item of passengerId) {
    let obj = {};
    obj.id = item;
    obj.name = {
      firstName: data[`givennames${item}`],
      lastName: data[`surname${item}`],
    };

    if (data[`dob${item}`])
      obj.dateOfBirth = data[`dob${item}`].toISOString().split("T")[0];
    if (data[`gender${item}`]) obj.gender = data[`gender${item}`].toUpperCase();

    obj.contact = {
      emailAddress: data.email,
      phones: [
        {
          deviceType: "MOBILE",
          number: data.telephone.replace(/\D+/g, ""),
        },
      ],
    };

    if (data[`passportnumber${item}`])
      obj.documents = [
        {
          documentType: "PASSPORT",
          number: data[`passportnumber${item}`],
          expiryDate: data[`passportexpiry${item}`].toISOString().split("T")[0],
          issuanceCountry: "ES",
          validityCountry: "ES",
          nationality: "ES",
          holder: true,
        },
      ];

    travellers.push(obj);
  }

  return {
    type: "flight-order",
    flightOffers: [bookedFlightOffer],
    travelers: travellers,
    remarks: {
      general: [
        {
          subType: "GENERAL_MISCELLANEOUS",
          text: "Online booking from airXplora",
        },
      ],
    },
    ticketingAgreement: {
      option: "DELAY_TO_CANCEL",
      delay: "6D",
    },
    contacts: [
      {
        addresseeName: {
          firstName: data.givennames1,
          lastName: data.surname1,
        },
        companyName: "airXplora",
        purpose: "STANDARD",
        phones: [
          {
            deviceType: "MOBILE",
            countryCallingCode: "234",
            number: "9065369929",
          },
        ],
        emailAddress: "info@airxplora.com",
        address: {
          lines: ["65c Opebi Road, Ikeja, Lagos"],
          postalCode: "23401",
          cityName: "Nigeria",
          countryCode: "NG",
        },
      },
    ],
  };
};

export const getFareRules = (detailedFare) => {
  console.log("detailedFare", detailedFare);
  if (!detailedFare.included) return undefined;
  let fareRules = [];
  for (let item in detailedFare.included["detailed-fare-rules"]) {
    let rules = {};
    rules.fareBasis =
      detailedFare.included["detailed-fare-rules"][item].fareBasis;
    rules.name = detailedFare.included["detailed-fare-rules"][item].name;
    rules.details = detailedFare.included["detailed-fare-rules"][
      item
    ].fareNotes.descriptions.filter(
      (item) => item.descriptionType === "PENALTIES"
    );
    fareRules.push(rules);
  }
  return fareRules;
};
