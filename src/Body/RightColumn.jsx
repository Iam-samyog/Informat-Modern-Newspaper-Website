import React from 'react';

const RightColumn = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-50">
      <div className="mb-8">
        <h3 className="text-sm font-bold uppercase mb-4">TOP CATEGORIES</h3>
        <ul className="space-y-3 text-sm">
          <li>TECH</li>
          <li>FOOD</li>
          <li>TRAVEL</li>
          <li>LEADERSHIP</li>
          <li>STAFF COMMENTARY</li>
          <li>CAREERS</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold uppercase mb-4">POPULAR ON INFOHART</h3>
      </div>

      <div className="mb-6 bg-white p-3 border border-gray-200">
        <h3 className="text-sm font-bold mb-2">Which Flavor of Data Professional Are You?</h3>
        <p className="text-xs text-gray-500 mb-2">Given the types of teams you've joined and what you've worked on so far, which of the below is most likely to be true...</p>
        <div className="text-blue-600 text-xs font-medium">READ MORE</div>
      </div>
    </div>
  );
};

export default RightColumn;