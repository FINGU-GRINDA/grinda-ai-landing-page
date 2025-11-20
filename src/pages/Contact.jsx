import React, { useState, useEffect, useRef } from 'react';
import '../styles/pages.css';
import './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formProgress, setFormProgress] = useState(0);
  
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  
  const suggestionRef = useRef(null);
  const formRefElement = useRef(null);

  // 회사명 자동완성 제안
  const companySuggestions = [
    '삼성전자', 'LG전자', 'SK하이닉스', '네이버', '카카오', 
    '현대자동차', '포스코', 'KT', 'LG화학', '신한은행'
  ];

  // 문의 유형 옵션
  const inquiryTypes = [
    { value: 'enterprise', label: '엔터프라이즈 도입', icon: '🏢' },
    { value: 'partnership', label: '파트너십', icon: '🤝' },
    { value: 'custom', label: '커스텀 구축', icon: '⚙️' },
    { value: 'demo', label: '데모 신청', icon: '🎯' },
    { value: 'other', label: '기타 문의', icon: '💬' }
  ];

  // 폼 진행률 계산
  useEffect(() => {
    const fields = ['name', 'email', 'company', 'message', 'inquiryType'];
    const filledFields = fields.filter(field => {
      const value = formData[field];
      return value && value.trim().length > 0;
    }).length;
    setFormProgress((filledFields / fields.length) * 100);
  }, [formData]);

  // 외부 클릭 시 제안 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 실시간 유효성 검사
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = '이름을 입력해주세요';
        } else if (value.trim().length < 2) {
          error = '이름은 2자 이상 입력해주세요';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = '이메일을 입력해주세요';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = '올바른 이메일 형식을 입력해주세요';
        } else if (!value.includes('@') || value.split('@')[0].length < 1) {
          error = '이메일 형식이 올바르지 않습니다';
        }
        break;
      case 'company':
        if (!value.trim()) {
          error = '회사명을 입력해주세요';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = '문의 내용을 입력해주세요';
        } else if (value.trim().length < 10) {
          error = '문의 내용은 10자 이상 입력해주세요';
        }
        break;
      case 'inquiryType':
        if (!value) {
          error = '문의 유형을 선택해주세요';
        }
        break;
      default:
        break;
    }

    return error;
  };

  // 필드 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // 실시간 유효성 검사
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }

    // 회사명 자동완성
    if (name === 'company' && value.length > 0) {
      const filtered = companySuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else if (name === 'company' && value.length === 0) {
      setShowSuggestions(false);
    }
  };

  // 필드 포커스 핸들러
  const handleFocus = (name) => {
    setFocusedField(name);
    setTouched(prev => ({ ...prev, [name]: true }));
    
    if (name === 'company' && formData.company.length > 0) {
      const filtered = companySuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(formData.company.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    }
  };

  // 필드 블러 핸들러
  const handleBlur = (name) => {
    setFocusedField(null);
    const error = validateField(name, formData[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // 제안 선택 핸들러
  const handleSuggestionClick = (suggestion) => {
    setFormData(prev => ({ ...prev, company: suggestion }));
    setShowSuggestions(false);
    setErrors(prev => ({ ...prev, company: '' }));
  };

  // 문의 유형 선택 핸들러
  const handleInquiryTypeSelect = (type) => {
    setFormData(prev => ({ ...prev, inquiryType: type }));
    setErrors(prev => ({ ...prev, inquiryType: '' }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 모든 필드 터치 처리
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // 전체 유효성 검사
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // 첫 번째 에러 필드로 스크롤
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      return;
    }

    // 제출 시작
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 실제 API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 성공 처리
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        inquiryType: ''
      });
      setTouched({});
      setFormProgress(0);

      // 3초 후 상태 초기화
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      // 폼 상단으로 스크롤
      if (formRefElement.current) {
        formRefElement.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container contact-page">
      {/* 헤더 섹션 */}
      <div 
        ref={headerRef}
        className={`page-header fade-in-section ${headerVisible ? 'is-visible' : ''}`}
      >
        <div className="header-content">
          <h1>도입 상담 문의</h1>
          <p>엔터프라이즈·파트너십·커스텀 구축이 필요하신가요? GRINDA AI 팀이 빠르게 상담해 드립니다.</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-value">24시간</span>
              <span className="stat-label">이내 응답</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100+</span>
              <span className="stat-label">기업 고객</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">1:1</span>
              <span className="stat-label">맞춤 상담</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-layout">
        {/* 연락처 정보 섹션 */}
        <div 
          ref={infoRef}
          className={`contact-info fade-in-section ${infoVisible ? 'is-visible' : ''}`}
        >
          <div className="info-section-header">
            <h2>연락처 정보</h2>
            <p>언제든지 연락주시면 친절하게 상담해드립니다.</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h3>오피스</h3>
              <p>서울특별시 강남구 테헤란로 427</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="info-link">
                지도에서 보기 →
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div className="info-content">
              <h3>이메일</h3>
              <p>contact@grinda.ai</p>
              <a href="mailto:contact@grinda.ai" className="info-link">
                이메일 보내기 →
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <h3>전화</h3>
              <p>+82 2-1234-5678</p>
              <a href="tel:+82212345678" className="info-link">
                전화 걸기 →
              </a>
            </div>
          </div>

          <div className="info-card highlight">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <h3>빠른 상담</h3>
              <p>긴급한 문의사항이 있으신가요? 전화로 바로 상담받으실 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 폼 섹션 */}
        <div 
          ref={formRef}
          className={`contact-form-wrapper fade-in-section ${formVisible ? 'is-visible' : ''}`}
        >
          <form 
            ref={formRefElement}
            className="contact-form" 
            onSubmit={handleSubmit}
            noValidate
          >
            {/* 진행률 표시 */}
            <div className="form-progress-container">
              <div className="form-progress-label">
                <span>폼 작성 진행률</span>
                <span className="progress-percentage">{Math.round(formProgress)}%</span>
              </div>
              <div className="form-progress-bar">
                <div 
                  className="form-progress-fill" 
                  style={{ width: `${formProgress}%` }}
                />
              </div>
            </div>

            {/* 성공/에러 메시지 */}
            {submitStatus === 'success' && (
              <div className="form-message success-message">
                <span className="message-icon">✓</span>
                <div className="message-content">
                  <strong>문의가 성공적으로 전송되었습니다!</strong>
                  <p>곧 담당자가 연락드리겠습니다. (24시간 이내)</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message error-message">
                <span className="message-icon">✕</span>
                <div className="message-content">
                  <strong>전송 중 오류가 발생했습니다.</strong>
                  <p>잠시 후 다시 시도해주시거나 이메일로 직접 문의해주세요.</p>
                </div>
              </div>
            )}

            {/* 문의 유형 선택 */}
            <div className="form-group">
              <label>
                문의 유형 <span className="required">*</span>
              </label>
              <div className="inquiry-type-grid">
                {inquiryTypes.map(type => (
                  <button
                    key={type.value}
                    type="button"
                    className={`inquiry-type-btn ${formData.inquiryType === type.value ? 'selected' : ''} ${errors.inquiryType && touched.inquiryType ? 'error' : ''}`}
                    onClick={() => handleInquiryTypeSelect(type.value)}
                  >
                    <span className="type-icon">{type.icon}</span>
                    <span className="type-label">{type.label}</span>
                  </button>
                ))}
              </div>
              {errors.inquiryType && touched.inquiryType && (
                <span className="error-message">{errors.inquiryType}</span>
              )}
            </div>

            {/* 이름 입력 */}
            <div className="form-group">
              <label htmlFor="name">
                이름 <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  placeholder="홍길동"
                  className={errors.name && touched.name ? 'error' : focusedField === 'name' ? 'focused' : ''}
                  autoComplete="name"
                />
                {formData.name && !errors.name && touched.name && (
                  <span className="input-check">✓</span>
                )}
              </div>
              {errors.name && touched.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            {/* 이메일 입력 */}
            <div className="form-group">
              <label htmlFor="email">
                업무용 이메일 <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  placeholder="name@company.com"
                  className={errors.email && touched.email ? 'error' : focusedField === 'email' ? 'focused' : ''}
                  autoComplete="email"
                />
                {formData.email && !errors.email && touched.email && (
                  <span className="input-check">✓</span>
                )}
              </div>
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
              {formData.email && !errors.email && touched.email && (
                <span className="success-hint">✓ 올바른 이메일 형식입니다</span>
              )}
            </div>

            {/* 회사명 입력 (자동완성) */}
            <div className="form-group">
              <label htmlFor="company">
                회사명 <span className="required">*</span>
              </label>
              <div className="input-wrapper" ref={suggestionRef}>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => handleFocus('company')}
                  onBlur={() => handleBlur('company')}
                  placeholder="회사 이름"
                  className={errors.company && touched.company ? 'error' : focusedField === 'company' ? 'focused' : ''}
                  autoComplete="organization"
                />
                {formData.company && !errors.company && touched.company && (
                  <span className="input-check">✓</span>
                )}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="suggestions-dropdown">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        className="suggestion-item"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.company && touched.company && (
                <span className="error-message">{errors.company}</span>
              )}
            </div>

            {/* 문의 내용 입력 */}
            <div className="form-group">
              <label htmlFor="message">
                문의 내용 <span className="required">*</span>
                <span className="char-count">
                  {formData.message.length} / 최소 10자
                </span>
              </label>
              <div className="textarea-wrapper">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  rows="6"
                  placeholder="필요하신 도입 형태나 상황을 간단히 적어 주세요. (예: 영업팀 규모, 타겟 시장, 현재 사용 중인 도구 등)"
                  className={errors.message && touched.message ? 'error' : focusedField === 'message' ? 'focused' : ''}
                />
                {formData.message && !errors.message && touched.message && (
                  <span className="input-check textarea-check">✓</span>
                )}
              </div>
              {errors.message && touched.message && (
                <span className="error-message">{errors.message}</span>
              )}
              {formData.message.length >= 10 && !errors.message && touched.message && (
                <span className="success-hint">✓ 충분한 내용이 입력되었습니다</span>
              )}
            </div>

            {/* 제출 버튼 */}
            <button 
              type="submit" 
              className={`btn-primary btn-block btn-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  전송 중...
                </>
              ) : (
                <>
                  문의 보내기
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>

            <p className="form-footer">
              제출하시면 <strong>개인정보 처리방침</strong>에 동의하는 것으로 간주됩니다.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
