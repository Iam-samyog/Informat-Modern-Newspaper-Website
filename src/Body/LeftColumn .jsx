import React, { useState } from 'react';

const LeftColumn = () => {
  const [pollAnswer, setPollAnswer] = useState('');

  // Constant for Top Categories
  const topCategories = [
    'FOOD', 
    'TRAVEL', 
    'LEADERSHIP', 
    '100 BEST COMPANIES', 
    'GADGETS'
  ];

  // Constant for Opinion Poll options
  const opinionPollOptions = [
    { value: 'beach', label: 'Beach' },
    { value: 'mountains', label: 'Mountains' },
    { value: 'city', label: 'City' },
    { value: 'countryside', label: 'Countryside' }
  ];

  // Constant for Survey options
  const surveyOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'occasionally', label: 'Occasionally' },
    { value: 'never', label: 'Never' }
  ];

  const handlePollChange = (e) => {
    setPollAnswer(e.target.value);
  };

  const handleSurveySubmit = () => {
    alert(`Your response: ${pollAnswer}`);
  };

  return (
    <div className="w-full md:w-1/5 p-4 secondary-font mt-10">
      {/* Top Categories Section */}
      <div className="mb-8 border-b border-gray-400 pb-10">
        <h2 className="text-2xl font-bold mb-4">TOP CATEGORIES</h2>
        <ul className="space-y-2">
          {topCategories.map((category, index) => (
            <li key={index} className="hover:text-blue-500 cursor-pointer pb-3">{category}</li>
          ))}
        </ul>
      </div>

      {/* Opinion Poll Section */}
      <div className="mb-8 pb-4 border-b-2 border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Opinion Poll</h2>
        <div className="space-y-4 ">
          <p>What's your favorite travel destination?</p>
          {opinionPollOptions.map((option) => (
            <label key={option.value} className="block">
              <input
                type="radio"
                name="poll"
                value={option.value}
                checked={pollAnswer === option.value}
                onChange={handlePollChange}
              />
              <span className='pl-2'>{option.label}</span>
            </label>
          ))}
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-300 hover:opacity-90 text-blue-800 rounded"
          onClick={handleSurveySubmit}
        >
          Submit Poll
        </button>
      </div>

      {/* Survey Section */}
      <div className="mb-8 pb-4 border-b-2 border-gray-00">
        <h2 className="text-2xl font-bold mb-4">Survey</h2>
        <p className="mb-4">How often do you read news?</p>
        <div className="space-y-2">
          {surveyOptions.map((option) => (
            <label key={option.value} className="block">
              <input type="checkbox" /> {option.label}
            </label>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 bg-green-400 hover:opacity-90 text-green-800 rounded">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default LeftColumn;
