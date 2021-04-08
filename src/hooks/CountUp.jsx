import React, { useState, useCallback } from 'react';
import { CountUpChild } from './CountUpChild';

export const CountUp = () => {

	const [count, setCount] = useState(0)
	const [text, setText] = useState('')
	const [open, setOpen] = useState(false)

	const onCounter = () => {
		setCount(count + 1)
	}

	const onText = (e) => setText(e.target.value)

	// const onToggle = () => {
	// 	setOpen(!open)
	// }

	const onOpen = useCallback(() => {
		setOpen(true)
	}, [])

	const onClose = useCallback(() => {
		setOpen(false)
	}, [])

	return (
		<div>
			<h2>Hello inputed</h2>

			<hr />
			<h3>Text: {text}</h3>
			<input value={text} onChange={onText} />

			<hr />
			<h3>Hello CountUp</h3>
			<p>{count}</p>
			<button onClick={onCounter}>onCounter</button>

			<hr />
			<CountUpChild open={open} onClose={onClose} />
			{/*<button onClick={onToggle}> onToggle </button>*/}

			<button onClick={onOpen}> onOpen </button>
			{/*	<button onClick={onClose}> onClose </button> */}

		</div>
	);
}
