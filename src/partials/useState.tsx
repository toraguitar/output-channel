import React, { useState } from "react";

const UseState = () => {
  const initialState = Math.floor(Math.random() * 10) + 1;

  const [count, setCount] = useState(initialState);
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);

  return (
    <>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
        <button onClick={() => setCount(count - 1)}>- 1</button>
        <button onClick={() => setCount(0)}>０</button>
        <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
      </div>
    </>
  );
}

export default UseState;
