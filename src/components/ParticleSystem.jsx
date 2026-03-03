import { useMemo } from "react";
import { motion } from "framer-motion";

export default function ParticleSystem({ density = 50, className = "" }) {
  const particles = useMemo(() => {
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2,
      color: [
        'rgba(59, 130, 246, 0.4)', // blue
        'rgba(139, 92, 246, 0.4)', // purple
        'rgba(236, 72, 153, 0.4)', // pink
        'rgba(34, 197, 94, 0.4)',  // green
      ][Math.floor(Math.random() * 4)]
    }));
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

// Specialized particle components for different sections
export function HeroParticles() {
  return (
    <ParticleSystem 
      density={30} 
      className="z-0" 
    />
  );
}

export function FloatingOrbs({ count = 3 }) {
  const orbs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 200 + 100,
      duration: Math.random() * 20 + 15,
      color: [
        'rgba(59, 130, 246, 0.1)', // blue
        'rgba(139, 92, 246, 0.1)', // purple
        'rgba(236, 72, 153, 0.1)', // pink
        'rgba(34, 197, 94, 0.1)',  // green
        'rgba(245, 158, 11, 0.1)', // amber
      ][i % 5]
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            backgroundColor: orb.color,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}