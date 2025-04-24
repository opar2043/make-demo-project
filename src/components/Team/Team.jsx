import React, { useEffect, useState } from 'react'
import Title from '../Shared/Title'
import TeamCard from './TeamCard';

const Team = () => {
      const [team , setTeam] = useState([])
      useEffect(() => {
        fetch("/team.json")
          .then((res) => res.json())
          .then((data) => {
            setTeam(data);
          });
      }, []);
  return (
    <div>
        <Title text={'Team Member'}></Title>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3  justify-between md:ml-10'>
            {
              team && team.map(tm => <TeamCard key={tm.name} tm={tm}></TeamCard>)
            }
        </div>
    </div>
  )
}

export default Team