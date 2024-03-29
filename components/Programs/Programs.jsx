import React from 'react'
import Image from 'next/image'
import './Programs.css'
import program1_logo from '../../assets/program-1.png'
import program2_logo from '../../assets/program-2.png'
import program3_logo from '../../assets/program-3.png'
import caption1_logo from '../../assets/program-icon-1.png'
import caption2_logo from '../../assets/program-icon-1.png'
import caption3_logo from '../../assets/program-icon-1.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <Image className='program-img' src={program1_logo} width={340} alt='program'></Image>
            <div className="caption">
                <Image className='caption-img' src={caption1_logo} width={100} alt='caption'></Image>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <Image className='program-img' src={program2_logo} width={340} alt='program'></Image>
            <div className="caption">
                <Image className='caption-img' src={caption2_logo} width={100} alt='caption'></Image>
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <Image className='program-img' src={program3_logo} width={340} alt='program'></Image>
            <div className="caption">
                <Image className='caption-img' src={caption3_logo} width={100} alt='caption'></Image>
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs