import React, { FC } from 'react';
import { motion } from 'motion/react';
import { ExpertiseCard } from '@/components/ui/expertise-card';
import { EXPERTISE_SKILLS } from '@/constants/Constant';

/**
 * 専門分野セクションコンポーネント
 * 複数の専門分野カードをグリッド表示するセクション
 * @returns {JSX.Element} 専門分野セクション
 */
export const ExpertiseSection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h3
        className="text-2xl sm:text-3xl tracking-wider text-white mb-6 flex items-center gap-3"
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        <div className="w-2 h-8 bg-orange-500" />
        EXPERTISE
      </h3>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-8 sm:p-12 shadow-xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE_SKILLS.map((skill) => (
            <ExpertiseCard
              key={skill.title}
              {...skill}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
