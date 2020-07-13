import React, { Component } from 'react';
import Name from "./Name"

class App extends Component {
  // state = {
  //   name: "Bryant",
  //   age: 100
  // }
  constructor(props){
    super(props)
    this.state = {
      name: "Bryant"
    }
  }
  render(){
    return <div> <Name name={this.state.name}/></div>
  }

}


export default App;
