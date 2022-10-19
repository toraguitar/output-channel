import React from "react";

function Accordion() {
  return (
    <section className="output-accordion" data-find-index="section">
      <h2 className="output-accordion__title">detailsとsummary</h2>
      <details className="output-accordion__details">
        <summary className="output-accordion__summary">htmlってなんの略？</summary>
        <p className="output-accordion__paragraph">「Hyper Text Markup Language」の略です。</p>
      </details>
    </section>
  );
}

export default Accordion;
