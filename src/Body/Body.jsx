import React from 'react';
import LeftColumn from './LeftColumn ';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

const Body = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
};

export default Body;