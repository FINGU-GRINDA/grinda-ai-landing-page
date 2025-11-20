/**
 * 스크롤 이벤트 최적화를 위한 throttle 유틸리티
 * @param {Function} func - 실행할 함수
 * @param {number} wait - 대기 시간 (ms)
 * @returns {Function} throttle된 함수
 */
export const throttle = (func, wait = 100) => {
  let timeout;
  let previous = 0;

  return function executedFunction(...args) {
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
};

/**
 * requestAnimationFrame을 사용한 최적화된 throttle
 * @param {Function} func - 실행할 함수
 * @returns {Function} throttle된 함수
 */
export const rafThrottle = (func) => {
  let rafId = null;
  let lastArgs = null;

  return function executedFunction(...args) {
    lastArgs = args;
    
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func.apply(this, lastArgs);
        rafId = null;
        lastArgs = null;
      });
    }
  };
};

