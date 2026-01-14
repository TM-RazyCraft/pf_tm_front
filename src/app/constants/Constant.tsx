import React from 'react';
import { SkillCardProps } from '@/app/components/ui/skill-card';
import { ExpertiseCardProps } from '@/app/components/ui/expertise-card';

/**
 * 定数を定義します。
 */
export const CONSTANTS = {
  SECTION: {
    TOP: 'top',
    PROFILE: 'profile',
    SKILLS: 'skills',
  }
};
/**
 * 技術スキルのデータを定義します。
 */
export const TECHNICAL_SKILLS: SkillCardProps[] = [
  { 
    name: 'React / Next.js', 
    icon: (
      <svg className="text-cyan-400" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    )
  },
  { 
    name: 'TypeScript', 
    icon: (
      <div className="bg-blue-600 text-white font-bold px-3 py-2 text-2xl" style={{ fontFamily: 'monospace' }}>
        TS
      </div>
    )
  },
  { 
    name: 'JavaScript', 
    icon: (
      <div className="bg-yellow-400 text-black font-bold px-3 py-2 text-2xl" style={{ fontFamily: 'monospace' }}>
        JS
      </div>
    )
  },
  { 
    name: 'HTML / CSS', 
    icon: (
      <div className="text-orange-600 text-4xl font-bold">
        HTML5
      </div>
    )
  },
  { 
    name: 'Tailwind CSS', 
    icon: (
      <svg className="text-cyan-400" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path d="M12 6c-2 0-3.5 1-4.5 3 1.5-1 3-1.5 4.5-1 1 .3 1.7 1 2.5 1.8C15.5 10.8 16.8 12 20 12c2 0 3.5-1 4.5-3-1.5 1-3 1.5-4.5 1-1-.3-1.7-1-2.5-1.8C16.5 7.2 15.2 6 12 6zM7.5 12c-2 0-3.5 1-4.5 3 1.5-1 3-1.5 4.5-1 1 .3 1.7 1 2.5 1.8C11 16.8 12.3 18 15.5 18c2 0 3.5-1 4.5-3-1.5 1-3 1.5-4.5 1-1-.3-1.7-1-2.5-1.8C12 13.2 10.7 12 7.5 12z"/>
      </svg>
    )
  },
  { 
    name: 'Vue.js', 
    icon: (
      <svg className="text-green-500" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path d="M2 3h4l6 10 6-10h4L12 21z"/>
        <path d="M6 3l6 10 6-10h-3l-3 5-3-5z"/>
      </svg>
    )
  },
];
/**
 * ツール・スキルのデータを定義します。
 */
export const TOOLS_SKILLS: SkillCardProps[] = [
  { 
    name: 'Git / GitHub', 
    icon: (
      <svg className="text-white" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
      </svg>
    )
  },
  { 
    name: 'Figma', 
    icon: (
      <svg className="text-white" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <circle cx="16" cy="8" r="3" fill="#ff7262"/>
        <circle cx="16" cy="16" r="3" fill="#a259ff"/>
        <circle cx="8" cy="16" r="3" fill="#1abcfe"/>
        <circle cx="8" cy="8" r="3" fill="#0acf83"/>
        <circle cx="8" cy="8" r="3" fill="#f24e1e"/>
      </svg>
    )
  },
  { 
    name: 'Webpack / Vite', 
    icon: (
      <svg className="text-blue-400" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path d="M12 2l10 6v6l-10 6-10-6V8l10-6z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8l-4 2v4l4 2 4-2v-4l-4-2z"/>
      </svg>
    )
  },
  { 
    name: 'Docker', 
    icon: (
      <svg className="text-blue-500" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <rect x="5" y="10" width="3" height="3"/>
        <rect x="9" y="10" width="3" height="3"/>
        <rect x="13" y="10" width="3" height="3"/>
        <rect x="9" y="6" width="3" height="3"/>
        <rect x="13" y="6" width="3" height="3"/>
        <path d="M20 11c-.5-2-2-3-4-3h-1v-1c0-1-1-2-2-2H9c-1 0-2 1-2 2v1H6c-2 0-3.5 1-4 3-.5 2 .5 4 2 5h16c1.5-1 2.5-3 2-5z" opacity="0.5"/>
      </svg>
    )
  },
];
/**
 * エディタースキルのデータを定義します。
 */
export const EDITOR_SKILLS: SkillCardProps[] = [
  { 
    name: 'VSCode', 
    icon: (
      <svg className="text-blue-500" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path d="M17.5 2l-12 12L2 10.5 0 12l5.5 5.5L17.5 6l4 1.5V2z"/>
        <path d="M17.5 22l4-1.5v-5.5l-4 1.5-12-12L2 6.5 5.5 10l12 12z" opacity="0.7"/>
      </svg>
    )
  },
  { 
    name: 'Cursor', 
    icon: (
      <div className="text-white text-3xl font-bold">
        ⌘
      </div>
    )
  },
  { 
    name: 'Antigravity', 
    icon: (
      <svg className="text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48" strokeWidth="2">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 4v16M4 12h16"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: 'Sublime Text 3', 
    icon: (
      <svg className="text-orange-400" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M8 9h8M8 12h8M8 15h5" stroke="black" strokeWidth="1.5"/>
      </svg>
    )
  },
];
/**
 * AIツールスキルのデータを定義します。
 */
export const AI_SKILLS: SkillCardProps[] = [
  { 
    name: 'ChatGPT', 
    icon: (
      <svg className="text-green-400" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 10h8M8 14h8" stroke="black" strokeWidth="2"/>
        <circle cx="9" cy="10" r="1" fill="black"/>
        <circle cx="15" cy="10" r="1" fill="black"/>
      </svg>
    )
  },
  { 
    name: 'GitHub Copilot', 
    icon: (
      <svg className="text-white" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    )
  },
  { 
    name: 'Gemini', 
    icon: (
      <svg className="text-blue-400" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <path d="M12 2l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"/>
      </svg>
    )
  },
  { 
    name: 'Claude', 
    icon: (
      <svg className="text-orange-300" fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
        <rect x="6" y="6" width="12" height="12" rx="3"/>
        <circle cx="10" cy="11" r="1.5"/>
        <circle cx="14" cy="11" r="1.5"/>
        <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" stroke="white" fill="none" strokeWidth="1.5"/>
      </svg>
    )
  },
];
/**
 * 専門分野・スキルのデータを定義します。
 */
export const EXPERTISE_SKILLS: ExpertiseCardProps[] = [
  {
    title: 'Front-end Architecture',
    description: 'Develop mootles for front-end architecture',
    icon: (
      <svg className="text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <path d="M8 8h3M8 16h3"/>
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    description: 'Develop anattmelody of content and UI/UX design',
    icon: (
      <svg className="text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M9 9h6M9 13h6M9 17h3"/>
        <circle cx="17" cy="7" r="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Performance Optimization',
    description: 'Iterates performance optimization',
    icon: (
      <svg className="text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    )
  },
  {
    title: 'Responsive Design',
    description: 'Emproves nava toko hrives of responsive design',
    icon: (
      <svg className="text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48" strokeWidth="1.5">
        <rect x="4" y="6" width="16" height="12" rx="1"/>
        <rect x="9" y="10" width="6" height="4" rx="0.5"/>
      </svg>
    )
  },
  {
    title: 'State Management',
    description: 'Obiyu management to state management',
    icon: (
      <svg className="text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2"/>
        <circle cx="12" cy="12" r="8"/>
      </svg>
    )
  },
];