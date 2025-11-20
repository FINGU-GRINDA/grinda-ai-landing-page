import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cmsStorage } from '../utils/cmsStorage';
import './InsightDetail.css';

const InsightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = cmsStorage.getPostById(id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      // 포스트가 없으면 목록으로 이동
      navigate('/insights');
    }
  }, [id, navigate]);

  if (!post) return <div className="loading">Loading...</div>;

  return (
    <div className="insight-detail-page">
      <div className="detail-container">
        <div className="detail-header">
          <div className="detail-meta">
            <span className="detail-category">{post.category}</span>
            <span className="detail-date">{post.date}</span>
          </div>
          <h1 className="detail-title">{post.title}</h1>
        </div>

        <div className="detail-image-wrapper">
          <img src={post.imageUrl} alt={post.title} className="detail-image" />
        </div>

        <div 
          className="detail-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="detail-footer">
          <Link to="/insights" className="btn-back">
            ← 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsightDetail;

