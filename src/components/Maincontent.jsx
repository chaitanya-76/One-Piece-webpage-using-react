import React from 'react'
import Left from './Left'
import Right from './Right'

const Maincontent = (props) => {
  return (
    <div className='flex gap-10'>
      <Left />
      <Right chars={props.chars} />
    </div>
  )
}

export default Maincontent
