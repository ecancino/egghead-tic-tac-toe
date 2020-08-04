import React from "react";

import { COLOR } from "./state";

export default function Cell({ onClick, value }) {
  return (
    <button
      style={{
        border: "none",
        outline: "none",
        fontSize: "5rem",
        width: 100,
        height: 100,
        color: COLOR[value],
        backgroundColor: "#fff",
        cursor: "pointer"
      }}
      onClick={onClick}
      type="button"
      disabled={value}
    >
      {value}
    </button>
  );
}
