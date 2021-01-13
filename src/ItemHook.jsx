import React, { useState } from 'react'
// import Button from 'react-bootstrap'

export default function ItemHook() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([
            ...items,
            { id: items.length, value: Math.floor(Math.random() * 11) },
        ])
    }
    return (
        <div>
            <button
                onClick={addItem} // アイテム追加の挙動
                class='btn btn-primary'
            >
                Add Item
            </button>
            <p>
                {items.map((item) => (
                    <span key={item.id}> {item.value} </span>
                ))}
            </p>
        </div>
    )
}
