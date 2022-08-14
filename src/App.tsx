import React from "react";
import "./scss/App.scss";
import Rank from "./partials/rank";
import FindIndex from "./partials/findindex";

function App() {
  return (
    <main className="output">
      <Rank />
      <FindIndex />
    </main>
  );
}

export default App;
