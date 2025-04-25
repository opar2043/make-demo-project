import React from "react";
import Title from "../Shared/Title";
import img from "../../assets/figitalwork.jpg";

const Company = () => {
  return (
    <div id="company " className="w-11/12 mx-auto">
      <Title text={"Our Company"}></Title>

      <div className="flex flex-col md:flex-row gap-5 my-5">
        <div className="w-full">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="grid grid-cols-1 gap-3  w-full">
          <p>
            IT Maison, the best digital marketing agency in Dhaka, Bangladesh,
            offers comprehensive and top-notch 360° digital marketing services.
            These include web design and development, professional search engine
            optimization (SEO), social media marketing (SMM), content
            development, Facebook and Google advertising, graphic and video
            editing, lead generation, back-office support, and more. As one of
            the best SEO agencies in Bangladesh, IT Maison is dedicated to
            enhancing your website’s online presence to drive real, measurable
            results. Recognized as the leading digital marketing company in
            Bangladesh, IT Maison provides complete 360° digital marketing
            solutions for small, medium, and large businesses. We are committed
            to empowering businesses and individuals by crafting customized
            digital strategies that align perfectly with their specific
            goals—driving success through smart, data-driven decisions.
          </p>

          <div>
            <address>
              ------ At IT Maison, we are a team of digital enthusiasts
              dedicated to delivering top-notch IT and marketing solutions. Our
              approach is rooted in innovation, creativity, and strategy to
              ensure our clients receive impactful results------
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
