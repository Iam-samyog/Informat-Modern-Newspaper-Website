import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MiddleColumn = () => {
   
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('technology');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [articlesPerPage] = useState(10);
  const navigate = useNavigate();
  const apiKey = '0b28488448144e3eabc2032abe3606cf';


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
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${currentPage}&pageSize=${articlesPerPage}`
        );
        const data = await response.json();

        const articlesWithCategory = data.articles.map(article => ({
          ...article,
          category: category
        }));

        setArticles(articlesWithCategory);
        const total = Math.ceil((data.totalResults || 0) / articlesPerPage);
        setTotalPages(total > 0 ? total : 1);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, currentPage, articlesPerPage]);

  const handleArticleClick = (article) => {
    navigate('/news', { state: { article } });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    buttons.push(1);

    if (totalPages <= maxVisibleButtons) {
      for (let i = 2; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      if (currentPage > 3) buttons.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) buttons.push(i);
      if (currentPage < totalPages - 2) buttons.push('...');
      if (totalPages > 1) buttons.push(totalPages);
    }

    return buttons;
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (

    <div className="w-full md:w-3/5 p-4 mt-8 secondary-font "  >
      {/* Categories */}
      <div className="mb-6 pt-3 px-2">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-rounded-md">
          {Object.keys(categoryColors).map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 whitespace-nowrap ${
                category === cat 
                  ? `${categoryColors[cat]} ring-opacity-50` 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      {articles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1w lg:grid-cols-1 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                <div className="h-40 sm:h-48 md:h-56 overflow-hidden cursor-pointer" onClick={() => handleArticleClick(article)}>
                  {article.urlToImage ? (
                    <img 
                      src={article.urlToImage} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/400/320';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      No image available
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col">
                  <div className="mb-2">
                    <span className={`inline-block ${categoryColors[article.category]} text-xs px-2 py-1 rounded-md font-medium`}>
                      {article.category.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 hover:text-orange-300 cursor-pointer line-clamp-2" onClick={() => handleArticleClick(article)}>
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                    {article.description || "No description available"}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mt-auto">
                    <span>{article.source?.name || "Unknown Source"}</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center mt-8 gap-2">
            <button
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              &laquo;
            </button>
            {getPaginationButtons().map((page, index) => (
              page === '...' ? (
                <span key={index} className="px-3 py-2">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === page ? 'bg-orange-300 text-black' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {page}
                </button>
              )
            ))}
            <button
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md ${
                currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              &raquo;
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No articles found in this category.</p>
          <button 
            onClick={() => setCategory('general')} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Try General News
          </button>
        </div>
      )}
    </div>
  );
};

export default MiddleColumn;
