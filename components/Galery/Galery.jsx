import React from 'react'
import Image from 'next/image'
import './Galery.css'
import gallery1_logo from '../../assets/gallery-1.png'
import gallery2_logo from '../../assets/gallery-2.png'
import gallery3_logo from '../../assets/gallery-3.png'
import gallery4_logo from '../../assets/gallery-4.png'
import arrowWhite_logo from '../../assets/white-arrow.png'

const Galery = () => {
  return (
    <div className='gallery-container'>
        <div className='gallery'>
            <div className="photo">
                <Image className='gallery-img' src={gallery1_logo} width={250} alt='graduate'></Image>
            </div>
            <div className="photo">
                <Image className='gallery-img' src={gallery2_logo} width={250} alt='graduate'></Image>
            </div>
            <div className="photo">
                <Image className='gallery-img' src={gallery3_logo} width={250} alt='graduate'></Image>
            </div>
            <div className="photo">
                <Image className='gallery-img' src={gallery4_logo} width={250} alt='graduate'></Image>
            </div>
        </div>
        <button className='gallery-btn'>
            <span>See more here</span>
            <Image src={arrowWhite_logo} width={16} alt='arrow pointing to the right'></Image>
        </button>
    </div>
  )
}

export default Galery