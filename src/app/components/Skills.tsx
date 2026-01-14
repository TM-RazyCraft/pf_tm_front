import React, { FC } from 'react';
import { motion } from 'motion/react';
import { SkillCard } from './ui/skill-card';
import { ExpertiseCard } from './ui/expertise-card';
import { TECHNICAL_SKILLS, TOOLS_SKILLS, EDITOR_SKILLS, AI_SKILLS, EXPERTISE_SKILLS } from '@/app/constants/Constant';

export const Skills: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider text-orange-500"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            技術スタック & エクスパティーズ
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3
            className="text-2xl sm:text-3xl tracking-wider text-white mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <div className="w-2 h-8 bg-orange-500" />
            TECHNICAL SKILLS
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {TECHNICAL_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
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
            TOOLS & TECHNOLOGIES
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {TOOLS_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Editors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-12"
        >
          <h3
            className="text-2xl sm:text-3xl tracking-wider text-white mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <div className="w-2 h-8 bg-orange-500" />
            EDITORS
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {EDITOR_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* AI Tools */}
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
            AI TOOLS
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {AI_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Expertise */}
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {EXPERTISE_SKILLS.map((skill) => (
                <ExpertiseCard
                  key={skill.title}
                  {...skill}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
