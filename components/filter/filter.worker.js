self.addEventListener("message", function (e) {
  let airlineSortedData = sortByStops(
    sortByPrice(
      sortByAirlines(e.data.flightOffers, e.data.stateAirlinesFilter),
      e.data.filterRange
    ),
    e.data.stateStops
  );

  setTimeout(() => {
    self.postMessage(airlineSortedData);
  }, 2000);
});

const sortByPrice = (flightOffers, filterRange) => {
  console.log(" by price", flightOffers, filterRange);
  if (!filterRange) return flightOffers;

  return flightOffers.filter(
    (flightOffer) =>
      flightOffer.price.total >= filterRange[0] &&
      flightOffer.price.total <= filterRange[1]
  );
};

export const sortByAirlines = (flightOffers, stateAirlinesFilter) => {
  console.log(" by airline", flightOffers, stateAirlinesFilter);
  if (!stateAirlinesFilter) return flightOffers;
  const airlineFilterArray = stateAirlinesFilter
    .filter((item) => item.isSelected)
    .map((item) => item.airlineName);

  return flightOffers.filter((flightOffer) => {
    for (let iataCode of airlineFilterArray) {
      if (flightOffer.validatingAirlineCodes.includes(iataCode)) {
        return true;
      }
    }
  });
};

export const sortByStops = (flightOffers, stateStops) => {
  console.log("by stops", flightOffers, stateStops);
  let stopsArray = stateStops
    .filter((item) => item.isSelected)
    .map((item) => item.type);
  console.log("stopsArray", stopsArray);
  if (stopsArray.toString() === "Any") return flightOffers;
  return flightOffers.filter((item) => {
    for (let itinerary of item.itineraries) {
      if (
        itinerary.segments.length === 1 &&
        stopsArray.includes("Nonstop (Direct)")
      )
        return true;

      if (itinerary.segments.length === 2 && stopsArray.includes("1 Stop"))
        return true;

      if (
        itinerary.segments.length === 3 &&
        stopsArray.includes("2 Stops")
      )
        return true;

      if (
        itinerary.segments.length === 4 &&
        stopsArray.includes("3 Stops")
      )
        return true;
    }
  });
};
