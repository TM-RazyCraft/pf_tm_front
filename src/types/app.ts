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

export type SectionId = 'top' | 'expertise' | 'skills' | 'tools' | 'profile';

export interface AppConstants {
  SECTION: {
    TOP: SectionId;
    EXPERTISE: SectionId;
    SKILLS: SectionId;
    TOOLS: SectionId;
    PROFILE: SectionId;
  },
  SECTION_LABELS: {
    PROFILE: string;
    SKILLS: string;
    TOOLS: string;
    EXPERTISE: string;
  },
}
