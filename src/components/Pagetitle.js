import React from 'react'

// eslint-disable-next-line react/prop-types
function Pagetitle(props) {
  return (
  <div>
    <h1 className='title'>{props.children}</h1>
  </div> 
)}

export default Pagetitle
