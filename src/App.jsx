import React from 'react'
import './css/styles.sass'
import MemoBasic from './hooks/memo'

export default function App() {
	return (
		<div className='App'>
			<h1 className='tx-ml'>Hello CodeSandbox</h1>
            <div className='section'>
                <MemoBasic/>
			</div>
		</div>
	)
}
