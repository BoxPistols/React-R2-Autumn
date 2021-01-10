import React, { useState } from 'react'

export default function CounterTwo() {
    const zaiko = 155
    const [count, setCount] = useState(zaiko)

    return (
        <div className='section'>
            <p>Count : {count}</p>
            <button
                type='button'
                className='btn btn-outline-info'
                // prevCount = 現在のState
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                Count Up
            </button>
        </div>
    )
}
