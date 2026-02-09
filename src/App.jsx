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
        speciality: 'THREE SWORD STYLE USER',
        code: '20px 20px 20px rgba(10,128,10,0.5)'

      },
      {
        img: nami,
        color: 'purple',
        name: 'NAMI',
        speciality: 'EXCELLENT NAVIGATOR',
        code: '20px 20px 20px rgba(128,10,128,0.5)'
      },
      {
        img: sanji,
        color: 'gold',
        name: 'VINSMOKE SANJI',
        speciality: 'BEST COOK IN THE WORLD',
        code: '20px 20px 20px rgba(255,215,10,0.5)'
      },
      {
        img: usopp,
        color: 'brown',
        name: 'USOPP',
        speciality: 'THE BEST SNIPER',
        code: '20px 20px 20px rgba(165,42,42,0.5)'
      }
    ]

  return (

    <div>
      <Mainpage chars={chars} />
    </div>
  )
}

export default App
