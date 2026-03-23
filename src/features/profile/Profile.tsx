import React, { FC } from 'react';
import { motion } from 'motion/react';
import { Code, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { CONSTANTS } from '@/constants/Constant';

/**
 * プロフィールセクション
 * ユーザーの自己紹介、経歴、個人情報、連絡先を表示するセクション
 * @returns {JSX.Element} プロフィールセクション
 */
export const Profile: FC = () => {
  return (
    <div className="section-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={CONSTANTS.SECTION_LABELS.PROFILE} />

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
                社会の常識を変えたWEB技術に魅力を感じて以来WEB業界にずっと身を置いているフロントエンジニア
              </p>
              <p className="text-gray-300 leading-relaxed">
                デザイン・新規開発・運用に仕様提案から要件定義。上流から下流まで全てを対応<br />
                ハイブリッドアプリの開発はキックオフからアプリ公開までワンストップで対応<br />
                最近Unityに興味有り
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
                  <h4 className="text-white mb-1">フロントエンジニアリーダー 兼任技術主任</h4>
                </div>
                <div className="border-l-2 border-orange-500/50 pl-4">
                  <p className="text-orange-500/80 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    2016 - 2022
                  </p>
                  <h4 className="text-white mb-1">フロントエンジニア デザイナー</h4>
                </div>
                <div className="border-l-2 border-orange-500/30 pl-4">
                  <p className="text-orange-500/60 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    2013 - 2016
                  </p>
                  <h4 className="text-white mb-1">QA アシスタントディレクター</h4>
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
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">福岡県福岡市</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">work.tm.razycraft@gmail.com</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-400">Available:</span>
                  <span className="text-orange-500">正社員</span>
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
                  href="mailto:work.tm.razycraft@gmail.com"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
                >
                  <Mail className="text-orange-500 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    work.tm.razycraft@gmail.com
                  </span>
                </a>
                <a
                  href="https://github.com/TM-RazyCraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
                >
                  <Github className="text-orange-500 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    github.com/TM-RazyCraft
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
