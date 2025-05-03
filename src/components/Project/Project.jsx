import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";
import ProCard from "./proCard";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import useProject from "../hook/useProject";

const Project = () => {
  const [projects] = useProject()

  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((item) => item._id === selectedId);

  console.log(selectedProject);

  function handleIdClick(id) {
    setSelectedId(id);
    document.getElementById("my_modal_3").showModal();
  }


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
          projects && projects.map(pro => <ProCard key={pro.name} pro={pro} selectedProject={selectedProject}  handleId={handleIdClick}></ProCard>)
        }
      </div>

      {selectedProject && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box max-w-2xl bg-white rounded-2xl shadow-2xl p-6 border border-blue-100">
            <form method="dialog">
              <button className="btn btn-sm text-xl font-extrabold btn-circle btn-ghost absolute right-4 top-4 text-blue-500 hover:bg-blue-100 transition">
                ✕
              </button>
            </form>
            <div className="card bg-base-100 shadow mt-6">
              <figure>
                <img
                  src={selectedProject.image}
                  className="h-[200px] w-full object-cover"
                  alt="Project"
                />
              </figure>
              <div className="card-body flex flex-col gap-3">
                <div className="flex justify-between">
                  <h2 className="card-title text-xl font-bold">{selectedProject.name}</h2>
                  <div className="badge badge-secondary">{selectedProject.category}</div>
                </div>
                <p className="text-left">{selectedProject.details}</p>
                <div className="card-actions flex-wrap justify-center gap-2">
                  <span className="badge badge-info text-white">Key Features</span>
                  {Array.isArray(selectedProject.features) ? (
                    selectedProject.features.map((i, index) => (
                      <div key={index} className="badge badge-outline">{i}</div>
                    ))
                  ) : (
                    <div className="badge badge-outline">{selectedProject.features}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Project;



