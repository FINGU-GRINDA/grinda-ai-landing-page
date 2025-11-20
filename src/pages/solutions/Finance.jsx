import React from 'react';
import AIAgentChat from '../../components/AIAgentChat';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import '../../styles/pages.css';
import './SolutionPage.css';

const Finance = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className="page-container solution-page">
      <div
        className={`solution-hero fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={ref}
      >
        <div className="solution-content">
          <span className="solution-badge">Finance AX</span>
          <h1>지능형 금융 데이터 자동화</h1>
          <p className="solution-subtitle">
            복잡한 재무 데이터와 리포트를 AI가 자동으로 정리하고,
            <br />
            리스크 분석과 투자 인사이트까지 한 번에 제공합니다.
          </p>
          <div className="solution-stats">
            <div className="stat">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">정확도</span>
            </div>
            <div className="stat">
              <span className="stat-value">ISO</span>
              <span className="stat-label">27001 수준 보안</span>
            </div>
          </div>
        </div>
        <div className="solution-visual">
          <div className="chart-mockup">
            <div className="bar-chart" />
            <div className="line-chart" />
          </div>
        </div>
      </div>

      <div className="solution-details">
        <div className="detail-section">
          <h2>보안과 컴플라이언스를 모두 만족</h2>
          <div className="grid-2-col">
            <div className="card-simple">
              <h3>리포트 자동 생성</h3>
              <p>일·주·월 단위의 재무 리포트를 수작업 없이 자동으로 생성합니다.</p>
            </div>
            <div className="card-simple">
              <h3>투자 분석</h3>
              <p>글로벌 마켓 데이터를 분석해 기회와 리스크를 실시간으로 보여줍니다.</p>
            </div>
            <div className="card-simple">
              <h3>이상 거래 탐지</h3>
              <p>패턴 분석을 통해 이상 징후를 빠르게 감지하고 알림을 제공합니다.</p>
            </div>
            <div className="card-simple">
              <h3>데이터 보안</h3>
              <p>암호화 저장과 프라이빗 클라우드 환경으로 금융권 수준의 보안을 제공합니다.</p>
            </div>
          </div>
        </div>

        <div className="agent-section">
          <div className="agent-text">
            <h2>우리 조직에 맞게 도입하려면?</h2>
            <p>보안·컴플라이언스 요구사항을 알려주시면, 맞춤형 도입 방안을 함께 설계해 드립니다.</p>
          </div>
          <div className="agent-wrapper">
            <AIAgentChat solutionName="Finance AX" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
