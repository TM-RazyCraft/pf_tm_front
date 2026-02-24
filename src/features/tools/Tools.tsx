import React, { FC } from 'react';
import { VirtualizationSection } from './components/virtualization-section';
import { DesignSection } from './components/design-section';
import { EditorsSection } from './components/editors-section';
import { AISection } from './components/ai-section';
import { SectionHeader } from '@/components/ui/section-header';
import { CONSTANTS } from '@/constants/Constant';

/**
 * ツールセクション
 * デザイン、エディタ、AI、仮想化ツールを一覧表示するメインコンポーネント
 * @returns {JSX.Element} ツールセクション
 */
export const Tools: FC = () => {
  return (
    <div className="section-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={CONSTANTS.SECTION_LABELS.TOOLS} />
        
        <DesignSection />
        <EditorsSection />
        <AISection />
        <VirtualizationSection />
      </div>
    </div>
  );
};
