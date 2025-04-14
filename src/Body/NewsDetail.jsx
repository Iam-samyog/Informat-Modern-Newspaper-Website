
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Newsletter from '../Components/Newsletter';
import Footer from '../Footer';
import Header from '../Components/Header';

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  // Category color mapping (same as in MiddleColumn)
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
      <div className="p-8 max-w-[1350px] mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
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
    <Header/>
    <div className="p-6 max-w-4xl mx-auto">
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
        categoryColors[article.category]
      } text-xs px-2 py-1 rounded-md mb-4 font-medium`}>
        {article.category.toUpperCase()}
      </span>
      
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      
      <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 text-sm">
        <span className="font-medium">{article.source?.name}</span>
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        <span>By {article.author || 'Unknown Author'}</span>
      </div>
      
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
      
      <div className="prose max-w-none">
        <p className="text-lg mb-4">{article.description}</p>
        <p className="mb-6">{article.content?.replace(/\[\+\d+ chars\]/g, '')}</p>
      </div>
      
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Read full article
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
    <Newsletter/>
    <Footer/>
    </>
  );
};

export default NewsDetail;