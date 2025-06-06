import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Company from "../Company/Company";
import Service from "../Service/Service";
import Project from "../Project/Project";
import Client from "../Client/Client";
import Team from "../Team/Team";
import Review from "../Review/Review";
import Why from "../Why/Why";
import About from "../About/About";
import { FaWhatsapp } from "react-icons/fa6";
import Footer from "../Footer/Footer";
import Order from "../Order/Order";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <Banner></Banner>
        <Company></Company>
        <About></About>
        <Service></Service>
        <Project></Project>
        <Client></Client>
        <Team></Team>
        <Review></Review>
        {/* <Order></Order> */}
        <Why></Why>
      </div>

      <div className="fixed bottom-5 right-7 shadow-2xl ">
        <button className="btn text-xs  hover:bg-green-500 hover:text-white hover:border-0 text-green-600 rounded-full border border-green-500 ">
          Massege Us!
          <div className="text-3xl ">
            <a href=" https://wa.me/qr/7FADY5JLDLSMB1">
              <FaWhatsapp></FaWhatsapp>
            </a>
          </div>
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
