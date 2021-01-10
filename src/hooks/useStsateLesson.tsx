import React, { useState } from 'react'

export default function useStsateLesson() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className='section'>
                <p>カウント：{count}</p>
                <button
                    type='button'
                    className='btn btn-outline-waring'
                    onClick={() => setCount(count + 10)}
                ></button>
            </div>
        </div>
    )
}
