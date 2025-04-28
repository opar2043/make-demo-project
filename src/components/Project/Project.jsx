import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";
import ProCard from "./proCard";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const Project = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <div id="project" className="w-11/12 mx-auto">
      <Title text={"Our Client Project"}></Title>
        <div className="flex justify-between">
          <div></div>
          <div>
            <NavLink to={'/show'}>
            <button className="btn md:btn-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md">Show More</button>
            </NavLink>
          </div>
        </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-1">

        {
          projects && projects.slice(0,4).map(pro => <ProCard key={pro.name} pro={pro}></ProCard>)
        }
      </div>
    </div>
  );
};

export default Project;
