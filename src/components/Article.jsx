import React from 'react'

function add(x, y) {
  return x + y
}

function SayHello({ name, creative }) {
  return (
    <p>
      Say, {name} / {creative}
    </p>
  )
}

const Article = (props) => {
  const msg = 'Boo'
  const data = {
    name: 'John',
    creative: 'song',
  }
  return (
    <div>
      <SayHello {...data} />
      <h2>
        {props.title} {msg}
      </h2>
      <p> {add(10, 20)}</p>
    </div>
  )
}

export default Article
