import React, { useState } from 'react';
import { SettingsTabs } from '../components/settings/SettingsTabs';
import { GeneralSettings } from '../components/settings/sections/GeneralSettings';
import { useSettingsStore } from '../store/settings-store';

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const { resetSettings } = useSettingsStore();

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      // Other sections will be added here
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Configurações</h1>
        <p className="text-gray-400 mt-2">
          Personalize sua experiência com Myfriend
        </p>
      </div>

      <div className="flex gap-8">
        <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex-1 bg-gray-800 p-6 rounded-lg">
          {renderContent()}
          
          <div className="mt-8 flex justify-end space-x-4">
            <button
              onClick={resetSettings}
              className="px-4 py-2 text-gray-400 hover:text-gray-300 transition-colors"
            >
              Restaurar Padrões
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};