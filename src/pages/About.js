import React from 'react'
import "../styles/About.css"
import MultiplePizzas from "../assets/MultiplePizzas.jpg"

export function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Ravi's Pizzeria, where passion meets perfection in every slice! Founded by the visionary Ravi, our pizza shop is a culmination of years of love for authentic flavors and a dedication to crafting the perfect pizza experience. Ravi's journey began with a simple dream: to bring the warmth and joy of freshly baked pizzas to our community. What started as a small endeavor has now blossomed into a haven for pizza enthusiasts, where the aroma of handcrafted dough, premium ingredients, and carefully selected toppings waft through the air.
        </p>
        <p>
          At Ravi's Pizzeria, we take pride in using only the finest, locally sourced ingredients to create mouthwatering masterpieces that cater to diverse palates. Our commitment to quality extends beyond the toppings, as we meticulously prepare our signature sauce and hand-stretch our dough to achieve that perfect balance of crispy and chewy in every bite. Whether you're a traditional Margherita lover or an adventurous fan of unique combinations, Ravi's offers a menu that caters to all tastes and preferences.
        </p>
      </div>
    </div>
  );
}

export default About