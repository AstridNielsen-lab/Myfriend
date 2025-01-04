import React from 'react';
import { cn } from '../../lib/utils';
import { Bot, User } from 'lucide-react';

type ChatMessageProps = {
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  sender,
  timestamp,
}) => {
  const isAI = sender === 'ai';

  return (
    <div
      className={cn(
        'flex w-full gap-3 p-4',
        isAI ? 'bg-gray-900' : 'bg-gray-800'
      )}
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md',
          isAI ? 'bg-blue-600' : 'bg-gray-600'
        )}
      >
        {isAI ? <Bot size={18} /> : <User size={18} />}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className={cn('font-semibold', isAI ? 'text-blue-400' : 'text-gray-300')}>
            {isAI ? 'Myfriend' : 'You'}
          </span>
          <span className="text-xs text-gray-500">
            {timestamp.toLocaleTimeString()}
          </span>
        </div>
        <p className="mt-1 text-gray-100">{content}</p>
      </div>
    </div>
  );
};