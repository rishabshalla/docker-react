import "./App.css";

import React, { useState } from "react";
import { FunCompo } from "./components/FunCompo";
import ClassCompo from "./components/ClassCompo";

export const App = () => {
  let [fun, setFun] = useState(false);
  let [cla, setCla] = useState(false);

  return (
    <div>
      <h1 id="header">Styling using Functional and Class Components</h1>
      <div className="btnbox">
        <button className="funcButton btn" onClick={() => setFun(!fun)}>
          To see styling in functional component
        </button>
        <button className="classButton btn" onClick={() => setCla(!cla)}>
          To see styling in class component
        </button>
      </div>
      {fun && <FunCompo />}
      {cla && <ClassCompo />}
    </div>
  );
};
