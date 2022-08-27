import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs)
  }

  return (
        <div className='form'>
            <h1>WELCOME BACK!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' name='email' value={inputs.email || ""} placeholder='enter your email'
                    onChange={handleChange} 
                    />
                </label><br/>
                <label>
                    <input type='text' name='password' value={inputs.password || ""} placeholder='enter your password'
                    onChange={handleChange} 
                    />
                </label> <br/>
                <button type='submit' className='submit--form'>LOG IN </button>
            </form>
        </div>
  )
}

export default Form