import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className={`hero fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      <div className="hero-container">
        {/* 상단 텍스트 영역 */}
        <div className="hero-header">
          <p className="hero-eyebrow animate-fade-in">
            <span className="eyebrow-highlight">GRINDA AI만의 Multi-Agent Orchestration 기술</span>
            <br />
            단순 업무 자동화를 넘어, 스스로 사고하고 행동하는 에이전트를 경험하세요.
          </p>
          <h1 className="hero-headline animate-fade-in-up">
            반복 업무는 AI에게,
            <br />
            <span className="text-highlight">성장에만 집중하세요</span>
          </h1>
        </div>

        {/* 하단 카드 그리드 영역 */}
        <div className="hero-grid animate-fade-in-up-delay">
          {/* 카드 1: RINDA (Main - Large) */}
          <Link to="/solutions/rinda" className="grid-card card-large card-rinda">
            <div className="card-bg"></div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <span className="card-subtitle">AI 영업 에이전트</span>
              <h3 className="card-title">RINDA 2.0</h3>
              <p className="card-desc">잠재 고객 발굴부터 이메일 발송까지<br/>24시간 쉬지 않는 영업 파트너</p>
            </div>
          </Link>

          {/* 카드 2: Finance AX (Portrait) */}
          <Link to="/solutions/finance" className="grid-card card-portrait card-finance">
            <div className="card-bg"></div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <span className="card-subtitle">금융 데이터 분석</span>
              <h3 className="card-title">Finance AX</h3>
              <p className="card-desc">복잡한 금융 지표와 시장 흐름을<br/>실시간 리포트로 한눈에</p>
            </div>
          </Link>

          {/* 카드 3: YouTube (Portrait) */}
          <Link to="/solutions/youtube" className="grid-card card-portrait card-contents">
            <div className="card-bg"></div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <span className="card-subtitle">콘텐츠 제작 자동화</span>
              <h3 className="card-title">Contents AI</h3>
              <p className="card-desc">트렌드 분석부터 컷 편집까지<br/>영상 제작의 전 과정 자동화</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
