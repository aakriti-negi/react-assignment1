import './App.css';
import FunctionalComp from "./components/FunctionalComp";
import ClassComp from './components/ClassComp';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    showFunc: false,
    showClass: false
  }

  handleFuncClick = () => {
    this.setState({ showFunc: !this.state.showFunc })
  }

  handleClassClick = () => {
    this.setState({ showClass: !this.state.showClass })
  }

  render() {
    return (
      <div className='App'>
        <h1>Styling in Class and Functional Component</h1>

        <button className='left' onClick={this.handleClassClick}>View Class Component</button>
        <button className='right' onClick={this.handleFuncClick}>View Functional Component</button>

        <div className='box'>
          {this.state.showClass ? <ClassComp /> : null}
          {this.state.showFunc ? <FunctionalComp /> : null}
        </div>
      </div>
    )
  }
}

