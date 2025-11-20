import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './TrustedBy.css';

const metrics = [
    { value: '200%', label: '평균 ROI 상승률', desc: '도입 3개월 내 달성' },
    { value: '100+', label: '엔터프라이즈 고객', desc: '검증된 B2B 솔루션' },
    { value: '17+', label: '지원 언어', desc: '글로벌 비즈니스 커버리지' },
    { value: '24/7', label: '무중단 운영', desc: '365일 멈추지 않는 자동화' },
];

// 파트너사 로고 (예시)
const partners = [
    'Samsung', 'LG', 'SK Telecom', 'Hyundai', 'Naver', 'Kakao', 
    'Toss', 'Woowa Bros', 'Coupang', 'Krafton'
];

const TrustedBy = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="trusted-section" ref={ref}>
            <div className={`content-container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                
                {/* 핵심 지표 (Metrics) */}
                <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                        <div key={index} className="metric-card">
                            <h3 className="metric-value">{metric.value}</h3>
                            <div className="metric-info">
                                <span className="metric-label">{metric.label}</span>
                                <span className="metric-desc">{metric.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 파트너사 로고 슬라이더 */}
                <div className="partners-wrapper">
                    <p className="partners-title">이미 100개 이상의 혁신 기업이 GRINDA와 함께하고 있습니다</p>
                    <div className="partners-slider">
                        <div className="slide-track">
                            {/* 무한 스크롤 효과를 위해 로고 배열을 두 번 반복 */}
                            {[...partners, ...partners].map((partner, index) => (
                                <div key={index} className="partner-logo">
                                    <span className="logo-text">{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
