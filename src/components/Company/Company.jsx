import React from 'react'
import Title from '../Shared/Title'
import img from '../../assets/figitalwork.jpg'

const Company = () => {
  return (
    <div id='company'>
        <Title text={'Our Company'}></Title>

        <div className='flex flex-col md:flex-row gap-5 my-5'>
            <div className='w-full'>
              <img src={img} alt="" className='w-full' />
            </div>
            <div className='grid grid-cols-1 gap-3 my-6'>
            <p>At IT Maison, we are a team of digital enthusiasts dedicated to delivering top-notch IT and marketing solutions. Our approach is rooted in innovation, creativity, and strategy to ensure our clients receive impactful results.</p>

            <div>
                <address>------
                At IT Maison, we are a team of digital enthusiasts dedicated to delivering top-notch IT and marketing solutions. Our approach is rooted in innovation, creativity, and strategy to ensure our clients receive impactful results------
                </address>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Company