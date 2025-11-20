import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">GRINDA AI</h2>
                        <p className="footer-description">
                            AI로 비즈니스의 한계를 넘어<br />
                            새로운 미래를 그립니다.<br />
                            기업 성장을 위한 최고의 AI 파트너.
                        </p>
                        <div className="footer-contact">
                            <p>서울시 강남구 테헤란로 123, 그린다타워 10층</p>
                            <p>이메일: contact@grinda.ai</p>
                            <p>전화: 02-1234-5678</p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link-column">
                            <h4>솔루션</h4>
                            <ul>
                                <li><a href="/solutions/youtube">YouTube 자동화</a></li>
                                <li><a href="/solutions/rinda">RINDA 에이전트</a></li>
                                <li><a href="/solutions/finance">Finance AX</a></li>
                                <li><a href="/ai-store">AI Store</a></li>
                            </ul>
                        </div>
                        <div className="link-column">
                            <h4>회사</h4>
                            <ul>
                                <li><a href="/company">회사 소개</a></li>
                                <li><a href="/rinda-tech">기술 소개</a></li>
                                <li><a href="/careers">채용</a></li>
                                <li><a href="/contact">문의하기</a></li>
                            </ul>
                        </div>
                        <div className="link-column">
                            <h4>소셜</h4>
                            <ul>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer">블로그</a></li>
                                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} GRINDA AI. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#privacy">개인정보처리방침</a>
                        <a href="#terms">이용약관</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
