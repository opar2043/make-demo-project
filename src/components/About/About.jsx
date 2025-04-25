import React from 'react';
import Title from '../Shared/Title';
import img from '../../assets/sponsors/digital.webp'

const About = () => {
  return (
    <div className="py-10 w-11/12 mx-auto">
      <Title text={'About Us!'} />
      
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
        
        <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">The Story Behind IT Maison</h2>
          <div className='my-6'>
            <img src={img} alt="" className='h-[250px] w-full rounded' />
          </div>
          <p className="mt-4 text-gray-600">
            Our story began with a vision to redefine digital marketing. From small beginnings, we’ve grown into a leading agency known for our dedication to results, customer satisfaction, and a team of experts who are committed to driving success.
          </p>
          <p className="mt-4 text-gray-600">
            From humble beginnings to becoming a trusted digital marketing agency, IT Maison has always been driven by innovation and a commitment to excellence. Our history is a story of continuous growth, fueled by passion and the drive to deliver results.
          </p>

        </div>
        
        {/* FAQ Section */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 pl-4"> Questions About Us!</h2>
          
          <div className="mt-6 space-y-4">
            <div className="collapse collapse-arrow bg-base-200 rounded-lg shadow-md">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium text-gray-700">
                What is the mission of IT Maison?
              </div>
              <div className="collapse-content text-gray-600">
                <p>Our mission is to provide exceptional digital marketing services that help businesses grow by leveraging the power of innovative strategies and cutting-edge technology.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow bg-base-200 rounded-lg shadow-md">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-gray-700">
                How do we work with clients?
              </div>
              <div className="collapse-content text-gray-600">
                <p>We begin by understanding your business goals and then craft tailored strategies that are aligned with your vision. We work closely with you to ensure your goals are met with optimal solutions.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow bg-base-200 rounded-lg shadow-md">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-gray-700">
                What makes IT Maison unique?
              </div>
              <div className="collapse-content text-gray-600">
                <p>Our uniqueness lies in our commitment to delivering measurable results through innovation, data-driven strategies, and a team of experts who are passionate about driving success for our clients.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow bg-base-200 rounded-lg shadow-md">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-gray-700">
                What industries do we serve?
              </div>
              <div className="collapse-content text-gray-600">
                <p>We serve a wide range of industries, including e-commerce, education, healthcare, real estate, and technology. Our strategies are tailored to fit the unique needs of each industry we serve.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
