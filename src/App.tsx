import React from "react";
import "./scss/App.scss";
import Rank from "./partials/rank";
import FindIndex from "./partials/findindex";
import Arrangement from "./partials/arrangement";
import Accordion from "./partials/accordion";

function App() {
  return (
    <main className="output">
      <Rank />
      <FindIndex />
      <Arrangement />
      <Accordion />
    </main>
  );
}

export default App;
