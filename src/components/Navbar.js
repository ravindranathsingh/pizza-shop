import React, { useState } from 'react'
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [ openLinks, setOpenLinks ] = useState(false);
  const toggleNav = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
        <div className='left-side' id={openLinks ? "open" : "close"}>
          <img src={Logo} alt ="pizza logo"/>
          <div className='hiddenLinks'>
            <Link id="nav" to={"/"}> Home </Link>
            <Link id="nav" to={"/menu"}> Menu </Link>
            <Link id="nav" to={"/about"}> About </Link>
            <Link id="nav" to={"/contact"}> Contact </Link>
          </div>
        </div>
        <div className='right-side'>
          <Link id="nav" to={"/"}> Home </Link>
          <Link id="nav" to={"/menu"}> Menu </Link>
          <Link id="nav" to={"/about"}> About </Link>
          <Link id="nav" to={"/contact"}> Contact </Link>
          <button onClick={toggleNav}>
            <ReorderIcon />
          </button>
        </div>
    </div>
  );
}

export default Navbar