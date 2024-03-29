'use client';
import React, { useRef } from 'react'
import Image from 'next/image'
import './Testimonials.css'
import nextArrow from '../../assets/next-icon.png'
import PreviousArrow from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slidePrevious = ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
        <Image className='previous-btn' onClick={slidePrevious} src={PreviousArrow} width={46} alt='previous arrow'></Image>
        <Image className='next-btn' onClick={slideForward} src={nextArrow} width={46} alt='next arrow'></Image>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <Image className='user-img' src={user1} width={60} height={60} alt='user'></Image>
                            <div>
                                <h4>Emily Wiliams</h4>
                                <h5>Edusity, USA</h5>
                            </div>
                        </div>
                        <p className="user-testimonial">
                        Within its hallowed halls, I've found not just a community, but a familial embrace that uplifts and empowers every step of my scholarly pursuit. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <Image className='user-img' src={user2} width={60} alt='user'></Image>
                            <div>
                                <h4>James Johnson</h4>
                                <h5>Edusity, USA</h5>
                            </div>
                        </div>
                        <p className="user-testimonial">
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <Image className='user-img' src={user3} width={60} alt='user'></Image>
                            <div>
                                <h4>Mary Smith</h4>
                                <h5>Edusity, USA</h5>
                            </div>
                        </div>
                        <p className="user-testimonial">
                        They're not just state-of-the-art; they're the very embodiment of modernity, seamlessly blending technology with academia to create an immersive learning experience.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <Image className='user-img' src={user4} width={60} alt='user'></Image>
                            <div>
                                <h4>Thomas Graham</h4>
                                <h5>Edusity, USA</h5>
                            </div>
                        </div>
                        <p className="user-testimonial">
                        Enrolling in Edusity for my degree ranks among the most transformative choices I've ever made. It's akin to stepping into an oasis of learning, where every facet of my educational journey is nurtured with unparalleled care and innovation.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials