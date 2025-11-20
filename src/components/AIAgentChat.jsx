import React, { useState, useEffect, useRef } from 'react';
import './AIAgentChat.css';

const AIAgentChat = ({ solutionName }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: `안녕하세요, RINDA입니다. "${solutionName}" 도입에 대해 무엇이 가장 궁금하신가요?`,
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                type: 'bot',
                text: '좋은 질문입니다. 현재 팀 규모와 타깃 시장을 알려주시면, 예상 효과와 추천 도입 방안을 안내해 드릴게요.',
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="ai-agent-chat glass-card">
            <div className="chat-header">
                <div className="agent-avatar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="agent-info">
                    <span className="agent-name">RINDA Agent</span>
                    <span className="agent-status">온라인</span>
                </div>
            </div>
            <div className="chat-body">
                {messages.map((msg) => (
                    <div key={msg.id} className={`chat-message ${msg.type}`}>
                        <div className="message-bubble">{msg.text}</div>
                    </div>
                ))}
                {isTyping && (
                    <div className="chat-message bot">
                        <div className="typing-indicator">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form className="chat-input-area" onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="자유롭게 질문을 입력해 주세요."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="btn-send">
                    전송
                </button>
            </form>
        </div>
    );
};

export default AIAgentChat;
