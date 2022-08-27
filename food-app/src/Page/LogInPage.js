import React from 'react'
import Image from '../assets/logImg.svg'
import Form from '../Components/Form'

const logInPage = () => {
  return (
    <div className='login'>
      <div className='login--img'>
        <img src={Image} alt='login'></img>
      </div>
        <div className='logform'>
          <Form />
        </div>
    </div>
  )
}

export default logInPage