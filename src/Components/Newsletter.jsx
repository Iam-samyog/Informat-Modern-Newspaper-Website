import React from 'react';

const Newsletter = () => {
  return (
    <>
      <div className="bg-gray-200 min-h-[300px] p-4 sm:p-6 md:p-10 md:py-15 secondary-font border border-gray-200 shadow-sm">
        <div className="flex max-w-[1350px] mx-auto flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left Column - Image */}
          <div className="flex-shrink-0 w-full max-w-[200px] md:max-w-[250px] mx-auto md:mx-0">
            <div className="w-full h-auto flex items-center justify-center">
              <div className="hidden md:block md:w-full md:h-auto overflow-hidden">
                <img 
                  src="/img/rubric icon.png" 
                  alt="Newsletter" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="flex-1 w-full secondary-font">
            <h2 className="w-full max-w-[350px] primary-font text-xl mt-4 md:mt-[50px] md:text-2xl font-normal text-gray-900 mb-2">
              Subscribe to INFORMAT Email Briefings
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Sign up for our daily newsletter and get the best of The INFORMAT in your in-box.
            </p>
            
            {/* Email Input */}
            <div className="w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full max-w-[500px] px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-purple-700 focus:border-b-2"
              />

              <button className="mt-3 flex gap-3 items-center text-purple-800 hover:text-purple-500 px-4 py-1 text-sm font-normal transition-colors">
                <img src="/img/icon (3).png" alt="" /> SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
