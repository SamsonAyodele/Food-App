import React from 'react'
import Logo from '../assets/lillieslogo.svg'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <div className='navigation'>
            <img src={Logo} alt='logo'></img>
            <h1>Lillies</h1>
        </div>
    </div>
  )
}

export default LandingPage