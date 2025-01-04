import React from 'react';
import { useSettingsStore } from '../../../store/settings-store';
import { Language, Theme } from '../../../types/settings';

export const GeneralSettings: React.FC = () => {
  const { settings, updateSettings } = useSettingsStore();

  const languages: { value: Language; label: string }[] = [
    { value: 'pt-BR', label: 'Português' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'es', label: 'Español' },
  ];

  const themes: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Claro' },
    { value: 'dark', label: 'Escuro' },
    { value: 'neon', label: 'Neon' },
    { value: 'custom', label: 'Personalizado' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Nome de Exibição
        </label>
        <input
          type="text"
          value={settings.general.displayName}
          onChange={(e) =>
            updateSettings({
              general: { ...settings.general, displayName: e.target.value },
            })
          }
          className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Idioma
        </label>
        <select
          value={settings.general.language}
          onChange={(e) =>
            updateSettings({
              general: {
                ...settings.general,
                language: e.target.value as Language,
              },
            })
          }
          className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Tema Visual
        </label>
        <select
          value={settings.general.theme}
          onChange={(e) =>
            updateSettings({
              general: { ...settings.general, theme: e.target.value as Theme },
            })
          }
          className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {themes.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};