import React from 'react';
import { Link } from 'react-router-dom';
import AIAgentChat from '../../components/AIAgentChat';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import '../../styles/pages.css';
import './SolutionPage.css';

const Rinda = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className="page-container solution-page">
      <div
        className={`solution-hero fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={ref}
      >
        <div className="solution-content">
          <span className="solution-badge">AI 영업 에이전트</span>
          <h1>
            힘 들이지 않는 영업,
            <br />
            RINDA가 대신합니다
          </h1>
          <p className="solution-subtitle">
            언어 장벽, 시차, 인력 부족 걱정 없이
            <br />
            17개국 언어로 리드를 발굴하고, 후속까지 자동으로 진행하는 영업 코파일럿입니다.
          </p>
          <div className="solution-stats">
            <div className="stat">
              <span className="stat-value">17개</span>
              <span className="stat-label">지원 언어</span>
            </div>
            <div className="stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">무중단 운영</span>
            </div>
            <div className="stat">
              <span className="stat-value">+38%</span>
              <span className="stat-label">평균 응답률 상승</span>
            </div>
          </div>
          <div className="solution-cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">
              무료 상담 신청
            </Link>
            <Link to="/rinda-tech" className="btn btn-secondary btn-lg">
              기술 자세히 보기
            </Link>
          </div>
        </div>
        <div className="solution-visual">
          <div className="globe-mockup">
            <div className="connection-line line-1" />
            <div className="connection-line line-2" />
            <div className="connection-line line-3" />
            <div className="connection-dot dot-1" />
            <div className="connection-dot dot-2" />
            <div className="connection-dot dot-3" />
          </div>
        </div>
      </div>

      <div className="solution-details">
        <div className="detail-section">
          <h2>글로벌 시장, 이제 부담 없이 진출하세요</h2>
          <div className="feature-list-large">
            <div className="feature-item">
              <div className="feature-icon">🌐</div>
              <h3>17개 언어로 자연스러운 커뮤니케이션</h3>
              <p>영어, 중국어, 일본어는 물론 주요 유럽어까지 자연스럽게 대응합니다.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>정확한 타깃팅</h3>
              <p>B2B 데이터베이스를 기반으로 우리 제품과 가장 잘 맞는 고객군을 자동으로 찾아냅니다.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✉️</div>
              <h3>초개인화 메시지</h3>
              <p>산업, 역할, 관심사에 따라 가장 적합한 메시지를 생성해 응답률을 끌어올립니다.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚙️</div>
              <h3>후속 액션까지 자동으로</h3>
              <p>응답, 열람, 클릭 여부에 따라 리마인드, 미팅 제안 등 다음 액션을 자동으로 설정합니다.</p>
            </div>
          </div>
        </div>

        <div className="use-case-section">
          <h2>이런 팀에서 특히 잘 쓰입니다</h2>
          <div className="use-cases">
            <div className="use-case-card">
              <h3>해외 진출을 준비하는 기업</h3>
              <p>“해외 바이어 발굴이 막막했는데, RINDA 덕분에 매달 꾸준한 리드를 확보하고 있습니다.”</p>
            </div>
            <div className="use-case-card">
              <h3>영업 인력이 부족한 스타트업</h3>
              <p>“정규 인원 1명으로는 불가능했던 아웃바운드를 RINDA가 대신해 줍니다.”</p>
            </div>
            <div className="use-case-card">
              <h3>B2B SaaS / 솔루션 기업</h3>
              <p>“시장 검증과 고객 개발(Discovery Call)을 빠르게 반복할 수 있게 되었습니다.”</p>
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <h2>요금제 안내</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>스타터</h3>
              <div className="price">
                ₩99,000<span>/월</span>
              </div>
              <ul>
                <li>월 최대 500건 아웃바운드 이메일</li>
                <li>최대 5개 언어 지원</li>
                <li>기본 리포트 제공</li>
                <li>이메일 템플릿 커스텀</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">
                도입 문의하기
              </Link>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">가장 인기</div>
              <h3>프로</h3>
              <div className="price">
                ₩399,000<span>/월</span>
              </div>
              <ul>
                <li>월 최대 2,000건 아웃바운드 이메일</li>
                <li>17개 언어 전체 지원</li>
                <li>고급 리포트 & AI 인사이트</li>
                <li>우선 지원</li>
                <li>CRM 연동</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                도입 상담 요청
              </Link>
            </div>
            <div className="pricing-card">
              <h3>엔터프라이즈</h3>
              <div className="price">맞춤 견적</div>
              <ul>
                <li>발송량·국가·조직 규모에 맞춘 플랜</li>
                <li>전담 CSM 배정</li>
                <li>맞춤 AI 모델 파인튜닝</li>
                <li>보안·컴플라이언스 요구사항 반영</li>
                <li>SLA 보장</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">
                세부 논의하기
              </Link>
            </div>
          </div>
        </div>

        <div className="agent-section">
          <div className="agent-text">
            <h2>지금 바로 RINDA와 이야기해 보세요</h2>
            <p>현재 영업 프로세스를 알려주시면, 어떤 부분을 자동화할 수 있을지 함께 설계해 드립니다.</p>
          </div>
          <div className="agent-wrapper">
            <AIAgentChat solutionName="RINDA 영업 에이전트" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rinda;
