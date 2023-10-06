import React from "react";
import "./scss/App.scss";
import Rank from "./partials/rank";
import FindIndex from "./partials/findindex";
import Arrangement from "./partials/arrangement";
import Accordion from "./partials/accordion";
import UseState from "./partials/useState";

function App() {
  return (
    <main className="output">
      <Rank />
      <FindIndex />
      <Arrangement />
      <Accordion />
      <UseState />
    </main>
  );
}

export default App;
