import React from 'react'
import { useState } from 'react'

const Update = () => {
  const [inputs, setInputs] = useState({})
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`We got your mail`)
  }

  return (
    <div className='update'>
        <div className='update--text'>
            <h1>Get notified when we update!</h1>
            <p>Get notified when we add new items to our specials <br /> menu, update our price list of have promos!</p>
        </div>
        <div className='update--form'>
          <form onSubmit={handleSubmit}>
            <input type='text' name='name' value= {inputs.name } onChange= {handleChange} className='mail' placeholder='gregphillips@gmail.com'></input>
            <button type='submit' className='notify'>Get notified</button>
          </form>
        </div>
    </div>
  )
}

export default Update