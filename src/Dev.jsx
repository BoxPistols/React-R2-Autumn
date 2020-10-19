import React from 'react'
import './counter.scss'

function Counter(props) {
  return (
    <li
      style={{
        backgroundColor: props.counter.color,
      }}
    >
      {props.counter.id}: {props.counter.count}
    </li>
  )
}

class Total extends React.Component {
  constructor() {
    super()
    this.state = {
      counters: [
        { id: 'A', count: 0, color: 'tomato' },
        { id: 'B', count: 0, color: 'deepskyblue' },
        { id: 'C', count: 0, color: 'teal' },
      ],
    }
  }
  render() {
    return (
      <div className="container">
        <ul>
          <Counter counter={this.state.counters[0]} />
          <Counter counter={this.state.counters[1]} />
          <Counter counter={this.state.counters[2]} />
        </ul>
      </div>
    )
  }
}
function Dev() {
  return <Total />
}
export default Dev
