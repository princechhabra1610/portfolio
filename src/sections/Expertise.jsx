import { motion } from "framer-motion";

export default function Expertise() {
  const cards = [
    { 
      title: "React Ecosystem", 
      desc: "Hooks, Redux Toolkit, Tailwind CSS, Styled Components",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Spring Boot", 
      desc: "REST APIs, JPA, Microservices, Hibernate, Spring Security",
      icon: "🍃",
      color: "from-green-500 to-emerald-500"
    },
    { 
      title: "AWS Cloud", 
      desc: "EC2, S3, IAM, RDS, Lambda",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500"
    },
    { 
      title: "DevOps", 
      desc: "CI/CD, Jenkins",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="expertise" className="py-24 px-6 scroll-mt-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in building robust, scalable applications with modern technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {card.icon}
              </motion.div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {card.desc}
              </p>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ 
                  borderRadius: ["16px", "20px", "16px"],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}