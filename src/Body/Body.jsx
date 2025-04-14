import React from 'react';
import LeftColumn from './LeftColumn ';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen max-w-[1350px] container mx-auto bg-white">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
};

export default Body;
