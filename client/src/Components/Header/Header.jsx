import React, {useEffect,useState} from 'react'
import './Header.scss'




function Header() {

    const [grettig, setgrettig] = useState('Bom-dia')
    useEffect(() => {
        const d = new Date();
        let hour = d.getHours();
        verifyGreetings(hour);
    })

    const verifyGreetings=(hour)=>{
        if(hour> 7 && hour<12){
            setgrettig("Bom-dia")
        }
        if(hour>11 && hour<20){
            setgrettig("Boa-tarde")
        }
        if(hour>20 || hour<6){
            setgrettig("Boa-noite")
        }
    }

  return (
    <div className='Header'>
        <div className='Header__left'>
        <h2>{grettig}</h2>
        </div>
        <div className='Header__right'>
        <p>Inscrever-se</p>
        <button>Entrar</button>
        </div>
        
    </div>
  )
}

export default Header