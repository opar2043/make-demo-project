// import React from "react";
// import Title from "../Shared/Title";
// import { GrUserExpert } from "react-icons/gr";

// const Why = () => {
//   return (
//     <div>
//       <Title text={"Why Choose Us!"}></Title>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

//         <div>
//           <button>
//             <GrUserExpert />
//           </button>
//           <p>Expert Team</p>
//           <p>
//             Our skilled professionals bring experience, creativity, and
//             strategic thinking to every project.
//           </p>
//         </div>

//         <div>
//           <button>
//             <GrUserExpert />
//           </button>
//           <p>Cost-Effective Solutions</p>
//           <p>
//           We offer flexible and scalable services tailored to your budget and business goals.
//           </p>
//         </div>

//         <div>
//           <button>
//             <GrUserExpert />
//           </button>
//           <p>24/7 Support</p>
//           <p>
//           Day or night, our dedicated support team is always ready to assist you.
//           </p>
//         </div>

//         <div>
//           <button>
//             <GrUserExpert />
//           </button>
//           <p>100% Client Satisfaction</p>
//           <p>
//           Your satisfaction is our priority — we’re committed to delivering results you’ll love.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Why;

import React from "react";
import Title from "../Shared/Title";
import { GrUserExpert, GrMoney, GrSupport, GrAchievement } from "react-icons/gr";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const Why = () => {
  const features = [
    {
      icon: <GrUserExpert size={40} />,
      title: "Expert Team",
      description:
        "Our skilled professionals bring experience, creativity, and strategic thinking to every project.",
    },
    {
      icon: <GrMoney size={40} />,
      title: "Cost-Effective Solutions",
      description:
        "We offer flexible and scalable services tailored to your budget and business goals.",
    },
    {
      icon: <MdOutlineSupportAgent size={40} />,
      title: "24/7 Support",
      description:
        "Day or night, our dedicated support team is always ready to assist you.",
    },
    {
      icon: <FaRegSmileBeam size={40} />,
      title: "100% Client Satisfaction",
      description:
        "Your satisfaction is our priority — we’re committed to delivering results you’ll love.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10">
      <Title text={"Why Choose Us!"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border"
          >
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-full mb-4 text-white">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
