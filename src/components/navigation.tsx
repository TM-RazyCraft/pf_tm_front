import React, { useState, useEffect, FC } from 'react';
import { Menu, X } from 'lucide-react';
import { CONSTANTS } from '@/constants/Constant';

/**
 * ナビゲーションコンポーネントのプロップス
 * @interface NavigationProps
 * @property {SectionId} activeSection - 現在のアクティブセクション
 * @property {Function} onNavigate - セクション変更時のコールバック関数
 */
interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

/**
 * ナビゲーション項目のデータ型
 * @interface NavItem
 * @property {SectionId} id - セクション識別子
 * @property {string} label - 表示ラベル
 */
interface NavItem {
  id: SectionId;
  label: string;
}

import { SectionId } from '@/types/app';

/**
 * ナビゲーションコンポーネント
 * スクロール状態に応じてスタイルが変わるヘッダーナビゲーション
 * デスクトップとモバイルの両方に対応
 * @param {NavigationProps} props - プロップス（activeSection, onNavigate）
 * @returns {JSX.Element} ナビゲーション要素
 */
export const Navigation: FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * スクロール位置の監視
   * ウィンドウがスクロールされて50px以上になったらバックグラウンド背景を表示
   */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: CONSTANTS.SECTION.TOP, label: CONSTANTS.SECTION.TOP.toUpperCase() },
    { id: CONSTANTS.SECTION.PROFILE, label: CONSTANTS.SECTION.PROFILE.toUpperCase() },
    { id: CONSTANTS.SECTION.SKILLS, label: CONSTANTS.SECTION.SKILLS.toUpperCase() },
    { id: CONSTANTS.SECTION.TOOLS, label: CONSTANTS.SECTION.TOOLS.toUpperCase() },
    { id: CONSTANTS.SECTION.EXPERTISE, label: CONSTANTS.SECTION.EXPERTISE.toUpperCase() },
  ];

  /**
   * ナビゲーション項目クリック時のハンドラー
   * セクションを変更し、モバイルメニューを閉じる
   * @param {SectionId} id - クリックされたセクション識別子
   * @returns {void}
   */
  const handleNavClick = (id: SectionId): void => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-orange-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => handleNavClick(CONSTANTS.SECTION.TOP)}
            className="text-xl sm:text-2xl tracking-wider text-orange-500 hover:text-orange-400 transition-colors cursor-pointer"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            RAZYCRAFT
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-1 py-2 tracking-wider transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-orange-500'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-orange-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-orange-500/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded tracking-wider transition-colors ${
                  activeSection === item.id
                    ? 'bg-orange-500/20 text-orange-500'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
