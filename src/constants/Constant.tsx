import React from 'react';
import { SkillCardProps, ExpertiseCardProps } from '@/types/components';
import { AppConstants } from '@/types/app';

import editorVscodeImage from '@/assets/images/editor/vscode.svg';
import editorAntigravityImage from '@/assets/images/editor/antigravity.webp'
import editorSublimeTextImage from '@/assets/images/editor/sublimeText3.webp'

import aiChatGPTImage from '@/assets/images/ai/chatgpt.svg';
import aiCopilotImage from '@/assets/images/ai/copilot.svg';
import aiGeminiImage from '@/assets/images/ai/gemini.svg';
import aiClaudeImage from '@/assets/images/ai/claude.svg';

import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { FaProjectDiagram, FaPalette, FaCompass, FaUsers } from "react-icons/fa";

import virtualizationDockerImage from '@/assets/images/virtualization/docker.svg';
/**
 * 定数を定義します。
 */
export const CONSTANTS: AppConstants = {
  SECTION: {
    TOP: 'top',
    PROFILE: 'profile',
    SKILLS: 'skills',
    TOOLS: 'tools',
    EXPERTISE: 'expertise',
  },
  SECTION_LABELS: {
    PROFILE: 'PROFILE',
    SKILLS: 'SKILLS',
    TOOLS: 'TOOLS',
    EXPERTISE: 'EXPERTISE',
  },
};
/**
 * 技術スキルのデータを定義します。
 */
export const TECHNICAL_SKILLS: SkillCardProps[] = [
  { 
    name: 'Angular',
    proficiency: 100
  },
  { 
    name: 'React',
    proficiency: 100
  },
  { 
    name: 'Vue',
    proficiency: 100
  },
  { 
    name: 'NextJS',
    proficiency: 80
  },
  { 
    name: 'NuxtJS',
    proficiency: 60
  },
  { 
    name: 'TypeScript',
    proficiency: 90
  },
  { 
    name: 'JavaScript',
    proficiency: 100
  },
  { 
    name: 'HTML / CSS / SCSS',
    proficiency: 100
  },
  { 
    name: 'Tailwind CSS',
    proficiency: 50
  },
];
/**
 * ハイブリッドアプリスキルのデータを定義します。
 */
export const HYBRID_APP_SKILLS: SkillCardProps[] = [
  { 
    name: 'Capacitor',
    proficiency: 100
  },
  { 
    name: 'Cordova',
    proficiency: 100
  },
  { 
    name: 'React Native',
    proficiency: 10
  }
];
/**
 * 仮想化スキルのデータを定義します。
 */
export const VIRTUALIZATION_SKILLS: SkillCardProps[] = [
  { 
    name: 'Docker',
    icon: (
      <img src={virtualizationDockerImage} alt="Docker" className="w-12 h-12 mx-auto" />
    )
  },
];
/**
 * デザインスキルのデータを定義します。
 */
export const DESIGN_SKILLS: SkillCardProps[] = [
  { 
    name: 'Figma',
    icon: (
      <SiFigma className="w-12 h-12 mx-auto fill-white" />
    ) 
  },
  { 
    name: 'Photoshop',
    icon: (
      <SiAdobephotoshop className="w-12 h-12 mx-auto fill-white" />
    )
  },
  { 
    name: 'Illustrator',
    icon: (
      <SiAdobeillustrator className="w-12 h-12 mx-auto fill-white" />
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
      <img src={editorVscodeImage} alt="VSCode" className="w-12 h-12 mx-auto" />
    )
  },
  { 
    name: 'Antigravity',
    icon: (
      <img src={editorAntigravityImage} alt="Antigravity" className="w-12 h-12 mx-auto" />
    )
  },
  { 
    name: 'Sublime Text 3',
    icon: (
      <img src={editorSublimeTextImage} alt="SublimeText3" className="w-12 h-12 mx-auto" />
    )
  },
];
/**
 * AIツールスキルのデータを定義します。
 */
export const AIS: SkillCardProps[] = [
  {
    name: 'GitHub Copilot',
    icon: (
      <img src={aiCopilotImage} alt="GitHub Copilot" className="w-12 h-12 mx-auto" />
    )
  },
  { 
    name: 'Claude Code',
    icon: (
      <img src={aiClaudeImage} alt="Claude Code" className="w-12 h-12 mx-auto" />
    )
  },
  { 
    name: 'Gemini',
    icon: (
      <img src={aiGeminiImage} alt="Gemini" className="w-12 h-12 mx-auto" />
    )
  },
  { 
    name: 'ChatGPT',
    icon: (
      <img src={aiChatGPTImage} alt="ChatGPT" className="w-12 h-12 mx-auto" />
    )
  },
];
/**
 * 専門分野・スキルのデータを定義します。
 */
export const EXPERTISE_SKILLS: ExpertiseCardProps[] = [
  {
    title: 'アーキテクチャ',
    description: 'ゼロベースからのフロントエンドアーキテクチャの設計・実装',
    icon: (
      <FaProjectDiagram className="text-orange-500 text-4xl" />
    )
  },
  {
    title: 'UI/UX',
    description: 'ユーザーを中心としたUI/UXデザインの提案・実装',
    icon: (
      <FaPalette className="text-orange-500 text-4xl" />
    )
  },
  {
    title: 'ディレクション',
    description: 'お客様への仕様・UI/UXの提案、ディレクター・システム・デザイナーとの連携や調整及びタスク・スケジュール管理',
    icon: (
      <FaCompass className="text-orange-500 text-4xl" />
    )
  },
  {
    title: 'マネージメント',
    description: 'チームのアサイン管理・開発のマスタープラン＆ロードマップの決定・成長管理及び調整',
    icon: (
      <FaUsers className="text-orange-500 text-4xl" />
    )
  },
];