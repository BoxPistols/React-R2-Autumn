import React, { memo } from 'react';

const isStyledComponent = {
	backgroundColor: 'khaki',
};
const isStyledComponentInner = {
	padding: '24px'
};

// memo: propsが変更されない限り再レンダリングされない
export const CountUpChild = memo((props) => {
	const { open, onClose } = props;
	console.log("レンダリングされた")

	const data = [...Array(20).keys()]
	data.forEach(() => {
		console.log("...DATA")
	})

	return (
		<div>
			<div style={isStyledComponent}>{open ? <h2 style={isStyledComponentInner}>Child
			<button onClick={onClose}>閉じる</button></h2> : null}</div>
		</div>
	)
})

