export const clone = x => JSON.parse(JSON.stringify(x));

export function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() =>
      Array(columns)
        .fill()
        .map(mapper)
    );
}

export function checkThree(a, b, c) {
  if (!a || !b || !c) return false;
  return a === b && b === c;
}

// ES2019 Array.prototype.flat() could be used instead
export const flatten = arr => arr.reduce((acc, cur) => [...acc, ...cur], []);

export function checkForWin(flatGrid) {
  const [nw, n, ne, w, c, e, sw, s, se] = flatGrid;

  return (
    checkThree(nw, n, ne) ||
    checkThree(w, c, e) ||
    checkThree(sw, s, se) ||
    checkThree(nw, w, sw) ||
    checkThree(n, c, s) ||
    checkThree(ne, e, se) ||
    checkThree(nw, c, se) ||
    checkThree(ne, c, sw)
  );
}

export function checkForDraw(flatGrid) {
  return (
    !checkForWin(flatGrid) &&
    flatGrid.filter(Boolean).length === flatGrid.length
  );
}
