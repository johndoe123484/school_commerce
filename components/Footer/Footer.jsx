import Link from 'next/link'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2024 Edusity. All rights reserved.</p>
        <div>
            <Link href={'/'}>Terms of Services</Link>
            <Link href={'/'}>Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer