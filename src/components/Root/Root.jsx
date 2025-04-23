import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Company from '../Company/Company'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='w-11/12 mx-auto'>
        <Banner></Banner>
        <Company></Company>
        </div>
    </div>
  )
}

export default Root