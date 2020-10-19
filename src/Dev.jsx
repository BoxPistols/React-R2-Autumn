import React from 'react'
import Counter from './Counter'
import './counter.scss'


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
