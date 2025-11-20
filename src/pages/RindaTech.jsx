import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './RindaTech.css';

const coreFeatures = [
  {
    title: '멀티모달 AI 엔진',
    description:
      '텍스트, 이메일, 웹 데이터를 동시에 이해하고 처리하는 차세대 AI 엔진으로, 고객 상황에 맞는 대화를 만들어 냅니다.',
    bullets: [
      '최신 LLM 기반 자연어 처리로 복잡한 문의도 자연스럽게 대응',
      '17개국 언어를 실시간으로 번역·생성해 글로벌 영업 지원',
      '대화 맥락을 기억하고 요약해 히스토리 관리 자동화',
      '감정·톤 분석으로 브랜드 보이스를 일관되게 유지',
    ],
  },
  {
    title: '영업 워크플로 자동화',
    description:
      '사람이 하던 리드 발굴, 아웃바운드, 후속 조치까지 워크플로 단위로 자동화해 줍니다.',
    bullets: [
      '리드 스코어링 및 우선순위 설정으로 “지금 연락해야 할 고객”을 자동 추천',
      '시장·역할·관심사별로 다른 아웃바운드 메시지 자동 생성',
      '응답·열람·클릭 여부에 따른 후속 조치(리마인드, 미팅 제안) 자동 실행',
      'CRM과 연동해 활동 기록을 자동으로 남기고 중복 업무 제거',
    ],
  },
  {
    title: '지속적인 학습과 최적화',
    description:
      '한 번 설정하고 끝나는 것이 아니라, 실제 성과 데이터를 기반으로 계속해서 스스로 개선합니다.',
    bullets: [
      '오픈·클릭·응답률 데이터를 실시간으로 분석',
      '제목·본문·콜투액션에 대한 A/B 테스트 자동 실행',
      '성과가 좋은 캠페인 패턴을 에이전트가 계속 학습',
      '엔터프라이즈 대시보드에서 팀별·시장별 성과 비교',
    ],
  },
];

const performance = [
  {
    metric: '이메일 응답률',
    value: '평균 38%',
    meta: ['+156% 향상', '실제 고객 도입 데이터 기준'],
  },
  {
    metric: '리드 처리 속도',
    value: '0.3초',
    meta: ['사람보다 10배 이상 빠른 분류·우선순위 지정', '대량 리드에도 안정적인 처리'],
  },
  {
    metric: '의도 파악 정확도',
    value: '94.7%',
    meta: ['실제 영업 대화 로그 기준', '도메인 학습으로 지속적인 개선'],
  },
  {
    metric: '가용성',
    value: '99.9%',
    meta: ['24/7 무중단 운영', '글로벌 타임존 대응'],
  },
];

const steps = [
  {
    title: '데이터 수집',
    description: '제품, 타깃 시장, 경쟁사 정보를 입력하면 RINDA가 도메인 지식을 학습합니다.',
  },
  {
    title: '리드 발굴',
    description: '글로벌 데이터베이스를 기반으로 ICP에 맞는 리드를 자동으로 찾아냅니다.',
  },
  {
    title: '메시지 생성',
    description: '각 리드에 맞춰 언어·톤이 다른 개인화 아웃바운드 메시지를 생성합니다.',
  },
  {
    title: '발송 & 후속 조치',
    description: '최적 시간에 발송하고, 반응에 따라 후속 이메일·미팅 제안을 이어갑니다.',
  },
];

const RindaTech = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className="rinda-tech-page">
      {/* Hero Section */}
      <section className="tech-hero">
        <div className="tech-hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-pattern"></div>
        </div>
        <div className="tech-hero-container">
          <div className="tech-hero-content">
            <span className="tech-badge">기술 소개</span>
            <h1 className="tech-hero-title">
              RINDA를 움직이는 기술,
              <br />
              <span className="gradient-text">영업을 이해하는 AI 에이전트</span>
            </h1>
            <p className="tech-hero-subtitle">
              단순한 챗봇이 아니라, 실제 영업팀이 하는 일을 그대로 이해하고 대신 실행하는
              엔터프라이즈급 AI 에이전트 플랫폼입니다.
            </p>
          </div>
          <div className="tech-visual">
            <div className="tech-visual-container">
              <div className="tech-core">
                <div className="core-circle core-inner"></div>
                <div className="core-circle core-middle"></div>
                <div className="core-circle core-outer"></div>
                <div className="core-center">
                  <div className="core-icon">🤖</div>
                  <span className="core-label">RINDA</span>
                </div>
              </div>
              <div className="tech-nodes">
                <div className="node node-1">
                  <div className="node-icon">🧠</div>
                  <div className="node-content">
                    <span className="node-title">AI 엔진</span>
                    <span className="node-desc">멀티모달 처리</span>
                  </div>
                  <div className="node-connection"></div>
                </div>
                <div className="node node-2">
                  <div className="node-icon">🌐</div>
                  <div className="node-content">
                    <span className="node-title">언어 이해</span>
                    <span className="node-desc">17개국 언어</span>
                  </div>
                  <div className="node-connection"></div>
                </div>
                <div className="node node-3">
                  <div className="node-icon">⚡</div>
                  <div className="node-content">
                    <span className="node-title">자동화</span>
                    <span className="node-desc">워크플로 실행</span>
                  </div>
                  <div className="node-connection"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology */}
      <section
        className={`core-tech fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={ref}
      >
        <div className="section-header">
          <h2 className="section-title">핵심 기술 아키텍처</h2>
          <p className="section-subtitle">
            글로벌 스케일에서 안정적으로 동작하는 RINDA의 AI 에이전트 기술을 소개합니다.
          </p>
        </div>
        <div className="tech-features-grid">
          {coreFeatures.map((feature, idx) => (
            <div key={idx} className="tech-feature-card glass-card">
              <h3>{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <ul className="feature-details">
                {feature.bullets.map((detail, i) => (
                  <li key={i}>
                    <span className="icon-check">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="performance-section">
        <div className="section-header">
          <h2 className="section-title">숫자로 보는 성능</h2>
          <p className="section-subtitle">
            실제 엔터프라이즈 고객 도입 사례에서 측정한 결과를 기반으로 합니다.
          </p>
        </div>
        <div className="performance-grid">
          {performance.map((perf, idx) => (
            <div key={idx} className="performance-card glass-card">
              <div className="perf-metric">{perf.metric}</div>
              <div className="perf-value">{perf.value}</div>
              <div className="perf-meta">
                {perf.meta.map((m, i) => (
                  <span key={i} className="status">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-header">
          <h2 className="section-title">RINDA는 이렇게 일합니다</h2>
          <p className="section-subtitle">
            실제 영업 파이프라인을 네 단계로 나누어, 에이전트가 어떤 역할을 하는지 한눈에 볼 수
            있습니다.
          </p>
        </div>
        <div className="workflow-steps">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className="workflow-step glass-card">
                <div className="step-number">{idx + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {idx < steps.length - 1 && <div className="workflow-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tech-cta">
        <h2>RINDA의 기술을 직접 경험해 보세요</h2>
        <p>데모를 통해 실제 영업 프로세스에 어떻게 녹여낼 수 있을지 함께 살펴봅니다.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary btn-lg">
            데모 요청하기
          </Link>
          <Link to="/solutions/rinda" className="btn btn-secondary btn-lg">
            솔루션 자세히 보기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RindaTech;
