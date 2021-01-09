import React, { useState, useEffect } from "react";

const LIMIT = 3;

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  // リセット
  const reset = () => {
    setTimeLeft(LIMIT);
  };

  // timeLeft(値)を更新
  const tick = () => {
    console.log("tick");
    // setTimeLeft関数（仮引数）三項演算子 引数の比較 xxx以下になれば、LIMIT - 1
    setTimeLeft((prevTime) => (prevTime <= 1 ? LIMIT : prevTime - 1));
  };
  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <p>time: {timeLeft}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
