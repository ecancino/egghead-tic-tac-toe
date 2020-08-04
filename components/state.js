import { generateGrid } from "./utils";

export const NEXT_TURN = {
  O: "X",
  X: "O"
};

export const COLOR = {
  X: "#336699",
  O: "#993366"
};

export default () => ({
  grid: generateGrid(3, 3, () => null),
  status: "inProgress",
  turn: "X"
});
