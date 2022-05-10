import React from 'react';
import './style.css';

function FunctionalComp() {
  return (
      <div className='func'>
      <h2>This is Functional Component</h2>
      <p style={{color:'red',fontWeight:"bold"}}>Inline Css</p>
      <p className='ext'>External Css</p>
      </div>
  )
}

export default FunctionalComp