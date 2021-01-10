// import React, { useState, useEffect } from 'react'
import React, { useEffect, useState } from 'react'

export default function UseEffectLesson() {
    const [count, setCount] = useState(0)

    // useEffect(() => {     document.querySelector(         '.effectHook'
    // ).innerText = `You clicked ${count} times` })

    useEffect(() => {
        document.querySelector(
            '.effectHook'
        ).innerText = `You clicked ${count} times`
    }, [])

    return (
        <div>
            <div className='section'>
                <p className='effectHook'></p>
            </div>
            <p>
                You clicked {count}
                times
            </p>
            <button
                type='button'
                className='btn btn-outline-info'
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                Count Up
            </button>
        </div>
    )
}
