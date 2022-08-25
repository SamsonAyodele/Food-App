import React from 'react'

const Update = () => {
  return (
    <div className='update'>
        <div className='update--text'>
            <h1>Get notified when we update!</h1>
            <p>Get notified when we add new items to our specials <br /> menu, update our price list of have promos!</p>
        </div>
        <div className='update--form'>
            <input type='text' className='mail' placeholder='gregphillips@gmail.com'></input>
            <input type='text' className='notify' placeholder='Get notified'></input>
        </div>
    </div>
  )
}

export default Update