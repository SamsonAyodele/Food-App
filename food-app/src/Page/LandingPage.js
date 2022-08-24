import React from 'react'
import Logo from '../assets/lillieslogo.svg'
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className='landingPage'>
        <div className='navigation'>
            <div className='navigation--left'>
                <div className='header--image'>
                    <img src={Logo} alt='logo'></img>
                </div>
                <div className='header--text'>
                    <Link to={'/'}><h1>Lillies</h1></Link>
                </div>
            </div>
            <div className='navigation--right'>
                <Link to={'/'}><Nav text={'Home'} /></Link>
                <Link to={'/login'}><Nav text={'LogIn'} /></Link>
                <Link to={'/signup'}> <button>SignUp</button></Link>
            </div>
        </div>

        <div className='heading'>
            <div>
                <h1>Order food anytime, anywhere</h1>
                <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
                <span>
                    
                </span>
            </div>
        </div>
    </div>
  )
}

export default LandingPage