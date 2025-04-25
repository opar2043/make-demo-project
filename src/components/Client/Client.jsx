import React, { useEffect, useState } from 'react'
import Title from '../Shared/Title'
import ClientCard from './ClientCard';

const Client = () => {
    const [client , setClient] = useState([])
      useEffect(() => {
        fetch("/client.json")
          .then((res) => res.json())
          .then((data) => {
            setClient(data);
          });
      }, []);
  return (
    <div className='mx-auto my-6 w-11/12'>
        <Title text={'Our Client'}></Title>
        <div className='grid grid-cols-2 md:grid-cols-5 justify-end w-10/12 mx-auto'>
            {
                client && client.map((cli , idx) => <ClientCard key={idx} cli={cli}></ClientCard>)
            }
        </div>
    </div>
  )
}

export default Client