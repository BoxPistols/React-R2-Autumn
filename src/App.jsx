import React from 'react'
import './styles.sass'
import Basic from './Basic'
import Counter from './hooks/useState'
// import Article from "./components/Article"; import HookBasic from
// './hooks/basic'
import Timer from './hooks/timer'

export default function App() {
    return (
        <div className='App'>
            <h1 className='tx-ml'>Hello CodeSandbox</h1>
            <div className='section'>
                <Counter />
                <Timer />
            </div>
            <Basic /> {/* <Article title="Hi" /> */}
            <div className='section'>{/* <Timer /> */}</div>
        </div>
    )
}
