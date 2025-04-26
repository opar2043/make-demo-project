import React from "react";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="md:mt-16 mt-8">
      <footer className="text-gray-950 bg-gradient-to-r from-cyan-400 to-blue-500 lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-8 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="font-semibold tracking-wide  uppercase">
                  {" "}
                  Call us{" "}
                </span>

                <a
                  href="#"
                  className="block pt-1 text-xl md:text-2xl font-medium  hover:opacity-75 "
                >
                  +880 1901-850347
                </a>
              </p>

              <ul className="mt-6 space-y-1 text-sm  ">
                <li>Monday to Friday: 10am - 6pm</li>
                <li>Weekend: 10am - 3pm</li>
              </ul>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a href="www.facebook.com">
                    <FaFacebook></FaFacebook>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@ITMaison">
                    <FaYoutube></FaYoutube>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@itmaison">
                    <FaTiktok></FaTiktok>
                  </a>
                </li>
                <li>
                  <a href="itmaison.info@gmail.com">
                    <GrMail></GrMail>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium ">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Digital Marketing{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Video Editing{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      SEO{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Web Development{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium ">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Meet the Team{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-950 pt-4">
            <div className="text-center">
              <p className="mt-8 text-xs  sm:mt-0">
                &copy; 2022. Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
