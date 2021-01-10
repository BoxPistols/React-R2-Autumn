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

        const fruitsItems = (p: string, v: number) =>
            fruits.map((f) => (
                <li key={f.id}>
                    {p}
                    {v}
                    off! 対象商品： {f.id}: {f.name}
                </li>
            ))

        return (
            <Fragment>
                <div className='alert alert-warning' role='alert'>
                    <ul>{fruitsItems('特価!', 30)}</ul>
                </div>
            </Fragment>
        )
    }
}
