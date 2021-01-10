import React, { useState } from 'react'

export default function CounterTwo() {
    const [count, setCount] = useState(150)

    return (
        <div className='section'>
            <p>Count : {count + 100}</p>
            <button
                type='button'
                className='btn btn-outline-info'
                onClick={() => setCount(count + 100)}
            >
                Count Up
            </button>
            <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => setCount(count - 10)}
            >
                Count Down
            </button>
        </div>
    )
}
