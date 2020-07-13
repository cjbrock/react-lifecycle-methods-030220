import React, { Component } from 'react';

class Name extends Component {
  state = {
    language: "React"
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       language: 'Redux'
  //     })
  //   }, 2000)
  // }

  shouldComponentUpdate(nextProps, nextState){
    if (this.state.language === nextState.language){
      return false
    } else {
      return true
    }
  }

  changeLang = () => {
    this.setState({
      language: 'Redux'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeLang}>Change Language!</button>
        <h2>{this.state.language}</h2>
      </div>
    );
  }
}

export default Name;