import React from 'react'
import RightCards from './RightCards'

const Right = (props) => {
  return (
    <div id='right' className='h-220 w-6/11 flex items-end p-10 overflow-x-auto'>
        <div className='flex items-end gap-10 inset-shadow-2xl z-9 h-50'>
          {props.chars.map(function(elem, idx){
        return <RightCards key={idx} img={elem.img} color={elem.color} name={elem.name} speciality={elem.speciality} />
      })}
        </div>
    </div>
  )
}

export default Right
