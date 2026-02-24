import React, { FC } from 'react';

/**
 * フッターコンポーネント
 * ページ下部に表示される著作権表示を含むフッター
 * @returns {JSX.Element} フッター要素
 */
export const Footer: FC = () => {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; 2026 TM. All rights reserved.</p>
      </div>
    </footer>
  );
};
