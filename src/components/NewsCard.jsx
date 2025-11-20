import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <Link to={`/insights/${news.id}`} className="news-card">
      <div className="news-image-wrapper">
        <img src={news.imageUrl} alt={news.title} className="news-image" />
        <span className="news-category">{news.category}</span>
      </div>
      <div className="news-content">
        <div className="news-meta">
          <span className="news-date">{news.date}</span>
        </div>
        <h3 className="news-title">{news.title}</h3>
        <p className="news-summary">{news.summary}</p>
        <div className="news-footer">
          <span className="read-more">Read More →</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

