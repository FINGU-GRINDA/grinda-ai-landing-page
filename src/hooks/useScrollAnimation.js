import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        // 기존 observer가 있으면 정리
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // IntersectionObserver 옵션 최적화
        const options = {
            threshold: threshold,
            rootMargin: '50px 0px -50px 0px', // 더 넓은 마진으로 조기 감지
            root: null // viewport 기준
        };

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // requestAnimationFrame으로 상태 업데이트 최적화
                        requestAnimationFrame(() => {
                            setIsVisible(true);
                            // 한 번만 실행되도록 unobserve
                            if (observerRef.current && entry.target) {
                                observerRef.current.unobserve(entry.target);
                            }
                        });
                    }
                });
            },
            options
        );

        const currentRef = ref.current;
        if (currentRef && observerRef.current) {
            observerRef.current.observe(currentRef);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};

export default useScrollAnimation;
