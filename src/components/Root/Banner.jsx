import React from "react";
import img from "../../assets/web2.jpeg";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center mt-6">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 gap-3 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-prose text-left"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              WE ARE DIGITAL{" "}

              <strong className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mr-1">
                MAR
              <Typewriter
                words={['KETING']}
                loop={true}
                cursor
                
                typeSpeed={220}
                deleteSpeed={200}
                delaySpeed={1000}
              />
                
              </strong>
              AGENCY
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed font-semibold">
              To empower individuals and businesses with smart, scalable and
              seamless IT solutions that drive innovation and efficiency.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="my-4"
          >
            <img src={img} alt="" className="rounded" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
