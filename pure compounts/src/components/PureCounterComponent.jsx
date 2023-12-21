import React, { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {

  constructor(props){
    super(props);

    this.state = {
      toggle:false,
      value:0
    }
  }

  handleToggle = ()=>{
    this.setState({
      toggle: this.state.toggle === false ? true : false
    })
  }

  handleCounter = ()=>{
    if(this.state.toggle === true){
      this.setState({
        value: this.state.value+1
      })
    }
    else{
      this.setState({
        value: this.state.value
      })
    }
  }
  


  render() {
    console.log("Pure Component")
    return (
      <div>
        <h1>Pure Component</h1>
        <h3>{this.state.value}</h3>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    )
  }
}