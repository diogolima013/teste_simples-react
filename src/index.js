import React from "react";
import ReactDOM from "react-dom/client";
import Case2 from "./Case2";
import blabla from "./mocks/func.json"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Case2 data={blabla}/>
  </React.StrictMode>
);
