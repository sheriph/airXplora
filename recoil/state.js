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

export const primaryContactState = atom({
  key: "primarycontact",
  default: "",
});

export const setPrimaryContactState = selector({
  key: "setprimarycontact",
  set: ({ set }, payload) => set(primaryContactState, (curr) => payload),
});

export const secondaryContactState = atom({
  key: "secondarycontact",
  default: "",
});

export const setSecondaryContactState = selector({
  key: "setsecondarycontact",
  set: ({ set }, payload) => set(secondaryContactState, (curr) => payload),
});

// from flight search input  Booking State ///

export const fromSearchState = atom({
  key: "fromsearchstate",
  default: "",
});

export const setFromSearchState = selector({
  key: "setfromsearchstate",
  set: ({ set }, payload) => set(fromSearchState, (curr) => payload),
});

// to flight search input  Booking State ///

export const toSearchState = atom({
  key: "tosearchstate",
  default: "",
});

export const setToSearchState = selector({
  key: "settosearchstate",
  set: ({ set }, payload) => set(toSearchState, (curr) => payload),
});

// date states //

export const departureDate_ = atom({
  key: "departuredate",
  default: new Date(),
});

export const setDepartureDate_ = selector({
  key: "setdeparturedate",
  set: ({ set }, payload) => set(departureDate_, (curr) => payload),
});

export const returnDate_ = atom({
  key: "returndate",
  default: null,
});

export const setReturnDate_ = selector({
  key: "setreturndate",
  set: ({ set }, payload) => set(returnDate_, (curr) => payload),
});

export const isCalendarOpen_ = atom({
  key: "iscalendaropen",
  default: false,
});

export const setIsCalendarOpen_ = selector({
  key: "setiscalendaropen",
  set: ({ set }, payload) => set(isCalendarOpen_, (curr) => payload),
});
