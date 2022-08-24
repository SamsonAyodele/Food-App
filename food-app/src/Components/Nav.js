import React from 'react'


const Nav = ({text}) => {
  return (
    <div className='nav'>
        <ul>
           <li>{text}</li> 
        </ul>
    </div>
  )
}

export default Nav