import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Team.css';

const teamMembers = [
    {
        name: '강호진',
        role: 'CEO',
        bio: 'KAIST 출신. 기업의 자동화된 성장 비전을 이끌어갑니다.',
        image: '👨‍💼'
    },
    {
        name: '김정태',
        role: 'COO',
        bio: '운영 전략과 비즈니스 성장을 책임집니다.',
        image: '👨‍💼'
    },
    {
        name: '이철희',
        role: 'CTO',
        bio: '대규모 언어 모델과 분산 시스템 전문가입니다.',
        image: '👩‍💻'
    }
];

const Team = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className={`team-section fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
            <div className="team-container">
                <div className="team-header">
                    <h2 className="section-title">팀 소개</h2>
                    <p className="section-subtitle">
                        미래의 업무 방식을 만들어가는 연구자, 엔지니어, 그리고 꿈꾸는 사람들의 팀입니다.
                    </p>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="member-image-wrapper">
                                <span className="member-emoji">{member.image}</span>
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <span className="member-role">{member.role}</span>
                            <p className="member-bio">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
