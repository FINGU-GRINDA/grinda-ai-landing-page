import React, { useState, useEffect } from 'react';
import { cmsStorage } from '../utils/cmsStorage';
import NewsCard from '../components/NewsCard';
import './Insights.css';

const categories = ['All', 'Company', 'Insight', 'Event', 'Product'];

const Insights = () => {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const allPosts = cmsStorage.getAllPosts();
    // 최신순 정렬
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(sortedPosts);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory, posts]);

  return (
    <div className="insights-page page-container">
      <div className="page-header text-center">
        <h1 className="page-title">Insights & News</h1>
        <p className="page-subtitle">
          GRINDA AI의 최신 소식과 비즈니스 인사이트를 확인하세요.
        </p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="insights-grid container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <NewsCard key={post.id} news={post} />
          ))
        ) : (
          <div className="no-posts">
            <p>등록된 게시물이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Insights;

