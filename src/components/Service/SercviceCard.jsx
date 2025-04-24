import React from "react";

const SercviceCard = ({srvc}) => {
    const {category , details , image , sector} = srvc;
  return (
    <div>
      <a href="#" className="group relative block bg-black">
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

          <div className="mt-12 sm:mt-48 lg:mt-28">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {details}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SercviceCard;
