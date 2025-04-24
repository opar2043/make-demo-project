import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Company from '../Company/Company'
import Service from '../Service/Service'
import Project from '../Project/Project'
import Client from '../Client/Client'
import Team from '../Team/Team'


const Root = () => {

  return (
    <div>
        <Navbar></Navbar>
        <div className='w-11/12 mx-auto border'>
        <Banner></Banner>
        <Company></Company>
        <Service></Service>
        <Project></Project>
        <Client></Client>
        <Team></Team>
        </div>
    </div>
  )
}

export default Root