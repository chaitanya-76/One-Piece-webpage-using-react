import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h2 className='absolute top-6 left-10 tracking-wider font-serif text-3xl text-white font-bold'>ONE P<span className='text-red-600'>I</span>ECE</h2>
      <div  className='h-22 flex justify-center gap-8 items-center text-white font-semibold '>
      <h4>HOME</h4>
      <h4>ABOUT</h4>
      <h4>GALLERY</h4>
      <h4 className='text-red-600 underline'>CHARACTERS</h4>
      </div>
    </div>
  )
}

export default Navbar
