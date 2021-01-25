import React from 'react'
import './css/styles.sass'
import UseStateAPI from './hooks/useStateAPI'

export default function App() {
    return (
        <div className='App'>
            <h1 className='tx-ml'>Hello CodeSandbox</h1>
            <div className='section'>
                <UseStateAPI/>
            </div>
        </div>
    )
}
