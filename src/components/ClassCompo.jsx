import React, { Component } from "react";

export default class ClassCompo extends Component {
  render() {
    return (
      <div>
        <div className="box box2">
          <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            This is created using class Component
          </h1>
          <p className="pp">This is done using external css</p>
          <p style={{ fontSize: "20px", color: "blue" }}>
            This is done using inline css
          </p>
        </div>
      </div>
    );
  }
}
