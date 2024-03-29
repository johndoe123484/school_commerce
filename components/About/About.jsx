import React from 'react'
import './About.css'
import Image from 'next/image'
import about_logo from '../../assets/about.png'
import play_logo from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-i-container">
                <Image className='about-img' src={about_logo} width={440} alt='graduates'></Image>
                <Image className='play-img' src={play_logo} width={60} alt='play video' onClick={()=>{
                  setPlayState(true)
                }}></Image>
        </div>
        <div className="about-text">
            <h4>ABOUT UNIVERSITY</h4>
            <h3>Nurturing Tomorrow's Leaders Today</h3>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default About