import React, { Component, PropTypes } from 'react'

class humanName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mike',
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>
          {(this.state.name)}は{this.props.age}歳{' '}
        </p>
      </div>
    )
  }
  handleClick = () => {
    this.setState({ name: this.state.name + 'さん'})
  }
}

humanName.propTypes = {}

export default humanName
