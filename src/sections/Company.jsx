import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Company.css';

const Company = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="company-section" ref={ref}>
            <div className={`company-container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                
                {/* 비전 영역 */}
                <div className="vision-area">
                    <div className="vision-label">GRINDA AI 비전</div>
                    <h2 className="vision-statement">
                        우리는 크기와 자원에 상관없이,<br />
                        <span className="text-gradient">모든 기업이 AI를 통해 성장하는 세상</span>을<br />
                        만들어갑니다.
                    </h2>
                    <p className="vision-desc">
                        기술의 평준화를 통해 비즈니스의 불가능을 가능으로 바꿉니다.<br />
                        GRINDA AI는 당신의 가장 든든한 AI 파트너입니다.
                    </p>
                </div>

                {/* 핵심 통계 */}
                <div className="stats-area">
                    <div className="stat-card">
                        <div className="stat-number">17+</div>
                        <div className="stat-label">지원 언어</div>
                        <div className="stat-desc">전 세계 기업과 소통합니다</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">96%</div>
                        <div className="stat-label">평균 비용 절감</div>
                        <div className="stat-desc">반복 업무 자동화로 달성</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">100+</div>
                        <div className="stat-label">도입 기업 수</div>
                        <div className="stat-desc">신뢰받는 AI 솔루션</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">무중단 운영</div>
                        <div className="stat-desc">언제나 함께하는 파트너</div>
                    </div>
                </div>

                {/* 연혁/마일스톤 영역 */}
                <div className="history-area">
                    <div className="history-card">
                        <div className="year-badge">2024</div>
                        <ul className="milestones">
                            <li>
                                <span className="month">01월</span>
                                <span className="content">CES 2024 참가 및 AI 솔루션 쇼케이스</span>
                            </li>
                            <li>
                                <span className="month">03월</span>
                                <span className="content">Global GenAI Hackathon Runner-up 수상</span>
                            </li>
                            <li>
                                <span className="month">06월</span>
                                <span className="content">엔터프라이즈 고객 100개사 돌파</span>
                            </li>
                        </ul>
                    </div>

                    <div className="history-card">
                        <div className="year-badge">2023</div>
                        <ul className="milestones">
                            <li>
                                <span className="month">05월</span>
                                <span className="content">중소벤처기업부 TIPS 프로그램 선정</span>
                            </li>
                            <li>
                                <span className="month">09월</span>
                                <span className="content">GRINDA AI 법인 설립</span>
                            </li>
                            <li>
                                <span className="month">12월</span>
                                <span className="content">Seed 투자 유치 (Strong Ventures)</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            
            {/* 배경 데코레이션 */}
            <div className="company-bg-glow"></div>
        </section>
    );
};

export default Company;
