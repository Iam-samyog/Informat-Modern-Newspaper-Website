import React from 'react';

const RightColumn = () => {
  return (
    <div className="w-1/4 p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">EXPLORE</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-500 cursor-pointer">POLITICS</li>
          <li className="hover:text-blue-500 cursor-pointer">BUSINESS</li>
          <li className="hover:text-blue-500 cursor-pointer">TECHNOLOGY</li>
          <li className="hover:text-blue-500 cursor-pointer">SCIENCE</li>
          <li className="hover:text-blue-500 cursor-pointer">HEALTH</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">TRENDING NOW</h2>
        <div className="mb-4">
          <span className="text-sm text-gray-500">TECH</span>
          <span className="text-sm text-gray-500 ml-2">Posted July 11, 2017</span>
          <h3 className="text-lg font-semibold mt-1 hover:text-blue-500 cursor-pointer">
            Which Flavor of Data Professional Are You?
          </h3>
          <p className="text-gray-700 mt-1">
            As software engineers, developers or architects, it is pivotal to stay current and relevant within the technologies and the domains we work...
          </p>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500">Autor Arthur Block</span>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="text-sm text-gray-500">ENTERTAINMENT</span>
          <span className="text-sm text-gray-500 ml-2">Posted July 27, 2014</span>
          <h3 className="text-lg font-semibold mt-1 hover:text-blue-500 cursor-pointer">
            Netflix Killer?
          </h3>
          <p className="text-gray-700 mt-1">
            Helped by a low $5 price and a free subscription offer, Apple TV+ could attract as many as 10 million users within its first year, according to an analyst...
          </p>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500">Autor Justin Hawkins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;