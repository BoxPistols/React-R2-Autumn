import React, { Component, PropTypes } from 'react'

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
    // 返り値
    return (
      <div onClick={this.handleClick}>
        {/*  */}
        <p>
          {msg}
          {this.state.name}は{this.props.age}歳{' '}
        </p>
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
          <ReactSelect bool={true}/>
        </div>
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
