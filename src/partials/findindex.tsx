import React from "react";

function FindIndex() {
  const getWordPosition = () => {
    const sectionList = document.querySelectorAll('[data-find-index="section"]');
    const numberBox = document.querySelector<HTMLFormElement>('[data-find-index="number"]');
    if (sectionList.length === 0 || numberBox === null) return;

    const numberData = numberBox.querySelector("input")?.value ?? "";

    if (numberData === "") {
      alert("なんか文字入れろよ！！！！");
      return;
    }

    if (!numberData.match(/^[0-9]+$/)) {
      alert("半角数字ではありませんねぇ");
      return;
    }

    const numberDataInt = parseInt(numberData) - 1;
    if (numberDataInt < 0 || sectionList.length <= numberDataInt) {
        alert(`${numberData}番目？画面をよく見たまえよ😁`);
        return;
    }

    const sectionHeading = sectionList[numberDataInt].querySelector("h2");
    if (sectionHeading === null) return;

    const headingTitle = sectionHeading.innerText;

    alert(`${numberData}番目のセクションタイトルは${headingTitle}だ！！！！`);
  };
  return (
    <section className="output-findIndex" data-find-index="section">
      <h2>findindex関数</h2>
      <form className="output-findIndex__form" data-find-index="number">
        <label className="output-findIndex__textBox">
          何番目のセクション？(半角英数字)
          <input type="text" name="number"></input>
        </label>
      </form>
      <button className="output-findIndex__button" data-find-index="button" onClick={getWordPosition}>
        押せ！！！！
      </button>
    </section>
  );
}

export default FindIndex;
