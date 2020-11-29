import React from 'react'
//props 省略
export default function Basic() {
  const El = ({ name }) => {
    return <h1 style={{ fontWeight: 800 }}>{name}</h1>
  }
  function handleClick(event, msg) {
    event.preventDefault()
    console.log('The link was clicked.')
    alert(msg)
  }
  return (
    <div>
      <El name="たかし" />
      <button onClick={ event => handleClick(event, "react") }>クリック！！</button>
    </div>
  )
}
