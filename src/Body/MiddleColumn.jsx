import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MiddleColumn = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('technology');
  const navigate = useNavigate();
  const apiKey = '0b28488448144e3eabc2032abe3606cf';

  // Category color mapping
  const categoryColors = {
    technology: 'bg-blue-100 text-blue-800',
    business: 'bg-green-100 text-green-800',
    entertainment: 'bg-purple-100 text-purple-800',
    health: 'bg-red-100 text-red-800',
    science: 'bg-yellow-100 text-yellow-800',
    sports: 'bg-orange-100 text-orange-800',
    general: 'bg-gray-100 text-gray-800'
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        );
        const data = await response.json();
        
        // Add category to each article
        const articlesWithCategory = data.articles.map(article => ({
          ...article,
          category: category
        }));
        
        setArticles(articlesWithCategory);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  const handleArticleClick = (article) => {
    navigate('/news', { state: { article } });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  if (loading) {
    return (
      <div className="w-1/2 p-4 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-1/2 p-4">
      {/* Category Selector */}
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {Object.keys(categoryColors).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              category === cat 
                ? `${categoryColors[cat]} ring-2 ring-offset-2 ring-opacity-50` 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Articles List */}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div 
            key={index} 
            className="mb-8 border-b pb-6 hover:bg-gray-50 transition-colors rounded-lg p-4"
          >
            {/* Category Badge */}
            <span className={`inline-block ${
              categoryColors[article.category]
            } text-xs px-2 py-1 rounded-md mb-2 font-medium`}>
              {article.category.toUpperCase()}
            </span>
            
            {/* Article Title */}
            <h2 
              className="text-2xl font-semibold mb-2 hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => handleArticleClick(article)}
            >
              {article.title}
            </h2>
            
            {/* Article Description */}
            <p className="text-gray-700 mb-3">{article.description}</p>
            
            {/* Article Metadata */}
            <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 gap-2">
              <span className="font-medium">{article.source?.name}</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              <span>By {article.author || 'Unknown'}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No articles found in this category.</p>
          <button 
            onClick={() => fetchNews()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default MiddleColumn;