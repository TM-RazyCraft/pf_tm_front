/**
 * Application-level type definitions
 */

export interface AppConfig {
  version: string;
  environment: 'development' | 'production';
}

export interface Theme {
  mode: 'light' | 'dark';
  primaryColor?: string;
  secondaryColor?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}
