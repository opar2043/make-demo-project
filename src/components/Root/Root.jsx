import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Company from '../Company/Company'
import Service from '../Service/Service'
import Project from '../Project/Project'


const Root = () => {

  return (
    <div>
        <Navbar></Navbar>
        <div className='w-11/12 mx-auto'>
        <Banner></Banner>
        <Company></Company>
        <Service></Service>
        <Project></Project>
        </div>
    </div>
  )
}

export default Root