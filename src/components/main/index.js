import React from "react";
import "./style.css";
import FunctioningApp from "./functioning";
import ScheduleMeetings from "./schedule-meetings";
import Advantage from "./advantage-calel";
// import "main-style.css";
// import FunctioningApp from "./functioning";

function Main() {
  return (
    <main className="main-container" aria-label="main">
      <div className="wrapper">
        <FunctioningApp />
        <ScheduleMeetings />
        <Advantage />
      </div>
    </main>
  );
}

export default Main;
