import React, { useState } from 'react';
import { CountUpChild } from './CountUpChild';

export default function CountUp() {
	const [ count, setCount ] = useState(0);
	const [ text, setText ] = useState('show here...');
	const [ open, setOpen ] = useState(false);

	const countUp = () => {
		setCount(count + 1);
	};
	const onChangeText = (e) => setText(e.target.value);

	const onChangeToggle = () => {
		setOpen(!open);
	};

	return (
		<div>
			<h2>Hello inputed</h2>

      <hr />
			<p>{text}</p>
			<input onChange={onChangeText} type="text" value={text} />

			<hr />
			<h2>Hello CountUp</h2>
			<p>{count}</p>
			<button onClick={countUp}>CountUp</button>

			<hr />
			<button onClick={onChangeToggle}>表示Toggle</button>
			<CountUpChild open={open} />
		</div>
	);
}
