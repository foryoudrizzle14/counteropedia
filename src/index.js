import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Counter from "./counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <Counter></Counter>
  </div>
);
