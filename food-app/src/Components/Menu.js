import React from 'react'

const Menu = ({data}) => {
  return (
    <div className='menu'>
        <div className='menu--text'>
            <h1>Special Meals of the day!</h1>
            <p>Check our specials of the day and get discounts on all our meals<br/> and swift delivery to what ever location within Ilorin.</p>
        </div>
        <div className='menu--description'>
            <div className='menu--title1'>
                {
                    
                    data && data?.map((item, index) => (
                        <>
                        <div className='menudata'>
                            <img src={item?.menu} alt='menu'></img>
                            <h1>{item?.title}</h1>
                            <p>{ item?.description }</p>
                        </div>
                        </>
                    ))
                }    
            </div>
        </div>
    </div>
  )
}

export default Menu