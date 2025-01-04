import React from 'react';
import { Settings, Shield, Bell, Terminal, Lock, Code } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SettingsTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const SettingsTabs: React.FC<SettingsTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: Tab[] = [
    { id: 'general', label: 'Geral', icon: <Settings size={20} /> },
    { id: 'security', label: 'Segurança', icon: <Shield size={20} /> },
    { id: 'notifications', label: 'Notificações', icon: <Bell size={20} /> },
    { id: 'connection', label: 'Conexão', icon: <Terminal size={20} /> },
    { id: 'privacy', label: 'Privacidade', icon: <Lock size={20} /> },
    { id: 'advanced', label: 'Avançado', icon: <Code size={20} /> },
  ];

  return (
    <div className="flex flex-col space-y-1 w-64 bg-gray-800 p-4 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:bg-gray-700'
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};