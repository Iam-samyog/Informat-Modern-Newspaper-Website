import React from 'react';

const LeftColumn = () => {
  return (
    <div className="w-1/3 p-4 secondary-font mt-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">TOP CATEGORIES</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-500 cursor-pointer">FOOD</li>
          <li className="hover:text-blue-500 cursor-pointer">TRAVEL</li>
          <li className="hover:text-blue-500 cursor-pointer">LEADERSHIP</li>
          <li className="hover:text-blue-500 cursor-pointer">100 BEST COMPANIES</li>
          <li className="hover:text-blue-500 cursor-pointer">GADGETS</li>
        </ul>
      </div>
      
     
    </div>
  );
};

export default LeftColumn;