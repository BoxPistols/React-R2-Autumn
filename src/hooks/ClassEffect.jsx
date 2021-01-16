import React, { Component } from 'react'
// import { Button } from "react-bootstrap";

export default class ClassEffect extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    document.querySelector('.ClassEffect').innerHTML = `クリック：${this.state.count}回`
  }
  componentDidUpdate(){
    document.querySelector('.ClassEffect').innerHTML = `クリック：${this.state.count}回`
  }
  
  render() {
    return (
      <div>
        {/* <p>ClassEffect Put</p> */}
        <div className="ClassEffect"></div>
        {/* <p>Click is: {this.state.count} 回</p> */}
        {/* <Button variant="outline-info" onClick={()=> this.setState({ count: this.state.count + 1})}>Add Count</Button>   */}
      </div>
    )
      }
  }
