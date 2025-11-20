import React from 'react';
import AIAgentChat from '../../components/AIAgentChat';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import '../../styles/pages.css';
import './SolutionPage.css';

const YouTube = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className="page-container solution-page">
      <div
        className={`solution-hero fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={ref}
      >
        <div className="solution-content">
          <span className="solution-badge">콘텐츠 자동화</span>
          <h1>YouTube 자동 성장 엔진</h1>
          <p className="solution-subtitle">
            트렌드 분석부터 스크립트, 썸네일 카피, 편집 포인트까지
            <br />
            유튜브 채널 운영에 필요한 반복 업무를 AI가 대신합니다.
          </p>
          <div className="solution-stats">
            <div className="stat">
              <span className="stat-value">10배</span>
              <span className="stat-label">빠른 제작 속도</span>
            </div>
            <div className="stat">
              <span className="stat-value">300%</span>
              <span className="stat-label">평균 조회수 성장</span>
            </div>
          </div>
        </div>
        <div className="solution-visual">
          <div className="video-mockup">
            <div className="play-button">▶</div>
          </div>
        </div>
      </div>

      <div className="solution-details">
        <div className="detail-section">
          <h2>어떻게 작동하나요?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>트렌드 분석</h3>
              <p>카테고리와 채널 데이터를 기반으로, 잘 나가는 주제와 키워드를 추천합니다.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>스크립트 & 구성</h3>
              <p>시청 유지율을 고려한 스크립트와 챕터 구성을 자동으로 생성합니다.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>제작 가이드</h3>
              <p>편집 포인트, BGM, 자막 가이드까지 한 번에 제공해 제작 시간을 줄여줍니다.</p>
            </div>
          </div>
        </div>

        <div className="agent-section">
          <div className="agent-text">
            <h2>우리 채널에 적용하면?</h2>
            <p>GRINDA AI 에이전트에게 현재 채널 상황을 알려주시면, 예상 효과를 함께 시뮬레이션해 드립니다.</p>
          </div>
          <div className="agent-wrapper">
            <AIAgentChat solutionName="YouTube 자동화" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
