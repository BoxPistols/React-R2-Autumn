import React, { useState, useEffect } from 'react'

const LIMIT = 3

export default function Timer() {

  const [timeLeft, setTimeLeft] = useState(LIMIT)

  const reset = () => {
    setTimeLeft(LIMIT)
  }

  // 更新
  const tick = () => {
    console.log('tick')
    setTimeLeft((prevTime) =>
      prevTime <= 1 ? LIMIT : prevTime - 1
    )
  }
  useEffect(() => {
    const timerId = setInterval(tick, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div>
      <p>time: {timeLeft}</p>
      <button onClick={reset}> Reset </button>
    </div>
  )
}
