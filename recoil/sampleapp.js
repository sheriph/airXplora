import React from "react";
import "./App.css";
//import firebase from "./firebase/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  countState,
  incrementCount,
  decrementCount,
  listState,
  valueState,
  setValue,
  setList,
} from "./recoil/state";

/* firebase.db.collection("cities").doc("DC").set({ region: ["lagos", "ibadan"] })
 */
// Atomically add a new region to the "regions" array field.
/* washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
});

// Atomically remove a region from the "regions" array field.
washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
}); */

function App() {
  const count = useRecoilValue(countState);
  const increment = useSetRecoilState(incrementCount);
  const decrement = useSetRecoilState(decrementCount);
  const list = useRecoilValue(listState);
  const value = useRecoilValue(valueState);
  const updateValue = useSetRecoilState(setValue);
  const updateList = useSetRecoilState(setList);

  return (
    <React.Fragment>
      <div className="App">
        <button type="button" onClick={increment}>
          +
        </button>
        <span>{count}</span>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
      <div>
        <input value={value} onChange={(e) => updateValue(e.target.value)} />
        <button
          type="button"
          onClick={(e) => {
            updateList(value);
            updateValue("");
          }}
        >
          Update List
        </button>
      </div>
      <div>
        <ol>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
}

export default App;
