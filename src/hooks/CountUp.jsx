import React, { useState } from 'react';
import { CountUpChild } from './CountUpChild';

export default function CountUp() {

	const [count, setCount] = useState(0)
	const [text, setText] = useState('')
	const [open, setOpen] = useState(false)

	const onCounter = () => {
		setCount(count + 1)
	}

	const onText = (e) => setText(e.target.value)

	const onToggle = () => {
		setOpen(!open)
	}

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
			<CountUpChild open={open} />
			<button onClick={onToggle}> onToggle </button>

		</div>
	);
}
