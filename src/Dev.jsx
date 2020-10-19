import React from 'react'
import './counter.scss'

function CallMe(props) {
  alert(props)
}
// TODO：　関数に引数を渡す
function Counter(props) {
  return (
    <li
      style={{ backgroundColor: props.color }}
      onClick={() => CallMe(`This is ${props.color}`)}>
      0
    </li>
  )
}

function Dev() {
  return (
    <div>
      <div>develop</div>
      <div className="container">
        <ul>
          <Counter color="tomato" />
          <Counter color="teal" />
          <Counter color="skyblue" />
        </ul>
      </div>
    </div>
  )
}
export default Dev
