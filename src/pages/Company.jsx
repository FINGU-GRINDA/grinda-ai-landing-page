import React from 'react';
import CompanyHero from '../sections/CompanyHero';
import Values from '../sections/Values';
import CompanySection from '../sections/Company';
import Team from '../sections/Team';
import TrustedBy from '../sections/TrustedBy';
import '../styles/pages.css';

const Company = () => {
  return (
    <div className="company-page">
      {/* 팀 사진 Hero 섹션 */}
      <CompanyHero />
      
      {/* 핵심 가치 섹션 */}
      <Values />

      {/* 비전 및 통계 섹션 */}
      <CompanySection />

      {/* 팀 소개 섹션 */}
      <Team />

      {/* 파트너 섹션 */}
      <div style={{ padding: '6rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            fontWeight: 800, 
            marginBottom: '3rem',
            color: 'var(--color-text)'
          }}>
            함께하는 파트너
          </h2>
          <TrustedBy />
        </div>
      </div>
    </div>
  );
};

export default Company;
