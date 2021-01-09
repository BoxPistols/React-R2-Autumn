import React from 'react'
//props 省略
export default function Basic() {
    const El = ({ name }) => {
        return (
            <h1
                style={{
                    fontWeight: 800,
                }}
            >
                {name}
            </h1>
        )
    }

    function handleClick(event, msg) {
        event.preventDefault()
        console.log('The link was clicked.')
    }

    const books = [
        {
            id: 1,
            title: 'React Book',
        },
        {
            id: 2,
            title: 'Vue Book',
        },
        {
            id: 3,
            title: 'Rails Book',
        },
    ]
    return (
        <div>
            <El name='たかし' />
            <button onClick={(event) => handleClick(event, 'react')}>クリック！！</button>
            <br />
            <br />
            <ul>
                {books.map((bk) => (
                    <li kay={bk.id}>{bk.title}</li>
                ))}
            </ul>
        </div>
    )
}
