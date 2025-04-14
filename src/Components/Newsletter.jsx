// import React, { useState } from 'react'

// const Newsletter = () => {

// const [email, setEmail] = useState('');

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Handle the subscription logic
//   console.log('Email submitted:', email);
//   // Reset the form
//   setEmail('');
// };

// return (
//     <>
       
//   <div className="bg-gray-100 px-[50px] py-[100px] ">
//     <div className="flex align-center items-start space-x-4 container mx-auto  max-w-[1350px]">
//       <div className=" p-2 w-20 h-20 flex items-center justify-center relative">
//      <img src="/public/img/rubric icon.png" alt=""  className='w-full h-auto'/>
//       </div>
      
//       <div className="flex-1">
//         <h2 className="text-xl font-bold uppercase mb-1">Subscribe to INFORMAT Email Briefings</h2>
        
//         <p className="text-gray-600 mb-4">
//           Sign up for our daily newsletter and get the best of The INFORMAT in your in-box.
//         </p>
        
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Your email"
//             className="border-b-2 border-gray-300 pb-1 mb-4 bg-transparent focus:outline-none focus:border-purple-500"
//             required
//           />
          
//           <div>
//             <button 
//               type="submit" 
//               className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-600 transition-colors"
//             >
//               <span className="text-lg">→</span>
//               <span className="uppercase text-sm font-medium">Subscribe</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default Newsletter;
import React from 'react'

const Newsletter = () => {
  return (
    <>
     <div className="bg-white p-6 md:p-8 max-w-2xl mx-auto border border-gray-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left Column - Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-24 h-24  overflow-hidden">
  <img 
    src="/img/rubric icon.png" 
    alt="Newsletter" 
    className="w-full h-full object-cover"
  />
</div>

            
          </div>
        </div>
        
        {/* Right Column - Text Content */}
        <div className="flex-1 w-full">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Subscribe to INFORMAT<br />
            Email Briefings
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Sign up for our daily newsletter and get the best of The INFORMAT in your in-box.
          </p>
          
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Newsletter
