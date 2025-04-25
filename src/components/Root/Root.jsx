import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Company from '../Company/Company'
import Service from '../Service/Service'
import Project from '../Project/Project'
import Client from '../Client/Client'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'
import Review from '../Review/Review'
import Why from '../Why/Why'


const Root = () => {

  return (
    <div>
        <Navbar></Navbar>
        <div className=''>
        <Banner></Banner>
        <Company></Company>
        <Service></Service>
        <Project></Project>
        <Client></Client>
        <Team></Team>
        <Review></Review>
        <Contact></Contact>
        <Why></Why>
        </div>
    </div>
  )
}

export default Root