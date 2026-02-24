import React, { FC } from 'react';
import { motion } from 'motion/react';
import { SkillCard } from '@/components/ui/skill-card';
import { AIS } from '@/constants/Constant';

/**
 * AIツールセクション
 * 使用するAIツール（ChatGPT、Claude等）をカード表示するセクション
 * @returns {JSX.Element} AIツールセクション
 */
export const AISection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.38 }}
      className="mb-12"
    >
      <h3
        className="text-2xl sm:text-3xl tracking-wider text-white mb-6 flex items-center gap-3"
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        <div className="w-2 h-8 bg-orange-500" />
        AI
      </h3>
      <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6`}>
        {AIS.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};
