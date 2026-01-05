import { motion } from 'motion/react';

interface SkillCardProps {
  name: string;
  level: number;
  color: string;
}

function SkillCard({ name, level, color }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 shadow-xl hover:border-orange-500 transition-all duration-300 group"
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-white tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>
          {name}
        </h4>
        <span className="text-orange-500" style={{ fontFamily: 'Oswald, sans-serif' }}>
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-700 h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${color}`}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const technicalSkills = [
    { name: 'React / Next.js', level: 95, color: 'bg-orange-500' },
    { name: 'TypeScript', level: 90, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 95, color: 'bg-orange-500' },
    { name: 'HTML / CSS', level: 98, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-orange-500' },
    { name: 'Vue.js', level: 85, color: 'bg-orange-500' },
  ];

  const toolsSkills = [
    { name: 'Git / GitHub', level: 90, color: 'bg-orange-500' },
    { name: 'Figma', level: 88, color: 'bg-orange-500' },
    { name: 'Webpack / Vite', level: 85, color: 'bg-orange-500' },
    { name: 'Docker', level: 75, color: 'bg-orange-500' },
  ];

  const softSkills = [
    'アジャイル開発',
    'チームコラボレーション',
    'UI/UXデザイン',
    'レスポンシブデザイン',
    'パフォーマンス最適化',
    'アクセシビリティ',
    'テスト駆動開発',
    'コードレビュー',
  ];

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
            {technicalSkills.map((skill) => (
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
            {toolsSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
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
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 sm:p-8 shadow-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-2 h-2 bg-orange-500 group-hover:scale-125 transition-transform" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            一緒にプロジェクトを始めませんか？
          </p>
          <button
            className="px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/50"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            LET'S WORK TOGETHER
          </button>
        </motion.div>
      </div>
    </div>
  );
}
