import React from 'react'
// import Counter from './Counter'
import './counter.scss'

function Counter(props) {
  return (
    <li style={{ backgroundColor: props.counter.color }}>
      {props.counter.id}:{props.counter.count}
    </li>
  )
}

function CounterList(props) {
  const counters = props.counters.map((counter) => {
    return <Counter counter={counter} key={counter.id} />
  })
  return <ul>{counters}</ul>
}
class Dev extends React.Component {
  constructor() {
    super()
    this.state = {
      counters: [
        { id: 'A', count: 0, color: 'tomato' },
        { id: 'B', count: 0, color: 'skyblue' },
        { id: 'C', count: 0, color: 'limegreen' },
      ],
    }
  }
  render() {
    return (
      <div className="container">
        <CounterList counters={this.state.counters} />
        <div>TOTAL INVENTORY: 3</div>
      </div>
    )
  }
}
export default Dev
