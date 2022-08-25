import React from 'react'
import Soc3 from '../assets/Group.svg'
import Soc4 from '../assets/Layer 2.svg'
import Insta from '../assets/insta.svg'
import Twit from '../assets/twit.svg'
import Yout from '../assets/yout.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer--text'>
            <div className='company'>
                <h1>Company</h1>
                <p>About Us</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>
            <div className='support'>
                <h1>Support</h1>
                <p>Help Center</p>
                <p>Safety Center</p>
            </div>
            <div className='legal'>
                <h1>Legal</h1>
                <p>Cookies Policy</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Dispute Resolution</p>
            </div>
            <div className='install'>
                <h1>Install App</h1>
                <img src={Soc3} alt='soc'></img><br/>
                <img src={Soc4} alt='soc'></img>
            </div>
        </div>
        <div className='footer--end'>
            <div className='footer--cw'>
                <p>© 2021 LILIES, All rights reserved</p>
            </div>
            <div className='footer--socials'>
                <img src={Insta} alt='insta'></img>
                <img src={Twit} alt='twit'></img>
                <img src={Yout} alt='yout'></img>
            </div>
        </div>
    </div>
  )
}

export default Footer