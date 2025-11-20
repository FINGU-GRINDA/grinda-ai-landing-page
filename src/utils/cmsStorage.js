import { initialNewsData } from '../data/newsData';

const STORAGE_KEY = 'grinda_cms_posts';

// 초기 데이터 로드 (LocalStorage가 비어있을 경우)
const initializeData = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialNewsData));
    return initialNewsData;
  }
  return JSON.parse(storedData);
};

export const cmsStorage = {
  // 모든 포스트 조회
  getAllPosts: () => {
    return initializeData();
  },

  // 특정 포스트 조회
  getPostById: (id) => {
    const posts = initializeData();
    return posts.find(post => post.id === id);
  },

  // 포스트 생성
  createPost: (postData) => {
    const posts = initializeData();
    const newPost = {
      ...postData,
      id: Date.now().toString(), // 간단한 ID 생성
      date: postData.date || new Date().toISOString().split('T')[0] // 날짜 없으면 오늘 날짜
    };
    const updatedPosts = [newPost, ...posts];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    return newPost;
  },

  // 포스트 수정
  updatePost: (id, postData) => {
    const posts = initializeData();
    const updatedPosts = posts.map(post => 
      post.id === id ? { ...post, ...postData } : post
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    return updatedPosts.find(post => post.id === id);
  },

  // 포스트 삭제
  deletePost: (id) => {
    const posts = initializeData();
    const updatedPosts = posts.filter(post => post.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    return true;
  }
};

