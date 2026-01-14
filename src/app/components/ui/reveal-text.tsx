import React, { FC, useState } from 'react';
import { motion, useAnimation } from 'motion/react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number; // initial delay before first letter (s)
  stagger?: number; // stagger between letters (s)
}

export const RevealText: FC<RevealTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
}) => {
  const letters = Array.from(text);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleEnter = async () => {
    setIsHovered(true);
    // start animations for each letter by setting a delay per letter via animate prop
    await controls.start((i) => ({ y: ['100%', '0%'], opacity: [0, 1], transition: { delay: delay + i * stagger, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } }));
  };

  const handleLeave = async () => {
    setIsHovered(false);
    // reverse animation
    await controls.start((i) => ({ y: ['0%', '100%'], opacity: [1, 0], transition: { delay: 0, duration: 0.2 } }));
    // reset to initial state
    controls.set({ y: '100%', opacity: 0 });
  };

  return (
    <span
      className={`inline-block overflow-hidden ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-hidden={false}
    >
      {letters.map((char, i) => {
        const isSpace = char === ' ';
        return (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            initial={{ y: '100%', opacity: 0 }}
            animate={controls}
            style={{ display: 'inline-block' }}
          >
            {isSpace ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </span>
  );
};

export default RevealText;
