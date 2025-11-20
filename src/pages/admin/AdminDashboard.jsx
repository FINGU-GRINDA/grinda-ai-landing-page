import React, { useState, useEffect } from 'react';
import { cmsStorage } from '../../utils/cmsStorage';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  
  // 폼 상태
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    category: 'Company',
    date: '',
    imageUrl: '',
    content: ''
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    const allPosts = cmsStorage.getAllPosts();
    // 최신순 정렬
    setPosts(allPosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      summary: '',
      category: 'Company',
      date: new Date().toISOString().split('T')[0],
      imageUrl: '',
      content: ''
    });
    setIsEditing(false);
    setCurrentPost(null);
  };

  const handleCreate = () => {
    resetForm();
    setIsEditing(true);
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      summary: post.summary,
      category: post.category,
      date: post.date,
      imageUrl: post.imageUrl,
      content: post.content
    });
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      cmsStorage.deletePost(id);
      loadPosts();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentPost) {
      // 수정
      cmsStorage.updatePost(currentPost.id, formData);
      alert('수정되었습니다.');
    } else {
      // 생성
      cmsStorage.createPost(formData);
      alert('생성되었습니다.');
    }
    
    resetForm();
    loadPosts();
  };

  return (
    <div className="admin-dashboard page-container">
      <div className="admin-header">
        <h1>CMS Admin Dashboard</h1>
        {!isEditing && (
          <button className="btn-create" onClick={handleCreate}>
            + 새 글 작성
          </button>
        )}
      </div>

      <div className="admin-content">
        {isEditing ? (
          <div className="editor-container">
            <h2>{currentPost ? '글 수정' : '새 글 작성'}</h2>
            <form onSubmit={handleSubmit} className="post-form">
              <div className="form-group">
                <label>제목</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>카테고리</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="Company">Company</option>
                    <option value="Insight">Insight</option>
                    <option value="Event">Event</option>
                    <option value="Product">Product</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>날짜</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>요약 (썸네일용)</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>이미지 URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="form-group">
                <label>본문 (HTML 태그 사용 가능)</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows="10"
                  className="content-editor"
                  required
                />
                <p className="help-text">
                  &lt;p&gt;, &lt;h3&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;br/&gt; 등의 태그를 사용하여 작성하세요.
                </p>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={resetForm}>
                  취소
                </button>
                <button type="submit" className="btn-submit">
                  {currentPost ? '수정 완료' : '발행하기'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="posts-list">
            <div className="list-header">
              <div className="col-title">제목</div>
              <div className="col-category">카테고리</div>
              <div className="col-date">날짜</div>
              <div className="col-actions">관리</div>
            </div>
            {posts.map(post => (
              <div key={post.id} className="list-item">
                <div className="col-title">{post.title}</div>
                <div className="col-category">
                  <span className={`badge ${post.category.toLowerCase()}`}>
                    {post.category}
                  </span>
                </div>
                <div className="col-date">{post.date}</div>
                <div className="col-actions">
                  <button className="btn-edit" onClick={() => handleEdit(post)}>
                    수정
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(post.id)}>
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

