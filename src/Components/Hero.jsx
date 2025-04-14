import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="relative bg-orange-300 secondary-font">
        <div className="container max-w-[1550px] mx-auto">
          <img src="img/BANNERS.png" alt="Hero Banner" className="w-full h-auto" />
          
          {/* Search Bar Overlay */}
          <div className="absolute left-[100px] inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-[650px] relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tesla cars"
                  className="w-full py-2 pl-2 pr-10 text-[24px] bg-transparent border-b-2 border-white text-white placeholder-white outline-none"
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <i className="bi bi-search text-white text-2xl mr-3"></i>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;