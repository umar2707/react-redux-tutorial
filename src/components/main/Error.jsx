import React from 'react'

const Error = (props) => {
  return (
    <div style={{textAlign:'center'}}>
      <button onClick={()=> props.history.push('/')}>go to main page</button>
    </div>
  )
}

export default Error
