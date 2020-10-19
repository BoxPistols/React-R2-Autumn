import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.countUp = this.countUp.bind(this)
  }
  countUp() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }
  render(h) {
    return (
      <li
        style={{ backgroundColor: this.props.color }}
        onClick={this.countUp}
      >
        {this.state.count}
      </li>
    )
  }
}
export default Counter
