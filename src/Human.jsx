import React, { Component, PropTypes } from 'react'
import { Card } from 'react-bootstrap'

import Alert from 'react-bootstrap/Alert';

function Example() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  )
}

class humanName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mike',
    }
  }

  render() {
    // メッセージ
    const msg = 'ナイスな'
    // 計算関数
    function 足し算の計算(靴下, 目薬) {
      return 靴下 + 目薬
    }
    // ...
    function attrs(x) {
      const att = {
        src: `https://dummyimage.com/120x80/999/${x}`,
        alt: 'dummy',
      }
      return <img {...att} />
    }
    // props
    function Hello(props) {
      if (props.name == 'うめ') {
        return <p>Hello{props.name}ちゃん</p>
      } else {
        return (
          <p>Hello{props.name}、うめちゃんじゃない方</p>
        )
      }
    }
    // 条件 三項演算子
    function ReactSelect(props) {
      const isReact = props.bool
      return isReact ? <p>Hello React</p> : <p>Vanilla</p>
    }
    // map
    function Maps() {
      const books = [
        { id: 1, title: 'React' },
        { id: 2, title: 'Vue' },
        { id: 3, title: 'Anglar' },
      ]
      return (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )
    }
    // 返り値
    return (
      <div>
        <div onClick={this.handleClick}>
          {/*  */}
          <p>
            {msg}
            {this.state.name}は{this.props.age}歳{' '}
          </p>
        </div>
        {/*  */}
        <p>
          靴下代金と目薬代金の合計は ={' '}
          {足し算の計算(800, 600)}円
        </p>
        {/*  */}
        <div>
          {/* <p>{attrs('9cf')}</p>*/}
          <p>{attrs('000')}</p>
        </div>
        {/*  */}
        <div>
          <p>
            <Hello name="うめ" />
            <Hello name="とめこ" />
          </p>
        </div>
        {/*  */}
        <div>
          <ReactSelect bool={true} />
        </div>
        {/*  */}
        <Maps />

        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">
              Special title treatment
            </h5>
            <p class="card-text">
              With supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <Card>
          <Card.Body>
            This is some text within a card body.
          </Card.Body>
        </Card>

        <Example/>
      </div>
    )
  }
  // イベント
  handleClick = () => {
    this.setState({ name: this.state.name + 'さん' })
  }
}

humanName.propTypes = {}

export default humanName
