import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {
    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)
    }

    const inc10 = () => {
        for (let i = 0; i < 10; i++) {
            setCount((pre) => pre + 1)
            console.log(count)
        }
    }

    const reset = () => {
        setCount((pre) => 0)
    }

    return (
        <div>
            <div className='section'>
                <h2>Counter {count}</h2>
                <Button onClick={inc}>カウント</Button>
                <Button onClick={inc10}>カウント10</Button>
                <Button onClick={reset}>リセット</Button>
            </div>
        </div>
    )
}
