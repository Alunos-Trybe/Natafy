import React from 'react'
import './Home.scss'
import Menu from '../../Components/Menu/Menu'
import Header from '../../Components/Header/Header';

function Home() {
  return (
    <div className='Home' id='/'>
      <div className='Home__container'>
        <Menu />
        <div className='Home__container-main'>
          <Header/>
        </div>
      </div>
    </div>
  )
}

export default Home;