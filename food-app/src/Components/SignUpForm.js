import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpForm = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(inputs)
  }

  return (
    <div className='signform'>
        <h1>Welcome to Lilies!</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={inputs.name || ""} placeholder='Your First Name'
            onChange={handleChange}
            />
            <input type='text' name='email' value={inputs.email || ""} placeholder='Your email address'
            onChange={handleChange}
            />
            <input type='text' name='password' value={inputs.password || ""} placeholder='Your password'
            onChange={handleChange}
            />
            <button type='submit'>SIGN UP</button>
        </form>
        <Link to={'/login'}><p>Already have an account. LOGIN</p></Link>
    </div>
  )
}

export default SignUpForm