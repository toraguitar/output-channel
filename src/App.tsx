import React from "react";
import "./scss/App.scss";
import Rank from "./partials/rank";
import FindIndex from "./partials/findindex";
import Arrangement from "./partials/arrangement";
import Accordion from "./partials/accordion";
import UseState from "./partials/useState";
import UseEffect from "./partials/useEffect";
import UseContext from "./partials/useContext";

function App() {
  return (
    <main className="output">
      <Rank />
      <FindIndex />
      <Arrangement />
      <Accordion />
      <UseState />
      <UseEffect />
      <UseContext />
    </main>
  );
}

export default App;
