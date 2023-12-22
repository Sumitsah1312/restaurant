import React from 'react'
import Aboutimage from '../assets/images/about-img'
const About = () => {
  return (
    <div>
      <section className="about" id='about'>
        <h1 className='heading'><span>About</span> US</h1>
        <div className="row">
            <div className="image">
                <img src={Aboutimage} alt="" />
            </div>
            <div className="content">
                <h3>What make us Special</h3>
                <p>
                we are passionate about creating memorable dining experiences that tantalize your taste buds and leave you feeling satisfied and content. We believe that food is more than just sustenance; it's an art form that brings people together and fosters a sense of community.
                </p>
                <p>
                Our culinary team, led by our award-winning chef, is dedicated to crafting dishes that showcase fresh, seasonal ingredients and innovative culinary techniques. We source our ingredients from local farmers and purveyors whenever possible, ensuring that our food is not only delicious but also sustainable.
                </p>
                <a href="#blogs"className='btn'>Learn More</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
