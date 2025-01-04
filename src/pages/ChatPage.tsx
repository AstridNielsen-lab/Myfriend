import React, { useEffect } from 'react';
import { ChatMessage } from '../components/chat/ChatMessage';
import { ChatInput } from '../components/chat/ChatInput';
import { useChatStore } from '../store/chat-store';
import { useChat } from '../hooks/useChat';

export const ChatPage: React.FC = () => {
  const { messages, isTyping } = useChatStore();
  const { sendMessage, error } = useChat();

  useEffect(() => {
    // Send initial message if chat is empty
    if (messages.length === 0) {
      sendMessage("Iniciar monitoramento de segurança");
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
          <div className="p-4 text-gray-400">Myfriend está analisando...</div>
        )}
        {error && (
          <div className="p-4 text-red-400">
            Erro de comunicação. Por favor, tente novamente.
          </div>
        )}
      </div>
      <ChatInput onSend={sendMessage} disabled={isTyping} />
    </div>
  );
};