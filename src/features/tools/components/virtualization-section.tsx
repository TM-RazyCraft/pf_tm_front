import React, { FC } from 'react';
import { motion } from 'motion/react';
import { SkillCard } from '@/components/ui/skill-card';
import { VIRTUALIZATION_SKILLS } from '@/constants/Constant';

/**
 * 仮想化ツールセクション
 * 使用する仮想化ツール（Docker等）をカード表示するセクション
 * @returns {JSX.Element} 仮想化ツールセクション
 */
export const VirtualizationSection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-12"
    >
      <h3
        className="text-2xl sm:text-3xl tracking-wider text-white mb-6 flex items-center gap-3"
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        <div className="w-2 h-8 bg-orange-500" />
        VIRTUALIZATION
      </h3>
      <div 
        className={`grid sm:grid-cols-2 lg:grid-cols-${VIRTUALIZATION_SKILLS.length <= 2 ? 2 : VIRTUALIZATION_SKILLS.length} gap-4 sm:gap-6`}
      >
        {VIRTUALIZATION_SKILLS.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};
