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
    <div>
      <Title text={"Our Client Project"}></Title>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={-50}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects &&
            projects.map((pro) => (
              <SwiperSlide key={pro.id} pro={pro}  className="mb-11 ">
                <div className="w-full md:min-w-[60%] md:max-w-[75%] relative bg-white boxShadow rounded-xl mb-9 border">
                  <img
                    src={pro.image}
                    alt="image"
                    className="w-full h-[260px] object-cover rounded-t-xl"
                  />

                  <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
                    <IoIosNotificationsOutline className="text-white text-[1.4rem]" />
                  </div>

                  <div className="p-4">
                    <h1 className="text-[1.3rem] font-bold leading-[34px]">
                      {pro.name}
                    </h1>
                    <div className="flex justify-between items-center">
                    <span className="text-[0.9rem] text-gray-400">
                      Show Full Deatisl about this project
                    </span>
                    <div className="float-right  hover:bg-gray-100 cursor-pointer mr-2  rounded-full group">
                    <BsArrowRight className="text-[2rem] text-blue-700 font-extrabold" />
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
