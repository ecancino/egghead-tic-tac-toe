import React, { useReducer } from "react";

import reducer from "./reducer";
import initialState from "./state";

import Grid from "./Grid";

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initialState());
  const { grid, status, turn } = state;

  const claimCell = (x, y) => {
    dispatch({ type: "CLICK", payload: { x, y } });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div style={{ display: "inline-block" }}>
      <ul
        style={{
          padding: 0,
          margin: 0,
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <li>Turn: {turn}</li>
        <li>{status === "success" ? `${turn} won!` : null}</li>
        <li>
          <button onClick={reset} type="button">
            reset
          </button>
        </li>
      </ul>
      <Grid grid={grid} onClick={claimCell} />
    </div>
  );
}
