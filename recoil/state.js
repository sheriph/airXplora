import { atom, selector } from "recoil";

/////// test demo recoil /////////////////////

export const countState = atom({
  key: "count",
  default: 0,
});

export const incrementCount = selector({
  key: "incrementCount",
  set: ({ set }) => set(countState, (currCount) => currCount + 1),
});

export const decrementCount = selector({
  key: "decrementCount",
  set: ({ set }) => set(countState, (currCount) => currCount - 1),
});

export const listState = atom({
  key: "list",
  default: [],
});

export const setList = selector({
  key: "setlist",
  set: ({ set }, payload) =>
    set(listState, (currList) => [...currList, payload]),
});

export const valueState = atom({
  key: "value",
  default: "",
});

export const setValue = selector({
  key: "setvalue",
  set: ({ set }, payload) => set(valueState, (currValue) => payload),
});

/////////// Admin State Management //////////////

//primary and secondary contact states ///

export const primaryContact_ = atom({
  key: "primarycontact",
  default: "",
});

export const secondaryContact_ = atom({
  key: "secondarycontact",
  default: "",
});

// from flight search input  Booking State ///

export const from_ = atom({
  key: "from_",
  default: "",
});

export const fromcity_ = atom({
  key: "fromcity_",
  default: "",
});

export const from1_ = atom({
  key: "from1_",
  default: "",
});

export const from2_ = atom({
  key: "from2_",
  default: "",
});

export const from3_ = atom({
  key: "from3_",
  default: "",
});

export const from4_ = atom({
  key: "from4_",
  default: "",
});

export const fromLocal_ = atom({
  key: "fromlocal_",
  default: "",
});

export const fromLocal1_ = atom({
  key: "fromlocal1_",
  default: "",
});

export const fromLocal2_ = atom({
  key: "fromlocal2_",
  default: "",
});

export const fromLocal3_ = atom({
  key: "fromlocal3_",
  default: "",
});

export const fromLocal4_ = atom({
  key: "fromlocal4_",
  default: "",
});

// to flight search input  Booking State ///

export const to_ = atom({
  key: "to_",
  default: "",
});

export const tocity_ = atom({
  key: "tocity_",
  default: "",
});

export const to1_ = atom({
  key: "to1_",
  default: "",
});

export const to2_ = atom({
  key: "to2_",
  default: "",
});

export const to3_ = atom({
  key: "to3_",
  default: "",
});

export const to4_ = atom({
  key: "to4_",
  default: "",
});

export const toLocal_ = atom({
  key: "tolocal_",
  default: "",
});

export const toLocal1_ = atom({
  key: "tolocal1_",
  default: "",
});

export const toLocal2_ = atom({
  key: "tolocal2_",
  default: "",
});

export const toLocal3_ = atom({
  key: "tolocal3_",
  default: "",
});

export const toLocal4_ = atom({
  key: "tolocal4_",
  default: "",
});

// date states //

export const departureDate_ = atom({
  key: "departuredate",
  default: new Date(),
});

export const departureDate1_ = atom({
  key: "departuredate1",
  default: new Date(),
});

export const departureDate2_ = atom({
  key: "departuredate2",
  default: new Date(),
});

export const departureDate3_ = atom({
  key: "departuredate3",
  default: new Date(),
});

export const departureDate4_ = atom({
  key: "departuredate4",
  default: new Date(),
});

export const returnDate_ = atom({
  key: "returndate",
  default: null,
});

//triptype state //

export const trip_ = atom({
  key: "trip",
  default: "Round trip",
});

//multi trip state//

export const showRepeater1_ = atom({
  key: "showrepeater1",
  default: false,
});

export const showRepeater2_ = atom({
  key: "showrepeater2",
  default: false,
});

export const showRepeater3_ = atom({
  key: "showrepeater3",
  default: false,
});

export const showRepeater4_ = atom({
  key: "showrepeater4",
  default: false,
});

//passenger select and class state //

export const adult_ = atom({
  key: "adult",
  default: 1,
});

export const child_ = atom({
  key: "child",
  default: 0,
});

export const infant_ = atom({
  key: "infant",
  default: 0,
});

export const classOfBooking_ = atom({
  key: "classofbooking",
  default: "ECONOMY",
});

//Flight result drawer //

export const isDrawerOpen_ = atom({
  key: "isdraweropen",
  default: false,
});

//flightOffer data //

export const flightOffer_ = atom({
  key: "flightoffer",
  default: undefined,
});

export const flightOffers_ = atom({
  key: "data",
  default: undefined,
});

export const lastSearch_ = atom({
  key: "lastsearch",
  default: undefined,
});

export const prevState_ = atom({
  key: "prevstate",
  default: undefined,
});

//filter //

export const priceFilterValue_ = atom({
  key: "pricefiltervalue",
  default: undefined,
});

