import React from 'react'
import './counter.scss'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    // this.countUp = this.countUp.bind(this)
  }
  countUp() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }
  render() {
    return (
      <li
        style={{
          backgroundColor: this.props.color,
        }}
        onClick={this.countUp.bind(this)}
      >
        {this.state.count}
      </li>
    )
  }
}

function Dev() {
  return (
    <div className="container">
      <ul>
        <Counter color="tomato" />
        <Counter color="deepskyblue" />
        <Counter color="teal" />
      </ul>
    </div>
  )
}
export default Dev
