import React, { FC } from 'react';
import { motion } from 'motion/react';
import { Code, Briefcase, Mail, Github, Linkedin } from 'lucide-react';

export const Profile: FC = () => {
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
            PROFILE
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-orange-500" size={28} />
                <h3
                  className="text-2xl sm:text-3xl tracking-wider text-white"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  ABOUT ME
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                情熱を持ってコードを書くフロントエンドエンジニアです。
                ハーレーダビッドソンのバイクが大好きで、自由と冒険の精神を大切にしています。
              </p>
              <p className="text-gray-300 leading-relaxed">
                最新のWeb技術を駆使し、ユーザーに感動を与える体験を作り出すことに喜びを感じています。
                常に新しい技術を学び、成長し続けることを心がけています。
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-orange-500" size={28} />
                <h3
                  className="text-2xl sm:text-3xl tracking-wider text-white"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  EXPERIENCE
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="text-orange-500 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    2022 - PRESENT
                  </p>
                  <h4 className="text-white mb-1">Senior Frontend Engineer</h4>
                  <p className="text-gray-400 text-sm">Tech Startup Co.</p>
                </div>
                <div className="border-l-2 border-orange-500/50 pl-4">
                  <p className="text-orange-500/80 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    2019 - 2022
                  </p>
                  <h4 className="text-white mb-1">Frontend Engineer</h4>
                  <p className="text-gray-400 text-sm">Digital Agency Inc.</p>
                </div>
                <div className="border-l-2 border-orange-500/30 pl-4">
                  <p className="text-orange-500/60 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    2017 - 2019
                  </p>
                  <h4 className="text-white mb-1">Junior Frontend Developer</h4>
                  <p className="text-gray-400 text-sm">Web Solutions Ltd.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Info & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Personal Info */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 sm:p-8 shadow-xl">
              <h3
                className="text-2xl sm:text-3xl tracking-wider text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                PERSONAL INFO
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">Taro Yamada</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">Tokyo, Japan</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">taro@example.com</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Available:</span>
                  <span className="text-orange-500">Freelance</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 p-6 sm:p-8 shadow-xl">
              <h3
                className="text-2xl sm:text-3xl tracking-wider text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                CONNECT
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="mailto:taro@example.com"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
                >
                  <Mail className="text-orange-500 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    taro@example.com
                  </span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
                >
                  <Github className="text-orange-500 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    github.com/taroyamada
                  </span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
                >
                  <Linkedin className="text-orange-500 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    linkedin.com/in/taroyamada
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
