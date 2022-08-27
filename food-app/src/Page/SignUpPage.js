import React from 'react'
import SignUp from '../assets/logImg.svg'
import SignUpForm from '../Components/SignUpForm'

const SignUpPage = () => {
  return (
    <div className='signup'>
        <div className='signup--img'>
          <img src={SignUp} alt='signup'/>
        </div>
        <div className='signup--form'>
          <SignUpForm />
        </div>
    </div>
  )
}

export default SignUpPage