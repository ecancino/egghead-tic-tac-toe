import initialState, { NEXT_TURN } from "./state";
import { flatten, checkForWin, checkForDraw, clone } from "./utils";

// function clickAction(state, action) {
//   const { x, y } = action.payload;
//   const { grid, turn } = state;

//   if (grid[y][x]) {
//     return state;
//   }

//   const nextState = clone(state);

//   nextState.grid[y][x] = turn;

//   const flatGrid = flatten(nextState.grid);

//   if (checkForWin(flatGrid)) {
//     nextState.status = "success";
//     return nextState;
//   }

//   if (checkForDraw(flatGrid)) {
//     return initialState();
//   }

//   nextState.turn = NEXT_TURN[turn];

//   return nextState;
// }

function clickAction(state, action) {
  const { x, y } = action.payload;
  const { grid, turn } = state;

  if (grid[y][x]) {
    return state;
  }

  const nextState = clone(state);

  nextState.grid[y][x] = turn;

  const flatGrid = flatten(nextState.grid);

  if (checkForWin(flatGrid)) {
    nextState.status = "success";
    return nextState;
  }

  if (checkForDraw(flatGrid)) {
    return initialState();
  }

  nextState.turn = NEXT_TURN[turn];

  return nextState;
}

export default (state, action) => {
  if (state.status === "success" && action.type !== "RESET") {
    return state;
  }

  switch (action.type) {
    case "RESET":
      return initialState();

    case "CLICK": {
      return clickAction(state, action);
    }

    default:
      return state;
  }
};
