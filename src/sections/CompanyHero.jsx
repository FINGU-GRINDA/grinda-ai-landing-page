import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './CompanyHero.css';

const CompanyHero = () => {
    const [ref, isVisible] = useScrollAnimation(0.2);

    return (
        <section 
            className={`company-hero fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={ref}
        >
            <div className="company-hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-label">GRINDA AI 팀</span>
                        <h1 className="hero-title">
                            함께 성장하는<br />
                            <span className="text-gradient">열정적인 팀</span>
                        </h1>
                        <p className="hero-description">
                            다양한 배경과 전문성을 가진 팀원들이 모여<br />
                            모든 기업이 AI로 공평하게 성장할 수 있는 세상을 만들어갑니다.
                        </p>
                    </div>
                </div>
                
                <div className="hero-image-wrapper">
                    <div className="image-container">
                        <img 
                            src="/team-photo.jpg" 
                            alt="GRINDA AI 팀 사진 - 함께 성장하는 열정적인 팀"
                            className="team-photo"
                            loading="lazy"
                            onError={(e) => {
                                // 이미지 로드 실패 시 placeholder 표시
                                const img = e.target;
                                const placeholder = img.nextElementSibling;
                                if (img) img.style.display = 'none';
                                if (placeholder) placeholder.style.display = 'flex';
                            }}
                        />
                        <div className="image-placeholder" style={{ display: 'none' }}>
                            <div className="placeholder-content">
                                <div className="placeholder-icon-wrapper">
                                    <span className="placeholder-icon">👥</span>
                                </div>
                                <p className="placeholder-text">팀 사진</p>
                                <p className="placeholder-hint">
                                    <strong>이미지 추가 방법:</strong><br />
                                    팀 사진을 <code>public/team-photo.jpg</code>로 저장하세요
                                </p>
                                <div className="placeholder-specs">
                                    <span>권장: 1200x900px 이상</span>
                                    <span>형식: JPG, PNG, WebP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-overlay"></div>
                </div>
            </div>
            
            {/* 배경 그라디언트 */}
            <div className="hero-bg-gradient"></div>
        </section>
    );
};

export default CompanyHero;

