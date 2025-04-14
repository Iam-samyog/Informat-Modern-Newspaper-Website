import React from 'react';

const MiddleColumn = () => {
  return (
    <div className="w-2/4 p-6 border-r border-gray-200">
      <div className="mb-8">
        <div className="text-blue-600 text-sm uppercase font-semibold mb-2">TECH</div>
        <h1 className="text-2xl font-bold mb-3">What Apple Can Teach Your Bank: Data Sheet</h1>
        <p className="text-gray-600 text-sm mb-4">
          Given that I make my living writing about Silicon Valley, I pride myself at just taking on new initiatives. I find that by spending the boarding stage I can refresh them recurring time on travel and the technology on me is increasingly outmoded to the most of engineering. Today, occasionally an old phone but nothing more than using technology...
        </p>
        <div className="text-blue-600 text-xs uppercase font-semibold">EXPLORE</div>
      </div>

      <div className="mb-8 border-t pt-8">
        <h2 className="text-xl font-bold mb-3">Which Flavor of Data Professional Are You?</h2>
        <p className="text-gray-600 text-sm mb-3">Given the types of teams you've joined and what you've worked on so far, which of the below is most likely to be true...</p>
        <div className="w-full bg-gray-100 h-8 relative mb-4">
          <div className="absolute right-2 top-2">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mb-8 border-t pt-8">
        <h2 className="text-xl font-bold mb-3">Netflix, Who?</h2>
        <p className="text-gray-600 text-sm mb-3">I wonder if one day we would look back to when Netflix was the world's most popular streaming service. Are we actually approaching the last page...</p>
        <div className="w-full bg-gray-100 h-8 relative mb-4">
          <div className="absolute right-2 top-2">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-xl font-bold mb-3">The Calm Before the iPhone 15 Storm: Almost</h2>
      </div>
    </div>
  );
};

export default MiddleColumn;