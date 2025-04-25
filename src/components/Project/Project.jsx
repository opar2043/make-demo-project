import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
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
    <div className="">
      <Title text={"Our Client Project"}></Title>

      <div className="mt-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects &&
            projects.map((pro) => (
              <SwiperSlide key={pro.id} pro={pro} className="mb-11">
                <div className="w-full md:min-w-[60%] md:max-w-[65%] relative bg-white boxShadow rounded-xl mb-9 border shadow-md">
                  <img
                    src={pro.image}
                    alt="image"
                    className="w-full h-[180px] object-cover rounded-t-xl"
                  />

                  <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
                    <IoIosNotificationsOutline className="text-white text-[1.4rem]" />
                  </div>

                  <div className="p-4">
                    <h1 className="text-[1.3rem] font-bold leading-[34px] bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      {pro.name}
                    </h1>
                    <div className="flex justify-between items-center">
                      <span className="text-[0.9rem] text-gray-400">
                        Show Full Deatisl about this project
                      </span>
                      <div className="float-right  hover:bg-gray-100 cursor-pointer mr-2  rounded-full group">
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_3").showModal()
                          }
                        >
                          <BsArrowRight className="text-[2rem] text-blue-500 font-extrabold" />
                          <dialog id="my_modal_3" className="modal">
                            <div className="modal-box max-w-2xl bg-white rounded-2xl shadow-2xl p-6 border border-blue-100">
                              <form method="dialog">
                                <button className="btn btn-sm text-xl font-extrabold btn-circle btn-ghost absolute right-4 top-4 text-blue-500 hover:bg-blue-100 transition">
                                  ✕
                                </button>
                              </form>

                              <div className="card bg-base-100  shadow mt-6">
                                <figure>
                                  <img
                                    src={pro.image}
                                    className="h-[200]px"
                                    alt="Shoes"
                                  />
                                </figure>
                                <div className="card-body flex flex-col gap-3">
                                  <div className="flex justify-between">
                                    <h2 className="card-title text-xl font-bold ">{pro.name}</h2>
                                    <div className="badge badge-secondary">
                                      {pro.category}
                                    </div>
                                  </div>

                                  <p className="text-left">{pro.details}</p>
                                  <div className="card-actions justify-center">
                                    <span className="badge badge-info  text-white">Key Features</span>
                                    {pro.features.map((i) => (
                                      <div className="badge badge-outline">
                                        {i}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </dialog>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
