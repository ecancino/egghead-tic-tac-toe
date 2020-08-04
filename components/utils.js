export const clone = x => Object.assign({}, x);

const createRange = (length, mapper) =>
  Array(length)
    .fill()
    .map(mapper);

export const generateGrid = (rows, columns, mapper) =>
  createRange(rows, () => createRange(columns, mapper));

export const checkThree = (a, b, c) => a && b && c && (a === b && b === c);

export const checkForWin = ([nw, n, ne, w, c, e, sw, s, se]) =>
  checkThree(nw, n, ne) ||
  checkThree(w, c, e) ||
  checkThree(sw, s, se) ||
  checkThree(nw, w, sw) ||
  checkThree(n, c, s) ||
  checkThree(ne, e, se) ||
  checkThree(nw, c, se) ||
  checkThree(ne, c, sw);

const isFullGrid = cells => cells.filter(Boolean).length === cells.length;

export const checkForDraw = cells => !checkForWin(cells) && isFullGrid(cells);
