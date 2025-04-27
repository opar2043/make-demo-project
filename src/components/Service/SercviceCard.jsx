import React from "react";
import { motion } from "motion/react";

const SercviceCard = ({srvc}) => {
    const {category , details , image , sector} = srvc;
  return (
    <motion.div 
    initial={{x: 0, opacity: 0}}
    whileInView={{x: 0 , opacity: 1}}
    transition={{ duration: 0.6 , delay: 0.3 , ease: "easeInOut"}}
    viewport={{once: true}}
    >
      <p className="group relative block bg-black w-11/12 h-[230px]">
        <img
          alt=""
          src={image}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-md text-white  uppercase">
            {category}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

          <div className="mt-8  md:mt-16">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {details}
              </p>
            </div>
          </div>
        </div>
      </p>
    </motion.div>
  );
};

export default SercviceCard;
