// import React, { useState, useEffect } from 'react'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function UseEffectLesson() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)

    const LIMIT = 5
    function Timer() {}

    // useEffect(() => {     document.querySelector(         '.effectHook'
    // ).innerText = `You clicked ${count} times` })

    useEffect(() => {
        // document.querySelector(
        //     '.effectHook'
        // ).innerText = `You clicked ${count} times`
        console.log(count)
        console.log(count2)
    }, [count, count2]) // 副作用対策に、第二引数の設置 ＝ １回だけ読まれる
    // 明示的に副作用依存の値を指定すす

    return (
        <div>
            <div className='section'>
                <p className='effectHook'></p>
            </div>

            <div className='section counters'>
                {/* <p>
                    count You clicked {count + count2}
                    times
                </p> */}
                <Button
                    variant='flat-o btn-r-flat '
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                >
                    Count Up
                </Button>
            </div>

            <div className='section counters'>
                <p>
                    count2 You clicked {count2}
                    times
                </p>
                <Button
                    variant='flat-o btn-r-flat '
                    onClick={() => setCount2((prevCount) => prevCount + 1)}
                >
                    Count Up2
                </Button>
            </div>

            <div className='section counters'>
                <p>
                    count3 You clicked {count3}
                    times
                </p>
                <Button
                    variant='flat-o btn-r-flat '
                    onClick={() => setCount3((prevCount) => prevCount + 1)}
                >
                    Count Up3
                </Button>
            </div>
        </div>
    )
}
