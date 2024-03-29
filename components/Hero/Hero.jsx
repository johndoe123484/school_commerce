import React from 'react'
import './Hero.css'
import Image from 'next/image'
import arrowDark_logo from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='hero-btn'>
                <span>Explore more</span>
                <Image src={arrowDark_logo} width={16} alt='arrow pointing to the right'></Image>
            </button>
        </div>
    </div>
  )
}

export default Hero