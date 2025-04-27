import React, { useEffect, useState } from "react";
import bg1 from "../../assets/sponsors/review.jpeg";
import Title from "../Shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { motion } from "motion/react";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div id="review" className="mt-10 w-11/12 mx-auto my-6 md:my-14">
      <Title text={"Client's Review"} />

      <motion.div className="flex flex-col md:flex-row gap-8 mt-6 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src={bg1}
            alt="Client Review Banner"
            className="rounded w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right Swiper Reviews */}
        <div
        className="md:w-1/2  w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {review &&
              review.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="  shadow-md rounded-xl p-6 text-center md:py-6"
                >
                  <h3 className="mt-3 text-lg font-semibold text-gray-800">
                    <span className="px-2 py-1 text-xs bg-slate-800 rounded-full text-white mr-2">
                      {idx + 1}
                    </span>
                    {item.name}
                  </h3>
                  <div className="w-40 mx-auto mt-2">
                    <div className="w-40 mx-auto">
                      <Rating
                        value={item.rating}
                        edit={false}
                        size={2}
                        activeColor="#2563eb"
                      />
                    </div>
                  </div>
                  <p className="my-3  text-sm">-- {item.review} --</p>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default Review;
