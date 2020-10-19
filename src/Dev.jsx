import React from 'react'
import './counter.scss'

function Counter(props) {
  return (
    <li style={{ backgroundColor: props.counter.color }}>
      {props.counter.id}: {props.counter.count}
    </li>
  )
}

function CounterList(props) {
  const counters = props.counters.map((c) => {
    return <Counter counter={c} key={c.id} />
  })
  return <ul>{counters}</ul>
}

class Total extends React.Component {
  constructor() {
    super()
    this.state = {
      // Object Array
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
        {/* {this.state.counters[1].id} */}
        {/* <Counter counter={this.state.counters[0]} />
          <Counter counter={this.state.counters[1]} />
          <Counter counter={this.state.counters[2]} /> */}
        <CounterList counters={this.state.counters} />
      </div>
    )
  }
}
function Dev() {
  return <Total />
}
export default Dev
