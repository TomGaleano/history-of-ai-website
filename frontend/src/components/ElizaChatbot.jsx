import React, { useState } from 'react';
import { askEliza } from '../services/api';

const ElizaChatbot = () => {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { author: 'User', text: message };
    setConversation([...conversation, userMessage]);

    try {
      const response = await askEliza(message);
      const elizaMessage = { author: 'ELIZA', text: response.data.reply };
      setConversation(prev => [...prev, elizaMessage]);
    } catch (error) {
      console.error('Error communicating with ELIZA:', error);
      const errorMessage = { author: 'ELIZA', text: 'I am having trouble connecting. Please try again later.' };
      setConversation(prev => [...prev, errorMessage]);
    }

    setMessage('');
  };

  return (
    <div>
      <h3>Talk to ELIZA</h3>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {conversation.map((entry, index) => (
          <div key={index}><strong>{entry.author}:</strong> {entry.text}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '80%', padding: '5px' }}
        />
        <button type="submit" style={{ width: '19%', padding: '5px' }}>Send</button>
      </form>
    </div>
  );
};

export default ElizaChatbot;
