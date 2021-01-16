import React from 'react'
import './css/styles.sass'

// import Basic from './Basic'
// import Article from './components/Article'
// import HookBasic from './hooks/basic'
import Timer from './hooks/timer'
// import Counter from './hooks/Counter'
// import CounterTwo from './hooks/useStsateLesson'
// import UseEffectLesson from './hooks/useEffect'

export default function App() {
    return (
        <div className='App'>
            <h1 className='tx-ml'>Hello CodeSandbox</h1>
            <div className='section'><Timer /></div>
        </div>
    )
}
