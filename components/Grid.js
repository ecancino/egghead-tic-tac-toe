import React from "react";

import Cell from "./Cell";

export default ({ grid, onClick }) => (
  <div style={{ display: "inline-block", margin: "1em 0" }}>
    <div
      style={{
        backgroundColor: "#444",
        display: "grid",
        gridTemplateRows: `repeat(${grid.length}, 1fr)`,
        gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
        gridGap: 2
      }}
    >
      {grid.map((row, rowIdx) =>
        row.map((value, colIdx) => (
          <Cell
            key={`${colIdx}-${rowIdx}`}
            onClick={() => onClick(colIdx, rowIdx)}
            value={value}
          />
        ))
      )}
    </div>
  </div>
);
