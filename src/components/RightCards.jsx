import React from 'react'

const RightCards = (props) => {
  return (
    <div style={{boxShadow: props.code}} className='bg-white h-full w-110 rounded-3xl relative z-2 shrink-0'>
      <img className='absolute size-70 -left-12 -bottom-5 ' src={props.img} alt="" />
      <div className='absolute left-60 top-10'>
        <h2 className='text-xl font-bold font-sans tracking-wide '>{props.name}</h2>
        <p style={{color:props.color}} className='leading-5 mt-3 pr-6 '>{props.speciality}</p>
      </div>
        <button style={{backgroundColor:props.color}} className='absolute right-8 bottom-5 cursor-pointer px-3 py-1 rounded-full text-white'>READ MORE</button>
      </div>
  )
}

export default RightCards
