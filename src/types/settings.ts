export type Theme = 'light' | 'dark' | 'neon' | 'custom';
export type Language = 'pt-BR' | 'en' | 'fr' | 'es';
export type DeviceAccess = 'all' | 'authorized' | 'none';
export type SystemAccess = 'readonly' | 'basic' | 'full';
export type NotificationChannel = 'email' | 'chat' | 'push';
export type AlertLevel = 'critical' | 'all';

export interface UserSettings {
  general: {
    displayName: string;
    language: Language;
    theme: Theme;
  };
  security: {
    geolocationEnabled: boolean;
    googleAuthEnabled: boolean;
    deviceAccess: DeviceAccess;
    systemAccess: SystemAccess;
  };
  notifications: {
    enabled: boolean;
    channels: NotificationChannel[];
    alertLevel: AlertLevel;
  };
  privacy: {
    activityLogging: boolean;
  };
  developer: {
    devMode: boolean;
  };
}