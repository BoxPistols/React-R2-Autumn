import React from 'react'
import './counter.scss'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 12,
    }
  }
  render(h) {
    return (
      <div style={{ color: this.props.color }}>
        {this.state.count}
      </div>
    )
  }
}
class Dev extends React.Component {
  render() {
    return (
      <div>
        <Counter color="tomato" />
        <Counter color="teal" />
      </div>
    )
  }
}
export default Dev
