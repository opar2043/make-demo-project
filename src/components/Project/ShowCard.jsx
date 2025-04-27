import React, { useEffect, useState } from "react";
import ProCard from "./proCard";
import { NavLink } from "react-router-dom";


const ShowCard = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <div className="my-8 w-11/12 mx-auto">
     <div className="flex justify-between my-5 items-center">
      <div>
        <p className="text-lg font-bold">Our Full Project List --</p>
      </div>
      <NavLink to={'/'}>
        <button className="btn bg-gradient-to-r from-red-500 to-red-700 text-white">Back to Home</button>
      </NavLink>
     </div>
    <div className="grid gap-3 grid-cols-1 md:grid-cols-4 ">
      

      
      {projects &&
        projects
          
          .map((pro) => <ProCard key={pro.name} pro={pro}></ProCard>)}
    </div>

    </div>
  );
};

export default ShowCard;
