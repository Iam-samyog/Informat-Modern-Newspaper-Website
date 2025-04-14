
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const navItems = [
    "HOME", "TECH", "POLITICS", "HUMAN", "ROYALS", 
    "LIFESTYLE", "TV", "MUSIC", "HEALTH", "STARTUPS", "EVENTS"
  ];

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      <div className="container mx-auto max-w-[1350px] mt-3 px-4 secondary-font">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between ">
          <div className="flex items-baseline gap-6 mt-[100px]">
            <i className="bi bi-list text-xl cursor-pointer"></i>
            <i className="bi bi-search text-xl cursor-pointer" onClick={toggleSearch}></i>
          </div>
          
          <div className="text-center secondary-font">
            <h1 className="primary-font font-normal uppercase text-[48px] lg:text-[85px] leading-tight">
              Informat
            </h1>
            <p className="secondary-font font-light uppercase text-[16px] lg:text-[20px] leading-snug tracking-wide">
              Welcome to Informat, where thoughts matter
            </p>
          </div>
          
          <div className="flex items-baseline  gap-6 mt-[100px]">
            <i className="bi bi-instagram text-xl cursor-pointer"></i>
            <i className="bi bi-facebook text-xl cursor-pointer"></i>
            <i className="bi bi-twitter-x text-xl cursor-pointer"></i>
            <i className="bi bi-youtube text-xl cursor-pointer"></i>
          </div>
        </div>

        
        <div className="hidden sm:block lg:hidden secondary-font">
          {searchOpen ? (
            <div className="flex items-center py-4">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  autoFocus
                />
                <i 
                  className="bi bi-x absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
                  onClick={toggleSearch}
                ></i>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center secondary-font">
              
              <div className="text-center py-4">
                <h1 className="primary-font font-normal uppercase text-[48px] md:text-[64px] leading-tight">
                  Informat
                </h1>
                <p className="secondary-font font-light uppercase text-[16px] md:text-[18px] leading-snug tracking-wide">
                  Welcome to Informat, where thoughts matter
                </p>
              </div>
              
              {/* Navigation and Social icons below */}
              <div className="flex justify-between w-full py-3">
                <div className="flex items-center gap-6">
                  <i className="bi bi-list text-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}></i>
                  <i className="bi bi-search text-xl cursor-pointer" onClick={toggleSearch}></i>
                </div>
                
                <div className="flex items-center gap-6">
                  <i className="bi bi-instagram text-xl cursor-pointer"></i>
                  <i className="bi bi-facebook text-xl cursor-pointer"></i>
                  <i className="bi bi-twitter-x text-xl cursor-pointer"></i>
                  <i className="bi bi-youtube text-xl cursor-pointer"></i>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden secondary-font">
          {searchOpen ? (
            <div className="flex items-center py-3">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  autoFocus
                />
                <i 
                  className="bi bi-x absolute right-3 top-1/2 transform -translate-y-1/2 text-lg cursor-pointer"
                  onClick={toggleSearch}
                ></i>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center secondary-font">
             
              <div className="text-center py-3">
                <h1 className="primary-font font-normal uppercase text-[36px] leading-tight">
                  Informat
                </h1>
                <p className="secondary-font font-light uppercase text-[12px] leading-snug tracking-wide">
                  Welcome to Informat, where thoughts matter
                </p>
              </div>
              
             
              <div className="flex justify-between w-full py-2">
                <div className="flex items-center gap-4">
                  <i 
                    className="bi bi-list text-xl cursor-pointer" 
                    onClick={() => setMenuOpen(!menuOpen)}
                  ></i>
                  <i 
                    className="bi bi-search text-xl cursor-pointer" 
                    onClick={toggleSearch}
                  ></i>
                </div>
                
                <div className="flex items-center gap-4">
                  <i className="bi bi-instagram text-lg cursor-pointer"></i>
                  <i className="bi bi-facebook text-lg cursor-pointer"></i>
                  <i className="bi bi-twitter-x text-lg cursor-pointer"></i>
                  <i className="bi bi-youtube text-lg cursor-pointer"></i>
                </div>
              </div>
            </div>
          )}
        </div>

       
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 py-4 px-6">
            <div className="flex justify-end mb-6">
              <i 
                className="bi bi-x-lg text-2xl cursor-pointer" 
                onClick={() => setMenuOpen(false)}
              ></i>
            </div>
            <nav>
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index} className="text-lg font-medium secondary-font">{item}</li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {(!searchOpen || window.innerWidth >= 1024) && (
        <div className="border-b border-t border-gray-200 py-2 mt-8">
          {/* Desktop*/}
          <div className="hidden sm:block overflow-x-auto">
            <div className="flex justify-center gap-x-7 min-w-max py-2">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="px-4 secondary-font  py-1 text-[14px] font-semibold hover:bg-orange-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
         
        </div>
      )}
    </>
  );
};

export default Header;