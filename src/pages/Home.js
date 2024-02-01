import React from 'react'
import "../styles/Home.css";
import BannerImage from "../assets/pizzabanner.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='home-container'>
        <h1>Pizza Shop</h1>
        <p>"Slice into Perfection: Where Every Bite is a Flavor Explosion!"</p>
          <Link id='btn' to={"/menu"}>Order Now</Link>        
      </div>
    </div>
  );
}

export default Home