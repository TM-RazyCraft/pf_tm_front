import React, { FC } from 'react';
import { TechnicalSkillsSection } from './components/technical-skills-section';
import { HybridAppSection } from './components/hybrid-app-section';
import { SectionHeader } from '@/components/ui/section-header';
import { CONSTANTS } from '@/constants/Constant';

/**
 * スキルセクション
 * 技術スキルとハイブリッドアプリスキルを表示するメインコンポーネント
 * @returns {JSX.Element} スキルセクション
 */
export const Skills: FC = () => {
  return (
    <div className="section-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={CONSTANTS.SECTION_LABELS.SKILLS}>
          開発に使用した技術スタック<br />
          <span className="text-xs">案件に使用して開発した場合を100%</span>
        </SectionHeader>

        <TechnicalSkillsSection />
        <HybridAppSection />
      </div>
    </div>
  );
};
