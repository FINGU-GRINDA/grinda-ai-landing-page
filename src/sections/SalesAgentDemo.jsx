import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './SalesAgentDemo.css';

const tabs = [
  { id: 'prospecting', label: '리드 발굴' },
  { id: 'email', label: '이메일 자동화' },
  { id: 'analysis', label: '고객 분석' },
  { id: 'meeting', label: '미팅 예약' },
  { id: 'crm', label: 'CRM 연동' },
];

const demoContent = {
  prospecting: {
    title: "타겟 고객 발굴",
    leftPanel: (
      <div className="demo-panel-content">
        <div className="panel-header">
          <span className="badge">필터 적용됨</span>
          <h4>SaaS 기업 (Series B 이상)</h4>
        </div>
        <div className="list-item active">
          <div className="avatar">T</div>
          <div className="info">
            <div className="name">테크플로우 (TechFlow)</div>
            <div className="sub">서울 강남구 • 직원수 50-200명</div>
          </div>
          <div className="score">98</div>
        </div>
        <div className="list-item">
          <div className="avatar">D</div>
          <div className="info">
            <div className="name">데이터스피어</div>
            <div className="sub">경기 판교 • 직원수 200+명</div>
          </div>
          <div className="score">95</div>
        </div>
        <div className="list-item">
          <div className="avatar">C</div>
          <div className="info">
            <div className="name">클라우드나인</div>
            <div className="sub">서울 성수동 • 직원수 100+명</div>
          </div>
          <div className="score">92</div>
        </div>
      </div>
    ),
    rightPanel: (
      <div className="demo-panel-content">
        <div className="panel-header">
          <span className="badge success">분석 완료</span>
          <h4>기업 핵심 인사이트</h4>
        </div>
        <div className="insight-card">
          <div className="label">성장 신호</div>
          <div className="value">최근 투자 유치: 150억원 (Series B)</div>
          <div className="desc">최근 영업 및 마케팅 직군 채용을 공격적으로 확대하고 있음.</div>
        </div>
        <div className="insight-card">
          <div className="label">의사결정권자</div>
          <div className="value">김지영 이사 (영업 총괄 VP)</div>
          <div className="desc">LinkedIn 활동 활발함. 최근 'AI를 활용한 세일즈 효율화' 관련 게시물에 반응함.</div>
        </div>
      </div>
    )
  },
  email: {
    title: "초개인화 이메일 생성",
    leftPanel: (
      <div className="demo-panel-content">
        <div className="panel-header">
          <span className="badge">초안 생성됨</span>
          <h4>수신: 김지영 이사</h4>
        </div>
        <div className="email-preview">
          <div className="email-subject">제목: 테크플로우의 Series B 투자 유치를 축하드립니다!</div>
          <div className="email-body">
            <p>안녕하세요, 김지영 이사님.</p>
            <p>최근 테크플로우의 150억원 규모 투자 유치 소식을 접하고 연락드립니다. 이번 투자를 발판으로 영업 조직을 확장하고 계신 점이 인상 깊었습니다.</p>
            <p>GRINDA AI는 신규 채용된 SDR이 3배 더 빠르게 성과를 낼 수 있도록 리드 리서치 업무를 자동화해드립니다.</p>
            <div className="ai-suggestion">
              <span className="icon">✨</span> AI 제안: 최근 출시한 신제품 관련 내용을 추가하여 관련성을 높여보세요.
            </div>
          </div>
        </div>
      </div>
    ),
    rightPanel: (
      <div className="demo-panel-content">
        <div className="panel-header">
          <span className="badge warning">A/B 테스트 중</span>
          <h4>성과 예측 시뮬레이션</h4>
        </div>
        <div className="stat-row">
          <div className="stat-label">예상 오픈율</div>
          <div className="stat-value">68% <span className="up">↑ 12%</span></div>
        </div>
        <div className="stat-row">
          <div className="stat-label">예상 답장률</div>
          <div className="stat-value">24% <span className="up">↑ 8%</span></div>
        </div>
        <div className="chart-placeholder">
          <div className="bar" style={{height: '60%'}}></div>
          <div className="bar" style={{height: '80%'}}></div>
          <div className="bar active" style={{height: '95%'}}></div>
        </div>
      </div>
    )
  },
  default: {
    title: "자동화 워크플로우",
    leftPanel: (
      <div className="demo-panel-content flex-center">
        <div className="loading-spinner"></div>
        <p>데이터 분석 중...</p>
      </div>
    ),
    rightPanel: (
      <div className="demo-panel-content flex-center">
        <p>상세 기능을 확인하려면 탭을 선택하세요</p>
      </div>
    )
  }
};

const SalesAgentDemo = () => {
  const [activeTab, setActiveTab] = useState('prospecting');
  const [ref, isVisible] = useScrollAnimation();

  const currentContent = demoContent[activeTab] || demoContent.default;

  return (
    <section className="sales-agent-demo" ref={ref}>
      <div className={`demo-container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="demo-header">
          <h2 className="demo-title">RINDA Agent +</h2>
          <p className="demo-subtitle">
            압도적인 데이터 추출 및 분석 성능을 지닌 AI 모델을 통해<br />
            최소한의 학습만으로도 복잡한 영업 프로세스를 완벽하게 자동화합니다.
          </p>
        </div>

        <div className="demo-nav">
          <div className="nav-pills">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-pill ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <Link to="/contact" className="btn-demo-request">
            데모 신청하기 ↗
          </Link>
        </div>

        <div className="demo-browser-mockup">
          <div className="browser-header">
            <div className="browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="browser-address-bar">
              gridna.ai/agent/dashboard
            </div>
          </div>
          
          <div className="browser-content">
            <div className="split-view">
              <div className="view-pane left-pane">
                <div className="pane-label">입력 데이터 (Input Source)</div>
                {currentContent.leftPanel}
              </div>
              <div className="view-divider"></div>
              <div className="view-pane right-pane">
                <div className="pane-label">AI 분석 및 실행 (AI Output)</div>
                {currentContent.rightPanel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAgentDemo;
