import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}回クリックされました。`
  });

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
      </div>
    </>
  )
};

export default UseEffect;
