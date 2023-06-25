import React, { useState } from 'react';
import './ChatApp.css'

const generateRandomName = () => {
    const names = ["Alan", "Bob", "Carol", "Dean", "Elin"]
  
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      name: generateRandomName(),
      content: inputText,
      likes: 0,
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handleLikeMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, likes: message.likes + 1 } : message
      )
    );
  };

  return (
    <div>
        <h1 className='name'> By Sharandeep Reddy</h1>
      <div className="chat">
        {messages.map((message) => (
            <div className="message" key={message.id}>
                <span className="message-name">
            <span className="logo">{message.name.charAt(0)}</span>
            {message.name}:
            </span>
            <span className="message-content">{message.content}</span>
            <button className="like-button" onClick={() => handleLikeMessage(message.id)}>
            <span className="like-icon" height='50px'>&#x1F44D;</span>
            {message.likes} Likes
            </button>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
