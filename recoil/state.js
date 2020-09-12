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

