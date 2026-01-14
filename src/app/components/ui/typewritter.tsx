import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';

interface TypeWritterProps {
  text: string;
  speed?: number; // ms per character
  loop?: boolean; // whether to loop typing
  className?: string;
}

export const TypeWritter: FC<TypeWritterProps> = ({
  text,
  speed = 60,
  loop = false,
  className = '',
}) => {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let timer: number | undefined;

    if (!isDeleting && index <= text.length) {
      timer = window.setTimeout(() => {
        setDisplay(text.slice(0, index));
        setIndex((i) => i + 1);
      }, speed);
    } else if (isDeleting && index >= 0) {
      timer = window.setTimeout(() => {
        setDisplay(text.slice(0, index));
        setIndex((i) => i - 1);
      }, speed / 2);
    }

    // When finished typing full text
    if (!isDeleting && index > text.length) {
      if (loop) {
        // pause then start deleting
        timer = window.setTimeout(() => setIsDeleting(true), 800);
      } else {
        // stop
        setIndex(text.length + 1);
      }
    }

    // When finished deleting, restart typing if loop
    if (isDeleting && index < 0) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [index, isDeleting, text, speed, loop]);

  // cursor blink animation using motion controls
  useEffect(() => {
    controls.start({ opacity: [1, 0.2, 1], transition: { duration: 1, repeat: Infinity } });
  }, [controls]);

  return (
    <span className={className} aria-live="polite">
      <span>{display}</span>
      <motion.span
        animate={controls}
        style={{ display: 'inline-block', width: 10 }}
        className="align-middle"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypeWritter;
