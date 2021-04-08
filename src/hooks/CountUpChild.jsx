import React, { memo } from 'react';

const isStyledComponent = {
	backgroundColor: 'khaki'
};

// memo: propsが変更されない限り再レンダリングされない
export const CountUpChild = memo((props) => {
	const { open } = props;
	console.log("レンダリングされた")

	const data = [...Array(20).keys()]
	data.forEach(() => {
		console.log("...DATA")
	})

	return <div>{open ? <h2 style={isStyledComponent}>Child</h2> : null}</div>;
})

