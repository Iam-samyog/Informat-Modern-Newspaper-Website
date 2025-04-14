import React, { useState } from 'react'

const Newsletter = () => {

const [email, setEmail] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle the subscription logic
  console.log('Email submitted:', email);
  // Reset the form
  setEmail('');
};

return (
    <>
       
  <div className="bg-gray-100 px-[50px] py-[100px] ">
    <div className="flex align-center items-start space-x-4 container mx-auto  max-w-[1350px]">
      <div className=" p-2 w-20 h-20 flex items-center justify-center relative">
     <img src="/public/img/rubric icon.png" alt=""  className='w-full h-auto'/>
      </div>
      
      <div className="flex-1">
        <h2 className="text-xl font-bold uppercase mb-1">Subscribe to INFORMAT Email Briefings</h2>
        
        <p className="text-gray-600 mb-4">
          Sign up for our daily newsletter and get the best of The INFORMAT in your in-box.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="border-b-2 border-gray-300 pb-1 mb-4 bg-transparent focus:outline-none focus:border-purple-500"
            required
          />
          
          <div>
            <button 
              type="submit" 
              className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-600 transition-colors"
            >
              <span className="text-lg">→</span>
              <span className="uppercase text-sm font-medium">Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default Newsletter;
