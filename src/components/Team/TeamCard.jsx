import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaDribbble } from "react-icons/fa";
import { motion } from "motion/react";

const TeamCard = ({ tm }) => {
  const { name, role, details, image } = tm;
  return (
    <motion.div
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="mx-auto">
      <div className="w-full sm:w-[80%] lg:w-[85%] rounded-md relative group overflow-hidden">
        {/*  image  */}
        <img

          src={image}
          alt="animated_cards"
          className="w-full h-[250px] object-fill"
        />

        {/*  texts  */}
        <div
          className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden"
        >
          <h3 className="text-[0.8rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">
            {name}
          </h3>
          <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            {role}
          </p>

          {/*  socials icons  */}
          <div className="flex items-center gap-[20px] mt-[15px]">
            <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
              <ImFacebook2 className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
            </div>
            <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
              <FaXTwitter className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
            </div>
            <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
              <FaDribbble className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
