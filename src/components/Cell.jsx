import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "60px",
        height: "60px",
        fontSize: "18px",
        textAlign: "center",
        backgroundColor: "#e0e0e0",
        border: "1px solid #555",
        cursor: value ? "not-allowed" : "pointer",
      }}
    >
      {value}
    </button>
  );
};

export default Cell;
