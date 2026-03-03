import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// Typing Animation Hook
function useTypewriter(text, speed = 100) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}

// Floating Particles Component
function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typedText = useTypewriter("Building Scalable", 150);
  const [showSecondLine, setShowSecondLine] = useState(false);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));

  useEffect(() => {
    if (typedText === "Building Scalable") {
      setTimeout(() => setShowSecondLine(true), 500);
    }
  }, [typedText]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = window.innerWidth / 2;
      const rectY = window.innerHeight / 2;
      mouseX.set(e.clientX - rect);
      mouseY.set(e.clientY - rectY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-32 relative overflow-hidden">
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT TEXT */}
        <div className="relative">
          {/* Background Text for Depth */}
          <div className="absolute -top-20 -left-10 text-9xl font-black text-white/5 select-none pointer-events-none">
            CODE
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight min-h-[200px]">
              <motion.span
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-blue-500"
                >
                  |
                </motion.span>
              </motion.span>
              
              {showSecondLine && (
                <motion.span
                  className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Enterprise Systems.
                </motion.span>
              )}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-8 text-xl text-gray-400 max-w-md"
          >
            Full Stack Developer specializing in{" "}
            <motion.span
              className="text-blue-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              React
            </motion.span>
            ,{" "}
            <motion.span
              className="text-indigo-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Java
            </motion.span>
            {" "}&{" "}
            <motion.span
              className="text-purple-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Spring Boot
            </motion.span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#projects"
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-xl font-medium overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="relative border-2 border-white/20 px-8 py-4 rounded-xl font-medium backdrop-blur-sm hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
          style={{ 
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Floating orbs around the image */}
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/30 blur-xl rounded-full"
            animate={{
              y: [-10, 10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute -bottom-10 -left-10 w-16 h-16 bg-indigo-500/30 blur-xl rounded-full"
            animate={{
              y: [10, -10],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Main glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-3xl rounded-full transform scale-110"></div>
          
          {/* Image container with 3D effect */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="/profile.png"
              className="relative w-80 mx-auto rounded-2xl border border-white/20 shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
              whileHover={{
                rotateY: 5,
                rotateX: -5,
              }}
            />
            
            {/* Reflection effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                transform: "translateZ(51px)",
              }}
            />
          </motion.div>

          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-blue-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ 
              transform: "translateZ(20px)",
              scale: 1.2
            }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-full border border-indigo-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ 
              transform: "translateZ(10px)",
              scale: 1.4
            }}
          />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}