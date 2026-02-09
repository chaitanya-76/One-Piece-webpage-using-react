import React from 'react'
import Mainpage from './components/Mainpage'
import nami from './images/nami.png'
import usopp from './images/usopp.png'
import sanji from './images/sanji.png'
import zoro from './images/zoro.png'

const App = () => {

    const chars = [
      {
        img: zoro,
        color: 'green',
        name: 'RORONOA ZORO',
        speciality: 'THREE SWORD STYLE USER'
      },
      {
        img: nami,
        color: 'purple',
        name: 'NAMI',
        speciality: 'EXCELLENT NAVIGATOR'
      },
      {
        img: sanji,
        color: 'gold',
        name: 'VINSMOKE SANJI',
        speciality: 'BEST COOK IN THE WORLD'
      },
      {
        img: usopp,
        color: 'brown',
        name: 'USOPP',
        speciality: 'THE BEST SNIPER'
      }
    ]

  return (

    <div>
      <Mainpage chars={chars} />
    </div>
  )
}

export default App
