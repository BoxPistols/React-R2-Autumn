import React from 'react'
import Counter from './Counter'
import './counter.scss'

class Dev extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    // }
  }

  render() {
    return (
      <div className="container">
        <ul>
          <Counter color="teal" />
          <Counter color="tomato" />
          <Counter color="skyblue" />
        </ul>
      </div>
    )
  }
}
export default Dev
