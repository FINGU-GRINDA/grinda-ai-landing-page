import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './WhyGrinda.css';

const features = [
    {
        id: 'security',
        icon: '🔒',
        title: '은행 수준의 강력한 보안',
        desc: 'ISO 27001 인증 및 금융권 수준의 암호화로 고객님의 데이터를 안전하게 보호합니다.',
        tags: ['ISO 27001', 'End-to-End 암호화', 'On-Premise 지원']
    },
    {
        id: 'global',
        icon: '🌍',
        title: '언어 장벽 없는 글로벌 확장',
        desc: '17개국 언어를 지원하는 멀티모달 AI로 해외 시장 진출을 즉시 시작하세요.',
        tags: ['17개 언어', '실시간 번역', '현지화 최적화']
    },
    {
        id: 'impact',
        icon: '📈',
        title: '숫자로 증명되는 성과',
        desc: '평균 비용 절감 96%, 업무 속도 3배 향상. 실제 고객 데이터로 입증된 효율입니다.',
        tags: ['비용 절감 -96%', '속도 3x', '정확도 99.9%']
    }
];

const WhyGrinda = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="why-section" ref={ref}>
            <div className={`why-container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <div className="section-header">
                    <span className="section-badge">Why GRINDA</span>
                    <h2 className="section-title">
                        왜 업계 리더들은<br />
                        <span className="highlight">GRINDA</span>를 선택할까요?
                    </h2>
                    <p className="section-desc">
                        단순한 기능 제공을 넘어, 기업의 비즈니스 연속성과<br />
                        폭발적인 성장을 지원하는 핵심 파트너이기 때문입니다.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className={`feature-card card-${feature.id}`}>
                            <div className="card-icon-wrapper">
                                <span className="card-icon">{feature.icon}</span>
                            </div>
                            <h3 className="card-title">{feature.title}</h3>
                            <p className="card-desc">{feature.desc}</p>
                            <div className="card-tags">
                                {feature.tags.map((tag, idx) => (
                                    <span key={idx} className="feature-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyGrinda;
