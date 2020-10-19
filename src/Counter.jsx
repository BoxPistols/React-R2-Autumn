import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 12,
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
      <div
        style={{ backgroundColor: this.props.color }}
        onClick={this.countUp}
      >
        {this.state.count}
      </div>
    )
  }
}
export default Counter
