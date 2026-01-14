import React, { FC } from 'react';
import { motion } from 'motion/react';

export interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
}

export const SkillCard: FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 shadow-xl hover:border-orange-500 transition-all duration-300 group flex flex-col items-center justify-center text-center"
    >
      <div className="mb-4 text-5xl">
        {icon}
      </div>
      <h4 className="text-white tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {name}
      </h4>
    </motion.div>
  );
};
