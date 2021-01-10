import React, { Component, Fragment } from 'react'

export default class Map extends Component {
    render() {
        const fruits = [
            {
                id: 1,
                name: 'banana',
            },
            {
                id: 2,
                name: 'apple',
            },
            {
                id: 3,
                name: 'melon',
            },
        ]
        return (
            <Fragment>
                <div className='alert alert-warning' role='alert'>
                    <ul>
                        {fruits.map((x) => (
                            <li key={x.id}>
                                {x.id}: {x.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        )
    }
}
