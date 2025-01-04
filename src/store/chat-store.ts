import { create } from 'zustand';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

type ChatStore = {
  messages: Message[];
  addMessage: (content: string, sender: 'user' | 'ai') => void;
  isTyping: boolean;
  setIsTyping: (typing: boolean) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isTyping: false,
  addMessage: (content, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: crypto.randomUUID(),
          content,
          sender,
          timestamp: new Date(),
        },
      ],
    })),
  setIsTyping: (typing) => set({ isTyping: typing }),
}));