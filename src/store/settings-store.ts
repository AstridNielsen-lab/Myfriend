import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserSettings } from '../types/settings';

interface SettingsStore {
  settings: UserSettings;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings: UserSettings = {
  general: {
    displayName: 'Myfriend',
    language: 'pt-BR',
    theme: 'dark',
  },
  security: {
    geolocationEnabled: false,
    googleAuthEnabled: false,
    deviceAccess: 'none',
    systemAccess: 'readonly',
  },
  notifications: {
    enabled: true,
    channels: ['chat'],
    alertLevel: 'critical',
  },
  privacy: {
    activityLogging: false,
  },
  developer: {
    devMode: false,
  },
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () => set({ settings: defaultSettings }),
    }),
    {
      name: 'myfriend-settings',
    }
  )
);