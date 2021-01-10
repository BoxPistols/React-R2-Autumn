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
    }, [])

    return (
        <div>
            <style type='text/css'>{`   `}</style>
            <Button variant='flats'>Primary</Button>

            <div className='section'>
                <p className='effectHook'></p>
            </div>
            <p>
                You clicked {count}
                times
            </p>
            <button
                className='btn btn-outline-primary'
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                Count Up
            </button>
        </div>
    )
}
