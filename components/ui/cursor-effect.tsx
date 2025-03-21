'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorEffect() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  // Main cursor spring config
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail spring config (more loose for trailing effect)
  const trailSpringConfig = { damping: 15, stiffness: 150 };
  const trailXSpring = useSpring(trailX, trailSpringConfig);
  const trailYSpring = useSpring(trailY, trailSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      trailX.set(e.clientX - 16);
      trailY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  useEffect(() => {
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll(`
      button, 
      a, 
      input, 
      .interactive,
      .tech-card,
      .project-card,
      .experience-card,
      .hero-heading,
      .section-heading
    `);

    interactiveElements.forEach(element => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      {/* Trail effect */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 h-8 w-8 dark:mix-blend-difference mix-blend-multiply"
        style={{
          x: trailXSpring,
          y: trailYSpring,
        }}
      >
        <motion.div
          className="h-7 w-7 rounded-full bg-primary opacity-30"
          animate={{
            scale: isHovered ? 2 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
        />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 dark:mix-blend-difference mix-blend-multiply"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="h-7 w-7 rounded-full bg-primary shadow-[0_0_20px_rgba(255,255,255,0.7)]"
          animate={{
            scale: isHovered ? 2 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
        />
      </motion.div>

      <style jsx global>{`
        body {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
}
