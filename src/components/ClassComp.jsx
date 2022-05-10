import React, { Component } from 'react';
import './style.css';

export default class ClassComp extends Component {
  render() {
    return (
        <div className='cls'>
        <h2>This is Class Component</h2>
        <p style={{color:'yellow',fontWeight:"bold"}}>Inline Css</p>
        <p className='ext'>External Css</p>
        </div>
    )
  }
}
