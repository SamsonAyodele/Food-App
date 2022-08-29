import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

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
    }else {
      toast.error('wrong email or password')
    }
  }

  return (
        <div className='form'>
          <ToastContainer />
            <h1>WELCOME BACK!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' name='email' value={inputs.email || ""} placeholder='enter your email'
                    onChange={handleChange} 
                    />
                </label><br/>
                <label>
                    <input type='password' name='password' value={inputs.password || ""} placeholder='enter your password'
                    onChange={handleChange} 
                    />
                </label> <br/>
                <button type='submit' className='submit--form'>LOG IN </button>
            </form>

        </div>
  )
}

export default Form