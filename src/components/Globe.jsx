import React from 'react';
import './Globe.css';

const Globe = () => {

  // 주요 도시/국가 위치 (위도/경도 기반)
  const locations = [
    { name: 'Seoul', lat: 37.5665, lng: 126.9780, size: 'large' },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503, size: 'medium' },
    { name: 'New York', lat: 40.7128, lng: -74.0060, size: 'large' },
    { name: 'London', lat: 51.5074, lng: -0.1278, size: 'medium' },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, size: 'medium' },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093, size: 'small' },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708, size: 'small' },
    { name: 'São Paulo', lat: -23.5505, lng: -46.6333, size: 'small' },
  ];

  const convertLatLngToPosition = (lat, lng, radius = 100) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    return { x, y, z };
  };

  return (
    <div className="globe-container">
      <div className="globe-wrapper">
        <div className="globe-sphere">
          {/* 지구본 그리드 */}
          <div className="globe-grid">
            {[...Array(12)].map((_, i) => (
              <div key={`lat-${i}`} className="latitude-line" style={{ '--index': i }} />
            ))}
            {[...Array(24)].map((_, i) => (
              <div key={`lng-${i}`} className="longitude-line" style={{ '--index': i }} />
            ))}
          </div>

          {/* 대륙 윤곽 */}
          <div className="continents">
            <div className="continent asia" />
            <div className="continent americas" />
            <div className="continent europe" />
            <div className="continent africa" />
            <div className="continent oceania" />
          </div>

          {/* 연결선 */}
          <div className="connection-lines">
            {locations.slice(0, 4).map((loc, idx) => {
              const pos = convertLatLngToPosition(loc.lat, loc.lng, 105);
              return (
                <div
                  key={`line-${idx}`}
                  className="connection-line"
                  style={{
                    '--x': `${pos.x}px`,
                    '--y': `${pos.y}px`,
                    '--z': `${pos.z}px`,
                    '--delay': `${idx * 0.3}s`
                  }}
                />
              );
            })}
          </div>

          {/* 위치 마커 */}
          {locations.map((loc, idx) => {
            const pos = convertLatLngToPosition(loc.lat, loc.lng, 105);
            return (
              <div
                key={loc.name}
                className={`location-marker ${loc.size}`}
                style={{
                  '--x': `${pos.x}px`,
                  '--y': `${pos.y}px`,
                  '--z': `${pos.z}px`,
                  '--delay': `${idx * 0.2}s`
                }}
              >
                <div className="marker-dot" />
                <div className="marker-pulse" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 플로팅 정보 카드들 */}
      <div className="globe-floating-cards">
        <div className="floating-info-card card-1">
          <span className="card-icon">🌍</span>
          <div className="card-content">
            <div className="card-title">17개국 언어 지원</div>
            <div className="card-subtitle">글로벌 비즈니스 확장</div>
          </div>
        </div>
        <div className="floating-info-card card-2">
          <span className="card-icon">⚡</span>
          <div className="card-content">
            <div className="card-title">24/7 자동 운영</div>
            <div className="card-subtitle">전 세계 어디서나</div>
          </div>
        </div>
        <div className="floating-info-card card-3">
          <span className="card-icon">📈</span>
          <div className="card-content">
            <div className="card-title">실시간 분석</div>
            <div className="card-subtitle">데이터 기반 인사이트</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globe;

