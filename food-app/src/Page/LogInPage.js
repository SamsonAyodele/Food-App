import React from 'react'
import Image from '../assets/logImg.svg'
import Form from '../Components/Form'

const logInPage = () => {
  return (
    <div className='login'>
      <div className='login--img'>
        <img src={Image} alt='login'></img>
      </div>
      <div>
        <div className='logform'>
          <Form />
        </div>
        <div form--footer>
          <div>
            <p>Create an account</p>
          </div>
          <div>
            <p>Forgot Password</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default logInPage