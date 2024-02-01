import React from 'react'

export function MenuList({image, name, price}) {
  return (
    <div className='menu-items'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>&#8377; {price}</p>
    </div>
  )
}

export default MenuList