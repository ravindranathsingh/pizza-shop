import React from 'react'
import "../styles/Menu.css"
import { MenuItems } from "../content/MenuItems"
import MenuList from '../components/MenuList';

export function Menu() {
  return (
    <div className='menu'>
      <h1 className='menu-title'> Our Menu </h1>
      <div className='menu-list'>
        {MenuItems.map((menuItem, key) => {
          return (
            <div><MenuList key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/></div>
          );
        })} 
      </div>
    </div>
  )
}

export default Menu