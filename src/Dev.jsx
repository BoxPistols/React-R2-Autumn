import React from 'react'
import './counter.scss'

function CallMe() {
  alert('CallMe!!')
}

function Counter(pops) {
  return (
    <li style={{ backgroundColor: pops.color }} onClick={CallMe}>
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
