import React from 'react'
import Navbar from './Navbar'
import Maincontent from './Maincontent'
import luffy from '../images/luffy.png'

const Mainpage = (props) => {
  return (
    <div className='h-screen w-full bg-linear-65 from-zinc-900 via-zinc-800 to-zinc-900'>
      <img src={luffy} alt="" className='absolute right-0 top-20 size-220 z-1 opacity-70 drop-shadow-[20px_20px_20px_rgba(240,10,10,0.5)]' />
      <Navbar />
      <Maincontent chars={props.chars} />
    </div>
  )
}

export default Mainpage
