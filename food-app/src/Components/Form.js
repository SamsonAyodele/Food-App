import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Form = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = JSON.parse(sessionStorage.getItem('user'))
    if(inputs?.email === user?.email && inputs?.password === user?.password) {
      toast.success(`you have successfully logged in`)
      setInterval(() =>{
        window.location='/dashboard'
      }, 2000) 
    }else {
      toast.error('wrong email or password')
    }
  }

  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }

  return (
        <div className='form'>
          <ToastContainer />
            <h1>WELCOME BACK!</h1>
            <form onSubmit={handleSubmit}>
                    <input type='text' name='email' value={inputs.email || ""} placeholder='enter your email'
                    onChange={handleChange} 
                    />
                <br/>
                    <input type={ show ? 'text' : 'password'} name='password' value={inputs.password || ""} placeholder='enter your password'
                    onChange={handleChange} 
                    />
                    <span onClick={handleClick} className='show--field'>{ show ? 'Hide' : 'Show'}</span>
                 <br/>
                <button type='submit' className='submit--form'>LOG IN </button>
            </form>
            <div className='form--footer'>
              <Link to={'/signup'}><p>Create an account</p></Link>

              <Link to={'/Home'}><p>forgot password</p></Link>
            </div>
        </div>
  )
}

export default Form