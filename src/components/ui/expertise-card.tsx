import React, { FC } from 'react';
import { motion } from 'motion/react';
import { ExpertiseCardProps } from '@/types/components';

/**
 * 専門分野カードコンポーネント
 * タイトル、説明、アイコンを表示する専門分野カード
 * @param {ExpertiseCardProps} props - プロップ（title, description, icon）
 * @returns {JSX.Element} 専門分野カード要素
 */
export const ExpertiseCard: FC<ExpertiseCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-4 text-5xl text-orange-500">
        {icon}
      </div>
      <h4 className="text-white tracking-wider mb-2 text-lg text-left" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {title}
      </h4>
      <p className="text-gray-400 text-sm text-left">
        {description}
      </p>
    </motion.div>
  );
};
