import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { rafThrottle } from '../utils/throttle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 라우트가 바뀌면 모바일 메뉴 닫기
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GRINDA AI
        </Link>

        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/ai-store" className="nav-link">
            AI 스토어
          </Link>
          <Link to="/rinda-tech" className="nav-link">
            RINDA 기술
          </Link>
          <Link to="/company" className="nav-link">
            회사 소개
          </Link>
          <Link to="/contact" className="nav-link">
            문의하기
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            도입 상담하기
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
