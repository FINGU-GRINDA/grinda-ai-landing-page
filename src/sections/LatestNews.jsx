import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cmsStorage } from '../utils/cmsStorage';
import NewsCard from '../components/NewsCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './LatestNews.css';

const LatestNews = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    // 데이터 로드 시뮬레이션 (약간의 지연을 주어 자연스럽게)
    const loadData = () => {
      try {
        const allPosts = cmsStorage.getAllPosts();
        if (allPosts && allPosts.length > 0) {
          const sortedPosts = allPosts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
          setLatestPosts(sortedPosts);
        }
      } catch (error) {
        console.error("Failed to load news data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // 데이터가 없거나 로딩 중이어도 섹션 자체는 렌더링하여 레이아웃 유지
  return (
    <section className="latest-news-section" ref={ref}>
      <div className={`news-container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header text-center">
          <span className="section-badge">뉴스 & 인사이트</span>
          <h2 className="section-title">GRINDA의 최신 소식</h2>
          <p className="section-desc">GRINDA AI의 새로운 소식과 인사이트를 만나보세요.</p>
        </div>

        {isLoading ? (
          <div className="news-loading">
            <div className="loading-spinner"></div>
          </div>
        ) : latestPosts.length > 0 ? (
          <div className="news-grid">
            {latestPosts.map(post => (
              <NewsCard key={post.id} news={post} />
            ))}
          </div>
        ) : (
          <div className="news-empty">
            <p>등록된 최신 소식이 없습니다.</p>
          </div>
        )}

        <div className="news-section-footer">
          <Link to="/insights" className="btn-view-all">
            모든 소식 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
