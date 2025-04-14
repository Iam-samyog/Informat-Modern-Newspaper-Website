import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Newsletter from '../Components/Newsletter';
import Footer from '../Footer';
import Header from '../Components/Header';

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  const categoryColors = {
    technology: 'bg-blue-100 text-blue-800',
    business: 'bg-green-100 text-green-800',
    entertainment: 'bg-purple-100 text-purple-800',
    health: 'bg-red-100 text-red-800',
    science: 'bg-yellow-100 text-yellow-800',
    sports: 'bg-orange-100 text-orange-800',
    general: 'bg-gray-100 text-gray-800'
  };

  if (!article) {
    return (
      <div className="p-4 sm:p-8 max-w-[1350px] mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Article Not Found</h2>
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 md:px-8 py-6 max-w-5xl mx-auto secondary-font">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-blue-500 hover:text-blue-700 mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to news
        </button>

        {/* Category Badge */}
        <span className={`inline-block ${
          categoryColors[article.category] || 'bg-gray-100 text-gray-800'
        } text-xs px-2 py-1 rounded-md mb-4 font-medium`}>
          {article.category?.toUpperCase() || 'GENERAL'}
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{article.title}</h1>

        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-1 sm:gap-4 mb-6 text-gray-600 text-sm">
          <span className="font-medium">{article.source?.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          <span>By {article.author || 'Unknown Author'}</span>
        </div>

        {/* Image */}
        {article.urlToImage && (
          <img 
            src={article.urlToImage} 
            alt={article.title} 
            className="w-full h-auto mb-6 rounded-lg shadow-md"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Available';
            }}
          />
        )}

        {/* Content */}
        <div className="prose max-w-none text-base sm:text-lg leading-relaxed">
          {article.fullContent
            ? article.fullContent.split('\n').map((para, index) => (
                <p key={index} className="mb-4">{para}</p>
              ))
            : (
              <>
                <p className="mb-4">{article.description}</p>
                <p className="mb-6">
                  {article.content?.replace(/\[\+\d+ chars\]/g, '') || 'Full content not available.'}
                </p>
              </>
            )
          }
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default NewsDetail;
