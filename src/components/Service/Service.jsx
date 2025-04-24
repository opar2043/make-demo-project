import React, { useEffect, useState } from 'react'
import Title from '../Shared/Title';
import SercviceCard from './SercviceCard';

const Service = () => {
    const [services , setService] = useState([]);
    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    },[])
  return (
    <div className='my-8 md:my-16'>
        <Title text={'Our Service'}></Title>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
              services && services.map((srvc, idx )=> <SercviceCard key={idx} srvc={srvc}></SercviceCard>) 
            }
        </div>
    </div>
  )
}

export default Service