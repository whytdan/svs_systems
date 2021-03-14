import React from 'react'

function TextError (props){
  return <p style={{color: 'red', fontSize: 14, fontFamily: "'Open Sans', sans-serif", textAlign: 'left'}}>{props.children}</p>
} 

export default TextError;