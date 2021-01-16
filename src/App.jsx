import React from 'react'
import './css/styles.sass'

// import Basic from './Basic'
// import Article from './components/Article'
// import Timer from './hooks/timer'
import ClassEffect from './hooks/ClassEffect'
import Counter2 from './hooks/Counter2'
// import CounterTwo from './hooks/useStsateLesson'

export default function App() {
    return (
        <div className='App'>
            <h1 className='tx-ml'>Hello CodeSandbox</h1>
            <div className='section'><ClassEffect/></div>
            <div className='section'><Counter2 /></div>
        </div>
    )
}
