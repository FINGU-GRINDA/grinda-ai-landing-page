import React, { useState, useEffect, useRef } from 'react';
import './BackToTop.css';
import { rafThrottle } from '../utils/throttle';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const rafIdRef = useRef(null);

    const toggleVisibility = rafThrottle(() => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollY > 300);
    });

    const scrollToTop = () => {
        // 기존 애니메이션 취소
        if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
        }

        const startPosition = window.pageYOffset || document.documentElement.scrollTop;
        const startTime = performance.now();
        const duration = 500; // 500ms 동안 스크롤

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeInOutCubic easing 함수
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition * (1 - ease));

            if (progress < 1) {
                rafIdRef.current = requestAnimationFrame(animateScroll);
            } else {
                rafIdRef.current = null;
            }
        };

        rafIdRef.current = requestAnimationFrame(animateScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [toggleVisibility]);

    return (
        <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            ↑
        </div>
    );
};

export default BackToTop;