export const airlinesFilter_ = atom({
  key: "airlinesfilter",
  default: undefined,
});

export const stops_ = atom({
  key: "stops",
  default: [{ type: "Any", isSelected: true }],
});

export const matrixPrice_ = atom({
  key: "matrixprice",
  default: [],
});

export const fullReturn_ = atom({
  key: "fullreturn",
  default: [
    {
      data: [
        "Fri 27 Nov",
        {
          departure: "2020-11-15",
          return: "2020-11-27",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-15",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-27",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-15T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-15T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-27T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-28T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-16",
          return: "2020-11-27",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-16",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-27",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [],
        },
        {
          departure: "2020-11-17",
          return: "2020-11-27",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-17",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-27",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-17T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-17T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-27T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-28T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-18",
          return: "2020-11-27",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-18",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-27",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-18T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-27T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-28T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-19",
          return: "2020-11-27",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-19",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-27",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-16",
              numberOfBookableSeats: 6,
              itineraries: [
                {
                  duration: "PT14H15M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-19T09:55:00",
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-11-19T13:20:00",
                      },
                      carrierCode: "UX",
                      number: "1014",
                      aircraft: {
                        code: "73H",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT2H25M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-11-19T15:25:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-19T19:10:00",
                      },
                      carrierCode: "UX",
                      number: "97",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT9H45M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT13H35M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-27T21:45:00",
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-11-28T12:05:00",
                      },
                      carrierCode: "UX",
                      number: "98",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT8H20M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-11-28T14:55:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-28T16:20:00",
                      },
                      carrierCode: "UX",
                      number: "1015",
                      aircraft: {
                        code: "73H",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT2H25M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "213764.00",
                base: "52867.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "213764.00",
                additionalServices: [
                  {
                    amount: "90944",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["UX"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "213764.00",
                    base: "52867.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYX6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYX6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYW6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYW6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-20",
          return: "2020-11-27",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-20",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-27",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-20T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-20T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-27T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-28T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "203367.00",
                base: "145007.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "203367.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "203367.00",
                    base: "145007.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "PLSRGB",
                      class: "P",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-21",
          return: "2020-11-27",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-21",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-27",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-21T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-27T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-28T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      data: [
        "Sat 28 Nov",
        {
          departure: "2020-11-15",
          return: "2020-11-28",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-15",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-28",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [],
        },
        {
          departure: "2020-11-16",
          return: "2020-11-28",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-16",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-28",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-16T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-16T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "319",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-17T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-17T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-28T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-29T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-17",
          return: "2020-11-28",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-17",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-28",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-17T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-17T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "319",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-18T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-28T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-29T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-18",
          return: "2020-11-28",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-18",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-28",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT15H25M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-18T10:40:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-18T13:15:00",
                      },
                      carrierCode: "TP",
                      number: "1339",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-18T16:45:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T21:05:00",
                      },
                      carrierCode: "TP",
                      number: "225",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-28T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-29T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-19",
          return: "2020-11-28",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-19",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-28",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT13H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LHR",
                        terminal: "2",
                        at: "2020-11-19T06:00:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T08:35:00",
                      },
                      carrierCode: "TP",
                      number: "1363",
                      aircraft: {
                        code: "32Q",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-19T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-28T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-29T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "190594.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "190594.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "190594.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-20",
          return: "2020-11-28",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-20",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-28",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-20T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-20T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "319",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-21T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-28T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-29T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-29T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-21",
          return: "2020-11-28",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-21",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-28",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [],
        },
      ],
    },
    {
      data: [
        "Sun 29 Nov",
        {
          departure: "2020-11-15",
          return: "2020-11-29",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-15",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-29",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-15T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-15T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-29T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-30T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-16",
          return: "2020-11-29",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-16",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-29",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-16T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-16T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-29T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-30T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-17",
          return: "2020-11-29",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-17",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-29",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-17T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-17T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-29T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-30T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-18",
          return: "2020-11-29",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-18",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-29",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-18T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-29T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-30T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-19",
          return: "2020-11-29",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-19",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-29",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT13H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LHR",
                        terminal: "2",
                        at: "2020-11-19T06:00:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T08:35:00",
                      },
                      carrierCode: "TP",
                      number: "1363",
                      aircraft: {
                        code: "32Q",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-19T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-29T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-30T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-30T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-30T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "190594.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "190594.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "190594.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-20",
          return: "2020-11-29",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-20",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-29",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-20T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-20T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "319",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-21T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-29T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-30T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-30T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-30T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-21",
          return: "2020-11-29",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-21",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-29",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-21T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-29T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-30T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "188262.00",
                base: "129902.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "188262.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "188262.00",
                    base: "129902.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TLSRGB",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      data: [
        "Mon 30 Nov",
        {
          departure: "2020-11-15",
          return: "2020-11-30",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-15",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-30",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-15T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-15T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-30T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-01T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "178192.00",
                base: "119832.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "178192.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "178192.00",
                    base: "119832.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "HLSRGB",
                      class: "H",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-16",
          return: "2020-11-30",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-16",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-30",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-16T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-16T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-30T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-01T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "178192.00",
                base: "119832.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "178192.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "178192.00",
                    base: "119832.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "HLSRGB",
                      class: "H",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-17",
          return: "2020-11-30",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-17",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-30",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-17T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-17T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-30T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-01T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "178192.00",
                base: "119832.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "178192.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "178192.00",
                    base: "119832.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "HLSRGB",
                      class: "H",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-18",
          return: "2020-11-30",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-18",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-30",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-18T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-30T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-01T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "178192.00",
                base: "119832.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "178192.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "178192.00",
                    base: "119832.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "HLSRGB",
                      class: "H",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-19",
          return: "2020-11-30",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-19",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-30",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-16",
              numberOfBookableSeats: 6,
              itineraries: [
                {
                  duration: "PT14H15M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-19T09:55:00",
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-11-19T13:20:00",
                      },
                      carrierCode: "UX",
                      number: "1014",
                      aircraft: {
                        code: "73H",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT2H25M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-11-19T15:25:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-19T19:10:00",
                      },
                      carrierCode: "UX",
                      number: "97",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT9H45M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT13H35M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-30T21:45:00",
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-12-01T12:05:00",
                      },
                      carrierCode: "UX",
                      number: "98",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT8H20M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2020-12-01T14:55:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-01T16:20:00",
                      },
                      carrierCode: "UX",
                      number: "1015",
                      aircraft: {
                        code: "73H",
                      },
                      operating: {
                        carrierCode: "UX",
                      },
                      duration: "PT2H25M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "198659.00",
                base: "37762.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "198659.00",
                additionalServices: [
                  {
                    amount: "90944",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["UX"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "198659.00",
                    base: "37762.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYX6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYX6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYX6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "ZLYX6L",
                      brandedFare: "LITE",
                      class: "Z",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-20",
          return: "2020-11-30",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-20",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-30",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-20T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-20T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-30T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-01T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "193297.00",
                base: "134937.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "193297.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "193297.00",
                    base: "134937.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "PLSRGB",
                      class: "P",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "HLSRGB",
                      class: "H",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-21",
          return: "2020-11-30",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-21",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-11-30",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-21T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-11-30T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-01T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "178192.00",
                base: "119832.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "178192.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "178192.00",
                    base: "119832.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "HLSRGB",
                      class: "H",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      data: [
        "Tue 1 Dec",
        {
          departure: "2020-11-15",
          return: "2020-12-01",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-15",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-01",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-15T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-15T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-01T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-02T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-16",
          return: "2020-12-01",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-16",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-01",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-16T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-16T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-01T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-02T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-17",
          return: "2020-12-01",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-17",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-01",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-17T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-17T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-01T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-02T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-18",
          return: "2020-12-01",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-18",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-01",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 4,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-18T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-01T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-02T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-19",
          return: "2020-12-01",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-19",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-01",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT13H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LHR",
                        terminal: "2",
                        at: "2020-11-19T06:00:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T08:35:00",
                      },
                      carrierCode: "TP",
                      number: "1363",
                      aircraft: {
                        code: "32Q",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-19T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-01T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-02T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-02T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-02T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "190594.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "190594.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "190594.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-20",
          return: "2020-12-01",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-20",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-01",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-20T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-20T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-01T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-02T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "168122.00",
                base: "109762.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "168122.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "168122.00",
                    base: "109762.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "PLSRGB",
                      class: "P",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-21",
          return: "2020-12-01",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-21",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-01",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-21T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-01T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-02T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      data: [
        "Wed 2 Dec",
        {
          departure: "2020-11-15",
          return: "2020-12-02",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-15",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-02",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-15T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-15T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-02T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-03T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-16",
          return: "2020-12-02",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-16",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-02",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-16T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-16T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-02T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-03T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-17",
          return: "2020-12-02",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-17",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-02",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-17T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-17T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-02T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-03T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-18",
          return: "2020-12-02",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-18",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-02",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 5,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-18T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-02T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-03T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-19",
          return: "2020-12-02",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-19",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-02",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT13H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LHR",
                        terminal: "2",
                        at: "2020-11-19T06:00:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T08:35:00",
                      },
                      carrierCode: "TP",
                      number: "1363",
                      aircraft: {
                        code: "32Q",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-19T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-02T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-03T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-03T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-03T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "190594.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "190594.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "190594.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-20",
          return: "2020-12-02",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-20",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-02",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-20T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-20T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-02T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-03T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "168122.00",
                base: "109762.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "168122.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "168122.00",
                    base: "109762.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "PLSRGB",
                      class: "P",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-21",
          return: "2020-12-02",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-21",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-02",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-14",
              numberOfBookableSeats: 2,
              itineraries: [
                {
                  duration: "PT9H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-21T10:00:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "DI",
                      number: "7043",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT9H55M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT8H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-02T17:30:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-03T06:50:00",
                      },
                      carrierCode: "DI",
                      number: "7044",
                      aircraft: {
                        code: "789",
                      },
                      operating: {
                        carrierCode: "DI",
                      },
                      duration: "PT8H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "153017.00",
                base: "94657.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "153017.00",
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: true,
              },
              validatingAirlineCodes: ["DY"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "153017.00",
                    base: "94657.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "QLCSRGB",
                      class: "Q",
                      includedCheckedBags: {
                        quantity: 2,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      data: [
        "Thu 3 Dec",
        {
          departure: "2020-11-15",
          return: "2020-12-03",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-15",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-03",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT13H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LHR",
                        terminal: "2",
                        at: "2020-11-15T06:00:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-15T08:35:00",
                      },
                      carrierCode: "TP",
                      number: "1363",
                      aircraft: {
                        code: "32Q",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-15T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-15T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-03T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-04T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "190594.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "190594.00",
                additionalServices: [
                  {
                    amount: "77302",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "190594.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-16",
          return: "2020-12-03",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-16",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-03",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-16T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-16T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "319",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-17T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-17T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-03T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-04T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-17",
          return: "2020-12-03",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-17",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-03",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-17T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-17T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "319",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-18T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-03T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-04T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-18",
          return: "2020-12-03",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-18",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-03",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT15H25M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-18T10:40:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-18T13:15:00",
                      },
                      carrierCode: "TP",
                      number: "1339",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-18T16:45:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-18T21:05:00",
                      },
                      carrierCode: "TP",
                      number: "225",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-03T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-04T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-19",
          return: "2020-12-03",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-19",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-03",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT13H55M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LHR",
                        terminal: "2",
                        at: "2020-11-19T06:00:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T08:35:00",
                      },
                      carrierCode: "TP",
                      number: "1363",
                      aircraft: {
                        code: "32Q",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-19T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-19T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-03T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-04T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "190594.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "190594.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "190594.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-20",
          return: "2020-12-03",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-20",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-03",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-20T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-20T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "319",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-21T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-21T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-03T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-04T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departure: "2020-11-21",
          return: "2020-12-03",
          lastSearch: {
            searchCriteria: {
              maxFlightOffers: 1,
              flightFilters: {
                cabinRestrictions: [
                  {
                    coverage: "MOST_SEGMENTS",
                    originDestinationIds: ["1"],
                    cabin: "ECONOMY",
                  },
                ],
                carrierRestrictions: {
                  excludedCarrierCodes: ["OZ"],
                },
              },
            },
            currencyCode: "NGN",
            travelers: [
              {
                travelerType: "ADULT",
                id: "1",
              },
            ],
            sources: ["GDS"],
            originDestinations: [
              {
                id: "1",
                originLocationCode: "LON",
                destinationLocationCode: "MIA",
                departureDateTimeRange: {
                  date: "2020-11-21",
                },
              },
              {
                destinationLocationCode: "LON",
                departureDateTimeRange: {
                  date: "2020-12-03",
                },
                originLocationCode: "MIA",
                id: "2",
              },
            ],
          },
          flightOffers: [
            {
              type: "flight-offer",
              id: "1",
              source: "GDS",
              instantTicketingRequired: false,
              nonHomogeneous: false,
              oneWay: false,
              lastTicketingDate: "2020-11-15",
              numberOfBookableSeats: 9,
              itineraries: [
                {
                  duration: "PT27H20M",
                  segments: [
                    {
                      departure: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-11-21T16:35:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-21T19:10:00",
                      },
                      carrierCode: "TP",
                      number: "1337",
                      aircraft: {
                        code: "320",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H35M",
                      id: "1",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-11-22T10:35:00",
                      },
                      arrival: {
                        iataCode: "MIA",
                        at: "2020-11-22T14:55:00",
                      },
                      carrierCode: "TP",
                      number: "223",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT9H20M",
                      id: "2",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
                {
                  duration: "PT12H5M",
                  segments: [
                    {
                      departure: {
                        iataCode: "MIA",
                        at: "2020-12-03T16:45:00",
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T05:40:00",
                      },
                      carrierCode: "TP",
                      number: "224",
                      aircraft: {
                        code: "339",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT7H55M",
                      id: "3",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                    {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2020-12-04T07:10:00",
                      },
                      arrival: {
                        iataCode: "LGW",
                        terminal: "S",
                        at: "2020-12-04T09:50:00",
                      },
                      carrierCode: "TP",
                      number: "1338",
                      aircraft: {
                        code: "321",
                      },
                      operating: {
                        carrierCode: "TP",
                      },
                      duration: "PT2H40M",
                      id: "4",
                      numberOfStops: 0,
                      blacklistedInEU: false,
                    },
                  ],
                },
              ],
              price: {
                currency: "NGN",
                total: "189471.00",
                base: "33231.00",
                fees: [
                  {
                    amount: "0.00",
                    type: "SUPPLIER",
                  },
                  {
                    amount: "0.00",
                    type: "TICKETING",
                  },
                ],
                grandTotal: "189471.00",
                additionalServices: [
                  {
                    amount: "68208",
                    type: "CHECKED_BAGS",
                  },
                ],
              },
              pricingOptions: {
                fareType: ["PUBLISHED"],
                includedCheckedBagsOnly: false,
              },
              validatingAirlineCodes: ["TP"],
              travelerPricings: [
                {
                  travelerId: "1",
                  fareOption: "STANDARD",
                  travelerType: "ADULT",
                  price: {
                    currency: "NGN",
                    total: "189471.00",
                    base: "33231.00",
                  },
                  fareDetailsBySegment: [
                    {
                      segmentId: "1",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "2",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "3",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                    {
                      segmentId: "4",
                      cabin: "ECONOMY",
                      fareBasis: "TUKDSI0D",
                      brandedFare: "DISCOUNT",
                      class: "T",
                      includedCheckedBags: {
                        quantity: 0,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

//test data //

/* export const flightOffers_ = atom({
  key: "data",
  default: [{"type":"flight-offer","id":"1","source":"GDS","instantTicketingRequired":false,"nonHomogeneous":false,"oneWay":false,"lastTicketingDate":"2020-10-25","numberOfBookableSeats":9,"itineraries":[{"duration":"PT2H25M","segments":[{"departure":{"iataCode":"LGW","terminal":"S","at":"2020-10-30T09:55:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2020-10-30T13:20:00"},"carrierCode":"UX","number":"1014","aircraft":{"code":"73H"},"operating":{"carrierCode":"UX"},"duration":"PT2H25M","id":"3","numberOfStops":0,"blacklistedInEU":false}]},{"duration":"PT2H25M","segments":[{"departure":{"iataCode":"MAD","terminal":"1","at":"2020-11-18T07:30:00"},"arrival":{"iataCode":"LGW","terminal":"S","at":"2020-11-18T08:55:00"},"carrierCode":"UX","number":"1013","aircraft":{"code":"73H"},"operating":{"carrierCode":"UX"},"duration":"PT2H25M","id":"9","numberOfStops":0,"blacklistedInEU":false}]}],"price":{"currency":"NGN","total":"37665.00","base":"15002.00","fees":[{"amount":"0.00","type":"SUPPLIER"},{"amount":"0.00","type":"TICKETING"}],"grandTotal":"37665.00","additionalServices":[{"amount":"27148","type":"CHECKED_BAGS"}]},"pricingOptions":{"fareType":["PUBLISHED"],"includedCheckedBagsOnly":false},"validatingAirlineCodes":["UX"],"travelerPricings":[{"travelerId":"1","fareOption":"STANDARD","travelerType":"ADULT","price":{"currency":"NGN","total":"37665.00","base":"15002.00"},"fareDetailsBySegment":[{"segmentId":"3","cabin":"ECONOMY","fareBasis":"NYYR5L","brandedFare":"LITE","class":"N","includedCheckedBags":{"quantity":0}},{"segmentId":"9","cabin":"ECONOMY","fareBasis":"ZYYR0L","brandedFare":"LITE","class":"Z","includedCheckedBags":{"quantity":0}}]}]},{"type":"flight-offer","id":"2","source":"GDS","instantTicketingRequired":false,"nonHomogeneous":false,"oneWay":false,"lastTicketingDate":"2020-10-25","numberOfBookableSeats":9,"itineraries":[{"duration":"PT2H25M","segments":[{"departure":{"iataCode":"LGW","terminal":"S","at":"2020-10-30T09:55:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2020-10-30T13:20:00"},"carrierCode":"UX","number":"1014","aircraft":{"code":"73H"},"operating":{"carrierCode":"UX"},"duration":"PT2H25M","id":"3","numberOfStops":0,"blacklistedInEU":false}]},{"duration":"PT2H25M","segments":[{"departure":{"iataCode":"MAD","terminal":"1","at":"2020-11-18T14:55:00"},"arrival":{"iataCode":"LGW","terminal":"S","at":"2020-11-18T16:20:00"},"carrierCode":"UX","number":"1015","aircraft":{"code":"73H"},"operating":{"carrierCode":"UX"},"duration":"PT2H25M","id":"10","numberOfStops":0,"blacklistedInEU":false}]}],"price":{"currency":"NGN","total":"37665.00","base":"15002.00","fees":[{"amount":"0.00","type":"SUPPLIER"},{"amount":"0.00","type":"TICKETING"}],"grandTotal":"37665.00","additionalServices":[{"amount":"27148","type":"CHECKED_BAGS"}]},"pricingOptions":{"fareType":["PUBLISHED"],"includedCheckedBagsOnly":false},"validatingAirlineCodes":["UX"],"travelerPricings":[{"travelerId":"1","fareOption":"STANDARD","travelerType":"ADULT","price":{"currency":"NGN","total":"37665.00","base":"15002.00"},"fareDetailsBySegment":[{"segmentId":"3","cabin":"ECONOMY","fareBasis":"NYYR5L","brandedFare":"LITE","class":"N","includedCheckedBags":{"quantity":0}},{"segmentId":"10","cabin":"ECONOMY","fareBasis":"ZYYR0L","brandedFare":"LITE","class":"Z","includedCheckedBags":{"quantity":0}}]}]},{"type":"flight-offer","id":"3","source":"GDS","instantTicketingRequired":false,"nonHomogeneous":false,"oneWay":false,"lastTicketingDate":"2020-10-25","numberOfBookableSeats":5,"itineraries":[{"duration":"PT2H20M","segments":[{"departure":{"iataCode":"LGW","terminal":"S","at":"2020-10-30T10:50:00"},"arrival":{"iataCode":"MAD","terminal":"4","at":"2020-10-30T14:10:00"},"carrierCode":"IB","number":"3715","aircraft":{"code":"32A"},"operating":{"carrierCode":"I2"},"duration":"PT2H20M","id":"1","numberOfStops":0,"blacklistedInEU":false}]},{"duration":"PT2H15M","segments":[{"departure":{"iataCode":"MAD","terminal":"4","at":"2020-11-18T18:25:00"},"arrival":{"iataCode":"LGW","terminal":"S","at":"2020-11-18T19:40:00"},"carrierCode":"IB","number":"3718","aircraft":{"code":"32A"},"operating":{"carrierCode":"I2"},"duration":"PT2H15M","id":"5","numberOfStops":0,"blacklistedInEU":false}]}],"price":{"currency":"NGN","total":"42165.00","base":"19502.00","fees":[{"amount":"0.00","type":"SUPPLIER"},{"amount":"0.00","type":"TICKETING"}],"grandTotal":"42165.00","additionalServices":[{"amount":"18100","type":"CHECKED_BAGS"}]},"pricingOptions":{"fareType":["PUBLISHED"],"includedCheckedBagsOnly":false},"validatingAirlineCodes":["IB"],"travelerPricings":[{"travelerId":"1","fareOption":"STANDARD","travelerType":"ADULT","price":{"currency":"NGN","total":"42165.00","base":"19502.00"},"fareDetailsBySegment":[{"segmentId":"1","cabin":"ECONOMY","fareBasis":"ADNNENB2","brandedFare":"NOBAG","class":"A","includedCheckedBags":{"quantity":0}},{"segmentId":"5","cabin":"ECONOMY","fareBasis":"ADNNENB2","brandedFare":"NOBAG","class":"A","includedCheckedBags":{"quantity":0}}]}]}]
,
}); */

/* export const data2_ = atom({
  key: "data2",
  default: [
    {
      "type": "flight-offer",
      "id": "1",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT10H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "7",
                "at": "2020-11-10T19:30:00"
              },
              "arrival": {
                "iataCode": "KEF",
                "at": "2020-11-11T06:05:00"
              },
              "carrierCode": "FI",
              "number": "614",
              "aircraft": {
                "code": "76W"
              },
              "operating": {
                "carrierCode": "FI"
              },
              "duration": "PT5H35M",
              "id": "5",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KEF",
                "at": "2020-11-11T07:40:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T12:10:00"
              },
              "carrierCode": "FI",
              "number": "528",
              "aircraft": {
                "code": "75W"
              },
              "operating": {
                "carrierCode": "FI"
              },
              "duration": "PT3H30M",
              "id": "6",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT11H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T13:10:00"
              },
              "arrival": {
                "iataCode": "KEF",
                "at": "2020-11-24T15:45:00"
              },
              "carrierCode": "FI",
              "number": "529",
              "aircraft": {
                "code": "75W"
              },
              "operating": {
                "carrierCode": "FI"
              },
              "duration": "PT3H35M",
              "id": "11",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KEF",
                "at": "2020-11-24T17:00:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "7",
                "at": "2020-11-24T18:20:00"
              },
              "carrierCode": "FI",
              "number": "615",
              "aircraft": {
                "code": "76W"
              },
              "operating": {
                "carrierCode": "FI"
              },
              "duration": "PT6H20M",
              "id": "12",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "201848.00",
        "base": "73351.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "201848.00",
        "additionalServices": [
          {
            "amount": "64252",
            "type": "CHECKED_BAGS"
          }
        ]
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": false
      },
      "validatingAirlineCodes": [
        "FI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "201848.00",
            "base": "73351.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "5",
              "cabin": "ECONOMY",
              "fareBasis": "OJ2QUSLT",
              "brandedFare": "LIGHT",
              "class": "O",
              "includedCheckedBags": {
                "quantity": 0
              }
            },
            {
              "segmentId": "6",
              "cabin": "ECONOMY",
              "fareBasis": "OJ2QUSLT",
              "brandedFare": "LIGHT",
              "class": "O",
              "includedCheckedBags": {
                "quantity": 0
              }
            },
            {
              "segmentId": "11",
              "cabin": "ECONOMY",
              "fareBasis": "OJ2QUSLT",
              "brandedFare": "LIGHT",
              "class": "O",
              "includedCheckedBags": {
                "quantity": 0
              }
            },
            {
              "segmentId": "12",
              "cabin": "ECONOMY",
              "fareBasis": "OJ2QUSLT",
              "brandedFare": "LIGHT",
              "class": "O",
              "includedCheckedBags": {
                "quantity": 0
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "2",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T13:10:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T06:25:00"
              },
              "carrierCode": "TK",
              "number": "4",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT9H15M",
              "id": "7",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T09:05:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T10:05:00"
              },
              "carrierCode": "TK",
              "number": "1721",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H",
              "id": "8",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT17H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T06:55:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T11:45:00"
              },
              "carrierCode": "TK",
              "number": "1728",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H50M",
              "id": "13",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-24T14:55:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-24T18:25:00"
              },
              "carrierCode": "TK",
              "number": "1",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT11H30M",
              "id": "14",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "7",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "8",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "13",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "14",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "3",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T13:10:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T06:25:00"
              },
              "carrierCode": "TK",
              "number": "4",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT9H15M",
              "id": "7",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T09:05:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T10:05:00"
              },
              "carrierCode": "TK",
              "number": "1721",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H",
              "id": "8",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT22H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T18:55:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T23:50:00"
              },
              "carrierCode": "TK",
              "number": "1724",
              "aircraft": {
                "code": "332"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H55M",
              "id": "17",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-25T08:35:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-25T11:30:00"
              },
              "carrierCode": "TK",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H55M",
              "id": "18",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "7",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "8",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "17",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "18",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "4",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T13:10:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T06:25:00"
              },
              "carrierCode": "TK",
              "number": "4",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT9H15M",
              "id": "7",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T09:05:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T10:05:00"
              },
              "carrierCode": "TK",
              "number": "1721",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H",
              "id": "8",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT27H",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T14:30:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T19:25:00"
              },
              "carrierCode": "TK",
              "number": "1726",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H55M",
              "id": "9",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-25T08:35:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-25T11:30:00"
              },
              "carrierCode": "TK",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H55M",
              "id": "10",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "7",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "8",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "9",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "10",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "5",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T13:10:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T06:25:00"
              },
              "carrierCode": "TK",
              "number": "4",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT9H15M",
              "id": "7",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T09:05:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T10:05:00"
              },
              "carrierCode": "TK",
              "number": "1721",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H",
              "id": "8",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT29H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T18:55:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T23:50:00"
              },
              "carrierCode": "TK",
              "number": "1724",
              "aircraft": {
                "code": "332"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H55M",
              "id": "15",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-25T14:55:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-25T18:25:00"
              },
              "carrierCode": "TK",
              "number": "1",
              "aircraft": {
                "code": "77W"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT11H30M",
              "id": "16",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "7",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "8",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "15",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "16",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "6",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T13:10:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T06:25:00"
              },
              "carrierCode": "TK",
              "number": "4",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT9H15M",
              "id": "7",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T09:05:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T10:05:00"
              },
              "carrierCode": "TK",
              "number": "1721",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H",
              "id": "8",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT29H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T11:35:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T16:25:00"
              },
              "carrierCode": "TK",
              "number": "1722",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H50M",
              "id": "19",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-25T08:35:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-25T11:30:00"
              },
              "carrierCode": "TK",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H55M",
              "id": "20",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "7",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "8",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "19",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "20",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "7",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T23:20:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T17:25:00"
              },
              "carrierCode": "TK",
              "number": "12",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H5M",
              "id": "1",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T20:15:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T21:20:00"
              },
              "carrierCode": "TK",
              "number": "1727",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H5M",
              "id": "2",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT17H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T06:55:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T11:45:00"
              },
              "carrierCode": "TK",
              "number": "1728",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H50M",
              "id": "13",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-24T14:55:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-24T18:25:00"
              },
              "carrierCode": "TK",
              "number": "1",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT11H30M",
              "id": "14",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "1",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "2",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "13",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "14",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "8",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T23:20:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T17:25:00"
              },
              "carrierCode": "TK",
              "number": "12",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H5M",
              "id": "1",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T20:15:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T21:20:00"
              },
              "carrierCode": "TK",
              "number": "1727",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H5M",
              "id": "2",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT22H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T18:55:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T23:50:00"
              },
              "carrierCode": "TK",
              "number": "1724",
              "aircraft": {
                "code": "332"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H55M",
              "id": "17",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-25T08:35:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-25T11:30:00"
              },
              "carrierCode": "TK",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H55M",
              "id": "18",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "1",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "2",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "17",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "18",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "9",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T23:20:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T17:25:00"
              },
              "carrierCode": "TK",
              "number": "12",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H5M",
              "id": "1",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T20:15:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T21:20:00"
              },
              "carrierCode": "TK",
              "number": "1727",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H5M",
              "id": "2",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT27H",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T14:30:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T19:25:00"
              },
              "carrierCode": "TK",
              "number": "1726",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H55M",
              "id": "9",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-25T08:35:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-25T11:30:00"
              },
              "carrierCode": "TK",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT10H55M",
              "id": "10",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "1",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "2",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "9",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "10",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "10",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2020-10-26",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT18H25M",
          "segments": [
            {
              "departure": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-10T13:10:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-11T06:25:00"
              },
              "carrierCode": "TK",
              "number": "4",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT9H15M",
              "id": "3",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-11T12:30:00"
              },
              "arrival": {
                "iataCode": "TXL",
                "at": "2020-11-11T13:35:00"
              },
              "carrierCode": "TK",
              "number": "1725",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT3H5M",
              "id": "4",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        },
        {
          "duration": "PT17H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "TXL",
                "at": "2020-11-24T06:55:00"
              },
              "arrival": {
                "iataCode": "IST",
                "at": "2020-11-24T11:45:00"
              },
              "carrierCode": "TK",
              "number": "1728",
              "aircraft": {
                "code": "32B"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT2H50M",
              "id": "13",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "IST",
                "at": "2020-11-24T14:55:00"
              },
              "arrival": {
                "iataCode": "JFK",
                "terminal": "1",
                "at": "2020-11-24T18:25:00"
              },
              "carrierCode": "TK",
              "number": "1",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TK"
              },
              "duration": "PT11H30M",
              "id": "14",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "NGN",
        "total": "234080.00",
        "base": "39378.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "234080.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "NGN",
            "total": "234080.00",
            "base": "39378.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "3",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "4",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "13",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "14",
              "cabin": "ECONOMY",
              "fareBasis": "WV3XPC",
              "class": "W",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    }
  ],
}) */

/* export const postdata_ = atom({
  key: "postdata",
  default: {
    "currencyCode": "NGN",
    "TripType" : "Round trip",
    "originDestinations": [
      {
        "id": "1",
        "originLocationCode": "ATL",
        "destinationLocationCode": "BER",
        "departureDateTimeRange": {
          "date": "2020-11-18"
        }
      },
      {
        "id": "2",
        "originLocationCode": "BER",
        "destinationLocationCode": "ATL",
        "departureDateTimeRange": {
          "date": "2020-11-30"
        }
      }
    ],
    "travelers": [
      {
        "id": "1",
        "travelerType": "ADULT"
      }
    ],
    "sources": [
      "GDS"
    ],
    "searchCriteria": {
      "maxFlightOffers": 10,
      "flightFilters": {
        "cabinRestrictions": [
          {
            "cabin": "ECONOMY",
            "coverage": "MOST_SEGMENTS",
            "originDestinationIds": [
              "1"
            ]
          }
        ],
        "carrierRestrictions": {
          "excludedCarrierCodes": [
            "OZ"
          ]
        }
      }
    }
  },
}) */

/* export const prevState_ = atom({
  key: "prevstate",
  default: {
    "from": "JFK",
    "fromCity": "New York",
    "from1": "",
    "from2": "",
    "from3": "",
    "from4": "",
    "to": "BER",
    "toCity": "Berlin",
    "to1": "",
    "to2": "",
    "to3": "",
    "to4": "",
    "fromLocal": "New York (JFK)",
    "fromLocal1": "",
    "fromLocal2": "",
    "fromLocal3": "",
    "fromLocal4": "",
    "toLocal": "Berlin (BER)",
    "toLocal1": "",
    "toLocal2": "",
    "toLocal3": "",
    "toLocal4": "",
    "departurDate": "2020-11-10T20:22:00.000Z",
    "departurDate1": "2020-10-25T20:22:20.308Z",
    "departurDate2": "2020-10-25T20:22:20.308Z",
    "departurDate3": "2020-10-25T20:22:20.308Z",
    "departurDate4": "2020-10-25T20:22:20.308Z",
    "returnDate": "2020-11-24T20:22:00.000Z",
    "tripType": "Round trip",
    "adult": 1,
    "child": 0,
    "infant": 0
  },
})
 */
