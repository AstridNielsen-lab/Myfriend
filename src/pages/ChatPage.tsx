import React, { useEffect } from 'react';
import { ChatMessage } from '../components/chat/ChatMessage';
import { ChatInput } from '../components/chat/ChatInput';
import { useChatStore } from '../store/chat-store';

export const ChatPage: React.FC = () => {
  const { messages, addMessage, isTyping, setIsTyping } = useChatStore();

  const handleSendMessage = async (content: string) => {
    addMessage(content, 'user');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      addMessage("I am monitoring all systems to ensure Juliette's safety. How can I assist you?", 'ai');
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    // Initial message
    if (messages.length === 0) {
      addMessage(
        "Conexão com a API estabelecida com sucesso. Estou pronta para proteger Juliette Psicose e monitorar seus dispositivos.",
        'ai'
      );
    }
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        ))}
        {isTyping && (
          <div className="p-4 text-gray-400">Myfriend is thinking...</div>
        )}
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  );
};