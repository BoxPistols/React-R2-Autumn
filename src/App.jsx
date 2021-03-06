import React from 'react'
import './css/styles.sass'
import { CountUp } from './hooks/CountUp';

import Basic from './Basic'
// import Article from './components/Article'
import HookBasic from './hooks/basic'
// import Timer from './hooks/timer'
import CounterTwo from './hooks/useStsateLesson'
import UseEffectLesson from './hooks/useEffect'
import ItemHook from './ItemHook'

export default function App() {
    return (
        <div className='App'>
            <h1 className='tx-ml'>Hello CodeSandbox</h1>
            <div className='section'>
                <ItemHook />
                <CountUp />
            </div>
            <div className='section'>{/* <UseEffectLesson /> */}</div>
            <div className='section'>{/* <CounterTwo /> */}</div>
            <div className='section'>{/* <Basic /> */}</div>
            <div className='section'>{/* <Timer /> */}</div>
            <div className='section'>{/* <HookBasic /> */}</div>
        </div>
    );
}
