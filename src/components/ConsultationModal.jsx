import React, { useState, useEffect } from 'react';
import './ConsultationModal.css';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    teamSize: '',
    useCase: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const questions = [
    {
      id: 'companyName',
      question: '안녕하세요! 👋 먼저 회사명을 알려주세요.',
      placeholder: '회사명을 입력해주세요',
      type: 'text'
    },
    {
      id: 'industry',
      question: '어떤 업종에서 활동하고 계신가요?',
      placeholder: '업종을 선택하거나 입력해주세요',
      type: 'select',
      options: ['B2B SaaS', '금융', '미디어', '제조업', '유통', '기타']
    },
    {
      id: 'teamSize',
      question: '영업팀 규모는 어느 정도인가요?',
      placeholder: '팀 규모를 선택해주세요',
      type: 'select',
      options: ['1-5명', '6-20명', '21-50명', '50명 이상']
    },
    {
      id: 'useCase',
      question: 'GRINDA AI로 가장 해결하고 싶은 과제는 무엇인가요?',
      placeholder: '예: 리드 발굴, 고객 분석, 이메일 자동화 등',
      type: 'textarea'
    },
    {
      id: 'name',
      question: '담당자분의 성함을 알려주세요.',
      placeholder: '이름을 입력해주세요',
      type: 'text'
    },
    {
      id: 'email',
      question: '연락 가능한 이메일 주소를 알려주세요.',
      placeholder: 'name@company.com',
      type: 'email'
    },
    {
      id: 'phone',
      question: '전화번호도 알려주시면 더 빠르게 연락드릴 수 있어요.',
      placeholder: '010-1234-5678 (선택사항)',
      type: 'tel',
      optional: true
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setFormData({
        companyName: '',
        industry: '',
        teamSize: '',
        useCase: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setShowSuccess(false);
    }
  }, [isOpen]);

  const handleInputChange = (value) => {
    const currentQuestion = questions[step];
    setFormData(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setStep(prev => prev + 1);
        setIsTyping(false);
      }, 500);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsTyping(true);
    setTimeout(() => {
      setShowSuccess(true);
      setIsTyping(false);
      
      // 실제로는 여기서 API 호출
      console.log('Form submitted:', formData);
      
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const handleSkip = () => {
    if (step < questions.length - 1) {
      handleNext();
    }
  };

  const currentQuestion = questions[step];
  const canProceed = formData[currentQuestion?.id]?.trim() || (currentQuestion?.optional && step === questions.length - 1);

  if (!isOpen) return null;

  return (
    <div className="consultation-modal-overlay" onClick={onClose}>
      <div className="consultation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {!showSuccess ? (
          <>
            <div className="modal-header">
              <div className="agent-avatar">🤖</div>
              <div className="agent-info">
                <h3>RINDA 상담 에이전트</h3>
                <p>맞춤형 솔루션을 제안해드릴게요</p>
              </div>
            </div>

            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>

            <div className="modal-body">
              <div className="question-container">
                <div className="question-bubble">
                  {isTyping ? (
                    <div className="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                  ) : (
                    <p>{currentQuestion.question}</p>
                  )}
                </div>
              </div>

              <div className="answer-container">
                {currentQuestion.type === 'select' ? (
                  <div className="option-grid">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option}
                        className={`option-btn ${formData[currentQuestion.id] === option ? 'selected' : ''}`}
                        onClick={() => handleInputChange(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : currentQuestion.type === 'textarea' ? (
                  <textarea
                    className="answer-input"
                    placeholder={currentQuestion.placeholder}
                    value={formData[currentQuestion.id] || ''}
                    onChange={(e) => handleInputChange(e.target.value)}
                    rows="4"
                    autoFocus
                  />
                ) : (
                  <input
                    type={currentQuestion.type}
                    className="answer-input"
                    placeholder={currentQuestion.placeholder}
                    value={formData[currentQuestion.id] || ''}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && canProceed && handleNext()}
                    autoFocus
                  />
                )}
              </div>

              <div className="modal-actions">
                {currentQuestion.optional && (
                  <button className="btn-skip" onClick={handleSkip}>
                    건너뛰기
                  </button>
                )}
                <button 
                  className="btn-primary btn-next" 
                  onClick={handleNext}
                  disabled={!canProceed}
                >
                  {step === questions.length - 1 ? '상담 신청하기' : '다음'}
                  <span>→</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="success-container">
            <div className="success-icon">✓</div>
            <h2>상담 신청이 완료되었습니다!</h2>
            <p>곧 담당자가 연락드리겠습니다.</p>
            <div className="success-details">
              <p>예상 소요 시간: <strong>24시간 이내</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;

