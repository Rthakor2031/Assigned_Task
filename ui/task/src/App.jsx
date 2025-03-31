import React from "react";
import { Link } from "react-router-dom";
import "../src/App.css";
import Allroutes from "./Routes/Allroutes";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="left">
          <Allroutes />
        </div>
      </div>
    </div>
  );
};

export default App;
