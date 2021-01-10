import React from 'react'
import './styles.sass'
import Basic from './Basic'
// import Article from './components/Article'
import HookBasic from './hooks/basic'
import Timer from './hooks/timer'
import CounterTwo from './hooks/useStsateLesson'

export default function App() {
    return (
        <div className='App'>
            <h1 className='tx-ml'>Hello CodeSandbox</h1>
            <div className='section'>
                <CounterTwo />
            </div>
            <div className='section'>{/* <Counter /> */}</div>
            <div className='section'>
                <Basic />
            </div>
            {/* <Article title="Hi" /> */}
            <div className='section'>
                <Timer />
            </div>
            <div className='section'>
                <HookBasic />
            </div>
        </div>
    )
}
