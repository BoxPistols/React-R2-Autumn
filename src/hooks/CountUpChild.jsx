import React from 'react';

const isStyledComponent = {
	backgroundColor: 'pink'
};
export const CountUpChild = (props) => {
	const { open } = props;

	return <div>{open ? <h2 style={isStyledComponent}>Child</h2> : null}</div>;
};
