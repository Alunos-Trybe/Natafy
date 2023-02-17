import React from 'react'
import './Home.scss'
import Menu from '../../Components/Menu/Menu'

function Home() {
  return (
    <div className='Home' id='/'>
      <div className='Home__container'>
        <Menu />
      </div>
    </div>
  )
}

export default Home;