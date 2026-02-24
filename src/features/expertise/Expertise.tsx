import React, { FC } from 'react';
import { ExpertiseSection } from './components/expertise-section';
import { SectionHeader } from '@/components/ui/section-header';
import { CONSTANTS } from '@/constants/Constant';

/**
 * 専門分野セクション
 * 専門分野とスキルを表示するメインコンポーネント
 * @returns {JSX.Element} 専門分野セクション
 */
export const Expertise: FC = () => {
  return (
    <div className="section-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={CONSTANTS.SECTION_LABELS.EXPERTISE} />

        <ExpertiseSection />
      </div>
    </div>
  );
};
