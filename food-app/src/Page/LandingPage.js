import React from 'react'
import Logo from '../assets/lillieslogo.svg'
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom'
import Soc1 from '../assets/Group.svg'
import Soc2 from '../assets/Layer 2.svg'
import Img1 from '../assets/head.svg'
import Menu from '../Components/Menu'



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
            <div className='heading--text'>
                <h1>Order food anytime, <br />anywhere</h1>
                <p>Browse from our list of specials to place your order and have food<br/> delivered to you in no time. Affordable, tasty and fast!</p>
                <span>
                    <img src={Soc1} alt='soc'></img>
                    <img src={Soc2} alt='soc'></img>
                </span>
            </div>
            <div className='heading--image'>
                <img src={Img1} alt='img'></img>
            </div>
        </div>
        <Menu />
    </div>
  )
}

export default LandingPage