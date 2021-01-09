import React from 'react'
//props 省略
export default function Basic() {
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

    // mapの実行結果を返す関数
    const bookItems = (library) =>
        books.map((book) => (
            <li kay={book.id}>
                {book.title}：{library}
            </li>
        ))

    return (
        <div>
            <div className='alert alert-primary' role='alert'>
                <div className='section'></div>
                <div className='section'>
                    <ul>
                        {books.map((bk) => (
                            <li kay={bk.id}>{bk.title}</li>
                        ))}
                    </ul>
                </div>
                <div className='section'>
                    <ul>{bookItems('＊改訂版')}</ul>
                </div>
            </div>
        </div>
    )
}
