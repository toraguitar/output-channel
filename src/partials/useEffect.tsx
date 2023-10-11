import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ lastName: '山田', firstName: '太郎' });
  useEffect(() => {
    document.title = `${count}回クリックされました。`;
    console.log(`再レンダーされました`);
  }, [count]);

  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <div color="primary" aria-label="outlined primary button group">
        <button onClick={() => setCount((prev) => prev + 1)}>
          ボタン
        </button>
        <button onClick={() => setCount(0)}>
          リセット
        </button>
        <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
        <form noValidate autoComplete="off">
          <input placeholder="姓" value={name.lastName} onChange={(e) => { setName({ ...name, lastName: e.target.value }) }}></input>
          <input placeholder="名" value={name.firstName} onChange={(e) => { setName({ ...name, firstName: e.target.value }) }}></input>
        </form>
      </div>
    </>
  )
};

export default UseEffect;
