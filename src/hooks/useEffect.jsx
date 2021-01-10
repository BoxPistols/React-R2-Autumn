// import React, { useState, useEffect } from 'react'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function UseEffectLesson() {
    const [count, setCount] = useState(0)

    // useEffect(() => {     document.querySelector(         '.effectHook'
    // ).innerText = `You clicked ${count} times` })

    useEffect(() => {
        document.querySelector(
            '.effectHook'
        ).innerText = `You clicked ${count} times`
    }, []) // 第二引数の設置

    return (
        <div>
            <div className='section'>
                <p className='effectHook'></p>
            </div>
            <p>
                You clicked {count}
                times
            </p>
            <Button
                variant='flat-o btn-r-flat '
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                Count Up
            </Button>
        </div>
    )
}
