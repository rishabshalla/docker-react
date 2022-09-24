import React from "react";

export const FunCompo = () => {
  return (
    <div>
      <div className="box box1">
        <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          This is created using functional Component
        </h1>
        <p className="pp">This is done using external css</p>
        <p style={{ fontSize: "20px", color: "blue" }}>
          This is done using inline css
        </p>
      </div>
    </div>
  );
};
