import React from 'react';

const LeftColumn = () => {
  return (
    <div className="w-1/4 bg-blue-100 p-4">
      <div className="bg-blue-500 text-white text-6xl font-bold p-8 mb-4 flex items-center justify-center">
        T
      </div>
      <div className="text-sm uppercase font-semibold mb-2">IN THIS RUBRIC:</div>
      <ul className="space-y-2 text-sm">
        <li className="text-blue-600 font-medium">TECHNOLOGY</li>
        <li>MACHINE LEARNING</li>
        <li>DATA SCIENCE</li>
        <li>WEB & DESIGN</li>
        <li>CAREERS</li>
      </ul>
    </div>
  );
};

export default LeftColumn;

