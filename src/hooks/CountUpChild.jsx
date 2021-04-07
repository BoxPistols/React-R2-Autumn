import React from 'react';

const isStyledComponent = {
	backgroundColor: 'pink'
};
export const CountUpChild = (propsOpen) => {
	const { open } = propsOpen;

	return <div style={isStyledComponent}>{open ? <h2>Child</h2> : null}</div>;
};
