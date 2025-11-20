import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AIStore.css';

const IconComponent = ({ type }) => {
  const icons = {
    video: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 10L18.5 7.5V16.5L15 14V10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="6"
          width="12"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    sales: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    chart: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 3V21H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16L12 11L16 15L21 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 10H16V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    email: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6L12 13L2 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    analytics: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 9H15V15H9V9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  return icons[type] || null;
};

const solutions = [
  {
    id: 'youtube',
    name: 'YouTube 자동 제작',
    description: '영상 기획·스크립트·편집 포인트까지 한 번에 제안합니다.',
    category: '콘텐츠',
    price: '₩99,000/월~',
    features: ['트렌드 분석', '스크립트 생성', '썸네일·제목 카피 추천', '성과 리포트'],
    icon: 'video',
    tags: ['마케팅', '콘텐츠팀', '브랜드'],
    color: 'red',
  },
  {
    id: 'rinda',
    name: 'RINDA 영업 에이전트',
    description: '전 세계 리드 발굴과 다국어 아웃바운드를 대신하는 영업 코파일럿입니다.',
    category: '영업',
    price: '₩99,000/월~',
    features: ['리드 발굴', '다국어 이메일', '후속 액션 자동화', 'CRM 연동'],
    icon: 'sales',
    tags: ['세일즈', 'B2B', '글로벌'],
    color: 'blue',
  },
  {
    id: 'finance',
    name: 'Finance AX',
    description: '재무 데이터와 리포트를 자동으로 정리하고 인사이트를 제공하는 금융 특화 AI입니다.',
    category: '분석',
    price: '₩499,000/월~',
    features: ['데이터 집계', '리포트 자동 생성', '리스크 분석', '이상 거래 탐지'],
    icon: 'chart',
    tags: ['금융', '리서치', '리스크'],
    color: 'green',
  },
];

const AIStore = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', text: '안녕하세요! 어떤 업무를 자동화하고 싶으신가요?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [showChat] = useState(true);

  const categories = ['전체', '영업', '콘텐츠', '분석'];

  const handleQuickQuestion = (question, category) => {
    setChatMessages((prev) => [
      ...prev,
      { type: 'user', text: question },
      {
        type: 'ai',
        text: `${question}에 가장 잘 맞는 솔루션을 골라봤어요. 아래 추천 카드를 확인해 보세요!`,
      },
    ]);
    setSelectedCategory(category);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setChatMessages((prev) => [...prev, { type: 'user', text: userInput }]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          text: '말씀해 주신 내용을 바탕으로 가장 적합한 AI 솔루션을 함께 찾아볼게요. 아래 카테고리에서 먼저 골라보세요.',
        },
      ]);
    }, 500);

    setUserInput('');
  };

  const filteredSolutions =
    selectedCategory === '전체'
      ? solutions
      : solutions.filter((s) => s.category === selectedCategory);

  return (
    <div className="ai-store-page">
      <div className="store-hero">
        <div className="store-hero-content">
          <h1 className="store-title">AI 스토어</h1>
          <p className="store-subtitle">
            우리 팀에 꼭 맞는 AI 에이전트를 찾아보세요.
            <br />
            몇 가지 질문만으로 GRINDA가 적절한 솔루션을 추천해 드립니다.
          </p>
        </div>
      </div>

      {/* AI Chat Interface (Hero Recommendations 영역 대체) */}
      {showChat && (
        <div className="ai-chat-section">
          <div className="chat-container glass-strong">
            <div className="chat-header">
              <h4>GRINDA AI 추천 어시스턴트</h4>
            </div>
            <div className="chat-messages">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.type}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="지금 어떤 일을 자동화하고 싶으신가요?"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>전송</button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Questions */}
      <div className="quick-questions">
        <h3>어떤 목표를 가지고 계신가요?</h3>
        <div className="questions-grid">
          <button
            className="question-card glass-card"
            onClick={() => handleQuickQuestion('해외 영업을 자동화하고 싶어요.', '영업')}
          >
            <IconComponent type="email" />
            <span>해외 바이어 발굴과 영업을 자동화하고 싶어요.</span>
          </button>
          <button
            className="question-card glass-card"
            onClick={() => handleQuickQuestion('콘텐츠 제작 속도를 높이고 싶어요.', '콘텐츠')}
          >
            <IconComponent type="video" />
            <span>유튜브/콘텐츠 제작 속도를 높이고 싶어요.</span>
          </button>
          <button
            className="question-card glass-card"
            onClick={() => handleQuickQuestion('데이터 분석을 자동화하고 싶어요.', '분석')}
          >
            <IconComponent type="analytics" />
            <span>복잡한 데이터 분석과 리포트를 자동화하고 싶어요.</span>
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn glass-card ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Solutions Grid */}
      <div className="solutions-showcase">
        <div className="solutions-grid-store">
          {filteredSolutions.map((solution) => (
            <div key={solution.id} className={`store-card glass-card ${solution.color}`}>
              <div className="store-card-header">
                <div className="store-icon-wrapper">
                  <IconComponent type={solution.icon} />
                </div>
                <div className="store-tags">
                  {solution.tags.map((tag, idx) => (
                    <span key={idx} className="store-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3>{solution.name}</h3>
              <p className="store-description">{solution.description}</p>
              <div className="store-features">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="icon-check" /> {feature}
                  </div>
                ))}
              </div>
              <div className="store-card-footer">
                <span className="price">{solution.price}</span>
                <Link to={`/solutions/${solution.id}`} className="btn btn-primary">
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="store-cta">
        <h2>딱 맞는 솔루션이 보이지 않나요?</h2>
        <p>조직 구조와 목표를 알려주시면, 맞춤형 AI 에이전트를 함께 설계해 드립니다.</p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          맞춤 솔루션 문의하기
        </Link>
      </div>
    </div>
  );
};

export default AIStore;
