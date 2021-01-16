import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'


export default function Counter2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('render');
        document.querySelector(
            '.ClassEffect'
        ).innerHTML = `ftom Use クリック：${count}回カウント`
    }, [count])

    return (
        <div>
            {/* <h2>Counter2</h2> */}
            {/* <p>回数：{count} 回</p>    */}
            <p>useEffect Get</p>
            <p>{name}</p>

            <Form style={{maxWidth: '320px', margin: 'auto'}}>
                <Form.Group controlId='formBasicEmail'>
                    {/* <Form.Label></Form.Label> */}
                    <Form.Control 
                        type='text'
                        placeholder='Enter'
                        value={name}
                        onChange={e=>{setName(e.target.value)}}
                        />
                </Form.Group>
            </Form>

            <Button onClick={() => setCount(count + 1)}> カウント</Button>
        </div>
    )
}
