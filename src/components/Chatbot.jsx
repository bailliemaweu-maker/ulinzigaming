import React, { useState } from 'react';
import '../styles/Chatbot.css';

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const responseData = {
        'hello': 'Hello! Welcome to Ulinzi Gaming. How can I help you today?',
        'hi': 'Hi there! 👋 Welcome to our gaming store. What can I assist you with?',
        'help': 'I can help you with:\n• Product information\n• Account issues\n• Payment concerns\n• Gaming competitions\n• General store inquiries\n\nWhat do you need?',
        'products': 'We have a wide range of gaming products available! Visit our "Get Products" section to browse all items.',
        'price': 'For specific product pricing, please check our products page or contact our support team.',
        'payment': 'We accept various payment methods. Visit our payment section to complete your purchase securely.',
        'competition': 'We host exciting gaming competitions! Check out our Competitions page for current events and prizes.',
        'signup': 'New here? Click on the Signup button in the navigation menu to create your account in just a few steps!',
        'signin': 'Already have an account? Use the Login button to access your account.',
        'login': 'Already have an account? Use the Login button to access your account.',
        'thank': 'You\'re welcome! 😊 Feel free to ask if you need anything else!',
        'thanks': 'You\'re welcome! 😊 Feel free to ask if you need anything else!',
        'bye': 'Goodbye! Thanks for visiting Ulinzi Gaming. See you soon! 🎮',
        'about': 'Ulinzi Gaming is your ultimate destination for gaming products and competitions. Learn more on our About Us page!',
        'shipping': 'For shipping information, please check our policies or contact our support team for details.',
        'return': 'For return and refund policies, please visit our FAQ section or contact customer support.',
        'contact': 'You can reach our support team through the contact information on our website.',
        'account': 'For account-related issues, please visit your account settings or contact our support team.',
        'default': 'That\'s a great question! For more specific information, please visit our Help section or contact our support team. 😊'
    };

    const getResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase().trim();

        for (const [keyword, response] of Object.entries(responseData)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        return responseData.default;
    };

    const handleSendMessage = () => {
        if (input.trim() === '') return;

        const userMessage = {
            id: Date.now(),
            text: input,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const botResponse = {
            id: Date.now() + 1,
            text: getResponse(input),
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, userMessage, botResponse]);
        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>🎮 Ulinzi Gaming Bot</h3>
                        <button className="close-btn" onClick={toggleChat}>✕</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.length === 0 && (
                            <div className="welcome-message">
                                <p>👋 Welcome! I'm here to help. Ask me anything about our products, competitions, or account!</p>
                            </div>
                        )}
                        {messages.map((message) => (
                            <div key={message.id} className={`message message-${message.sender}`}>
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <span className="message-time">{message.timestamp}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-input-area">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me something..."
                            className="chatbot-input"
                        />
                        <button onClick={handleSendMessage} className="send-btn">Send</button>
                    </div>
                </div>
            )}

            <button className="chatbot-toggle" onClick={toggleChat}>
                {isOpen ? '✕' : '💬'}
            </button>
        </div>
    );
}

export default Chatbot;
