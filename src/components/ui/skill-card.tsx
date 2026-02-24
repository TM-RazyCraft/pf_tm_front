import React, { FC } from 'react';
import { motion } from 'motion/react';
import { SkillCardProps } from '@/types/components';

/**
 * スキルカードコンポーネント
 * スキル名、アイコン、習熟度をプログレスバーで表示するカード
 * @param {SkillCardProps} props - プロップ（name, icon, proficiency）
 * @returns {JSX.Element} スキルカード要素
 */
export const SkillCard: FC<SkillCardProps> = ({ name, icon, proficiency }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 shadow-xl hover:border-orange-500 transition-all duration-300 group flex flex-col justify-between text-center min-h-[140px]"
    >
      {icon && (
        <div className="mb-4 text-5xl flex justify-center">
          {icon}
        </div>
      )}
      <h4 className="text-white tracking-wider text-xl font-semibold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {name}
      </h4>
      
      {proficiency !== undefined && (
        <div className="w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400 font-medium">経験値</span>
            <span className="text-sm font-bold text-orange-500">{proficiency}%</span>
          </div>
          <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full shadow-lg"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};
