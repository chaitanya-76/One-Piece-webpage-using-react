import React from 'react'
import Navbar from './Navbar'
import Maincontent from './Maincontent'
import luffy from '../images/luffy.png'

const Mainpage = (props) => {
  return (
    <div className='h-screen w-full bg-linear-65 from-zinc-900 via-zinc-800 to-zinc-900'>
      <img src={luffy} alt="" className='absolute right-40 top-10 size-180 z-1 opacity-70' />
      <Navbar />
      <Maincontent chars={props.chars} />
    </div>
  )
}

export default Mainpage
