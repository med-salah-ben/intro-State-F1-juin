import React, { Component } from 'react'

export default class App extends Component { 
  constructor(){
    super()
    this.state = {
      count: 0 
    }

  }

  increment = ()=>{
    this.setState({count:this.state.count +1})
  }

  reset = ()=>{
    this.setState({count:0})
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h3> {this.state.count} </h3>
        <button onClick={()=>this.setState({count:this.state.count -1})}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
