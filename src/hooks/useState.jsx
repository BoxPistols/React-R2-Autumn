import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className='section'>
            <p>Count : {count}</p>
            <button
                type='button'
                className='btn btn-outline-info'
                onClick={() => setCount(count + 1)}
            >
                Count Up
            </button>
        </div>
    )
}
