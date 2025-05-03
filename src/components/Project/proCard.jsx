import { IoIosNotificationsOutline } from "react-icons/io";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import useProject from "../hook/useProject";
import { useState } from "react";

const ProCard = ({ pro ,selectedProject, handleId }) => {
   

  return (
    <div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="card card-compact bg-base-100 rounded shadow-xl border border-blue-100"
      >
        <figure className="relative">
          <img
            src={pro.image}
            alt="Project"
            className="h-[150px] w-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
            <IoIosNotificationsOutline className="text-white text-[1.4rem]" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
            {pro.name}
          </h2>
          <div className="card-actions flex justify-between">
            <span className="text-sm text-gray-500">
              Show Full Details about this project
            </span>

            <button
              className=" text-blue-700 text-xl "
              onClick={() => handleId(pro._id)}
            >
              <BsArrowRight></BsArrowRight>
            </button>
          </div>
        </div>

        {/* Modal ============================================================= */}
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
                  src={pro.image}
                  className="h-[200px] w-full object-cover"
                  alt="project"
                />
              </figure>
              <div className="card-body flex flex-col gap-3">
                <div className="flex justify-between">
                  <h2 className="card-title text-xl font-bold">{pro.name}</h2>
                  <div className="badge badge-secondary">{pro.category}</div>
                </div>
                <p className="text-left">{pro.details}</p>
                <div className="card-actions flex-wrap justify-center gap-2">
                  <span className="badge badge-info text-white">
                    Key Features
                  </span>
                  {Array.isArray(pro.features) ? (
                    pro.features.map((i, index) => (
                      <div key={index} className="badge badge-outline">
                        {i}
                      </div>
                    ))
                  ) : (
                    <div className="badge badge-outline">{pro.features}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </dialog> 
      </motion.div>
    </div>
  );
};

export default ProCard;
