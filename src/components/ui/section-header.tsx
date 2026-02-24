import React, { FC, useState } from 'react';
import { motion } from 'motion/react';
import { CONSTANTS } from '@/constants/Constant';

/**
 * セクションヘッダーコンポーネントのプロップス
 * @interface SectionHeaderProps
 * @property {React.ReactNode} label -表示するラベル
 * @property {React.ReactNode} [children] - 説明文（オプション）
 */
export interface SectionHeaderProps {
  label: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * セクションヘッダーコンポーネント
 * セクションのタイトルと説明を表示するヘッダー
 * @param {SectionHeaderProps} props - プロップ（label, children）
 * @returns {JSX.Element} セクションヘッダー要素
 */
export const SectionHeader: FC<SectionHeaderProps> = ({ label, children = null }) => {
  const [labelState, setLabelState] = useState(label);
  
  /**
   * ラベルテキストを置換する関数
   * @param {React.ReactNode} labelText - 置換対象のラベルテキスト
   */
  const replaceText = (labelText: React.ReactNode) => {
    switch(labelText) {
      case CONSTANTS.SECTION_LABELS.PROFILE:
        break;
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 sm:mb-16"
      onHoverStart={() => replaceText(label)}
      onHoverEnd={() => setLabelState(label)}
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider text-orange-500"
        style={{ fontFamily: 'Bebas Neue, sans-serif' }}
      >
        {labelState}
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
      {
        children && (
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{children}</p>
        )
      }
    </motion.div>
  );
};
