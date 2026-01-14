import React, { FC } from 'react';
import { motion } from 'motion/react';

export interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

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
      <h4 className="text-white tracking-wider mb-2 text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {title}
      </h4>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </motion.div>
  );
};
