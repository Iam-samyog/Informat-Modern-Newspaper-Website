import React from 'react';

const RightColumn = () => {
    const exploreItems=['POLITICS','BUSINESS','TECHNOLOGY','SCIENCE','Health']
    const trendingPosts = [
        {
          category: "TECH",
          date: "July 11, 2017",
          title: "Which Flavor of Data Professional Are You?",
          description: "As software engineers, developers or architects, it is pivotal to stay current and relevant within the technologies and the domains we work...",
          author: "Arthur Block"
        },
        {
          category: "ENTERTAINMENT",
          date: "July 27, 2014",
          title: "Netflix Killer?",
          description: "Helped by a low $5 price and a free subscription offer, Apple TV+ could attract as many as 10 million users within its first year, according to an analyst...",
          author: "Justin Hawkins"
        },
        {
          category: "SCIENCE",
          date: "January 15, 2020",
          title: "The Race to Quantum Supremacy",
          description: "Tech giants are competing to build the first truly functional quantum computer. Here's what that means for the future...",
          author: "Dr. Alicia Wang"
        },
        {
          category: "HEALTH",
          date: "March 9, 2023",
          title: "AI Diagnosing Diseases?",
          description: "From radiology to pathology, artificial intelligence is rapidly transforming how doctors diagnose and treat patients...",
          author: "Sophie Mendoza"
        },
        {
          category: "SPORTS",
          date: "June 22, 2021",
          title: "How Data Changed Basketball",
          description: "Analytics isn't just for tech—it’s reshaping how NBA teams train, play, and recruit players with a data-driven mindset...",
          author: "Chris Delaney"
        },
        {
          category: "WORLD",
          date: "August 30, 2022",
          title: "The Rise of Smart Cities",
          description: "From Singapore to Amsterdam, cities are evolving with technology to improve infrastructure, safety, and sustainability...",
          author: "Fatima Zahir"
        },
        {
          category: "BUSINESS",
          date: "November 5, 2022",
          title: "Startups vs. Tech Giants",
          description: "What makes a startup succeed in a world dominated by tech behemoths like Google, Apple, and Amazon?",
          author: "David Kim"
        },
        {
          category: "EDUCATION",
          date: "February 14, 2024",
          title: "EdTech Revolution in Classrooms",
          description: "Digital tools, AR/VR, and personalized AI tutors are revolutionizing the traditional education system worldwide...",
          author: "Emma Rodríguez"
        }
      ];
  return (
    <div className="w-1/3 p-4 mt-10 secondary-font">
      <div className="mb-8 pb-5 border-b-2 border-gray-300 ">
        <h2 className="text-xl primary-font font-bold mb-4 pb-5 border-b-2 border-gray-300">EXPLORE</h2>
        <ul className="space-y-2">
            {exploreItems.map((exploreItem)=>(  <li className="hover:text-purple-400 font-normal cursor-pointer uppercase">{exploreItem}</li>))}
        
        </ul>
      </div>
      
      <div>
  <h2 className="text-2xl font-bold mb-4 primary-font">TRENDING NOW</h2>
  {trendingPosts.map((post, index) => (
    <div className="mb-4 pb-5 border-b-2 border-gray-300" key={index}>
      <span className="text-bold primary-font text-gray-500">{post.category}</span>
      <span className="text-sm text-gray-500 ml-2">Posted {post.date}</span>
      <h3 className="text-lg font-semibold mt-1 hover:text-blue-500 cursor-pointer">
        {post.title}
      </h3>
      <p className="text-gray-700 mt-1">
        {post.description}
      </p>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-500">Author {post.author}</span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default RightColumn;