import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add('has-custom-cursor');
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove('has-custom-cursor');
    };

    const handleMouseOver = (e) => {
      const elem = e.target;
      const isClickable = 
        elem.tagName === 'A' || 
        elem.tagName === 'BUTTON' || 
        elem.onclick || 
        elem.className?.includes('cursor-pointer') ||
        window.getComputedStyle(elem).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? (isClicking ? 0.8 : isPointer ? 1.5 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div 
          className={`w-full h-full rounded-full border-2 transition-all duration-150 ${
            isPointer 
              ? 'border-white bg-white/20' 
              : 'border-white'
          }`}
        />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9998] bg-white rounded-full opacity-60"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}