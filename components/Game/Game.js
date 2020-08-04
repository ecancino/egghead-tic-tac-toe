import React, { useReducer } from "react";

import reducer from "./reducer";
import initialState from "./state";

import Grid from "./Grid";

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initialState());
  const { grid, status, turn } = state;

  const handleClick = (x, y) => {
    dispatch({ type: "CLICK", payload: { x, y } });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div css={{ display: "inline-block" }}>
      <div
        css={{
          display: "flex",
          // flexFlow: "row nowrap",
          justifyContent: "space-between"
        }}
      >
        <div>Next turn: {turn}</div>
        <div>{status === "success" ? `${turn} won!` : null}</div>
        <button onClick={reset} type="button">
          reset
        </button>
      </div>
      <Grid grid={grid} handleClick={handleClick} />
    </div>
  );
}
