import { useState, useCallback } from 'react';
import { generateResponse } from '../lib/api/gemini';
import { useChatStore } from '../store/chat-store';

export function useChat() {
  const { messages, addMessage, setIsTyping } = useChatStore();
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    try {
      // Add user message
      addMessage(content, 'user');
      setIsTyping(true);
      setError(null);

      // Generate AI response
      const response = await generateResponse(messages);
      addMessage(response, 'ai');
    } catch (err) {
      setError('Failed to generate response');
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  }, [messages, addMessage, setIsTyping]);

  return { sendMessage, error };
}