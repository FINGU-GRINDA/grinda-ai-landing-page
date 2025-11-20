import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Values.css';

const values = [
    {
        icon: '🎯',
        title: '혁신',
        description: '최신 AI 기술을 통해 비즈니스의 불가능을 가능으로 만듭니다.'
    },
    {
        icon: '🤝',
        title: '공평한 기회',
        description: '기업의 규모와 자원에 상관없이 모든 기업이 AI를 활용할 수 있도록 합니다.'
    },
    {
        icon: '🚀',
        title: '성장',
        description: '고객의 성공이 우리의 성공입니다. 함께 성장하는 파트너가 되겠습니다.'
    },
    {
        icon: '💡',
        title: '혁신적 사고',
        description: '기존의 틀을 깨고 새로운 가능성을 탐구합니다.'
    }
];

const Values = () => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section 
            className={`values-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={ref}
        >
            <div className="values-container">
                <div className="values-header">
                    <span className="section-label">핵심 가치</span>
                    <h2 className="section-title">GRINDA AI가 추구하는 가치</h2>
                    <p className="section-subtitle">
                        우리는 단순한 기술 제공자가 아닌, 고객의 성장을 함께 만들어가는 파트너입니다.
                    </p>
                </div>

                <div className="values-grid">
                    {values.map((value, index) => (
                        <div 
                            key={index} 
                            className="value-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="value-icon">{value.icon}</div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;

