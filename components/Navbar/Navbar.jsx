'use client';
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <div className={`navbar ${sticky? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500} ><Image className='nav-img' src={logo} width={180} alt='logo'></Image></Link>
        <nav>
            <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-120} duration={500}>About us</Link></li>
                <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-380} duration={500}>Testimonials</Link></li>
                <button className='nav-btn'><Link to='contact' smooth={true} offset={-220} duration={500}>Contact us</Link></button>
            </ul>
            <Image onClick={toogleMenu} className='menu-img' src={menu_icon} width={30} alt='mobile menu'></Image>
        </nav>
    </div>
  )
}

export default Navbar