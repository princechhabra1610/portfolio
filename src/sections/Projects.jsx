import Tilt from "react-parallax-tilt";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "App Cost Estimator",
      img: "/app.png",
      desc: "Developed a responsive cost estimation web app using React, Tailwind CSS, Redux Toolkit, SpringBoot and MySQL.",
      github: "https://github.com/princechhabra1610/app-cost-estimator",
      live: "#",
      tech: ["React", "Redux", "Spring Boot", "MySQL"],
      featured: true
    },
    {
      title: "Ecommerce",
      img: "/eazystore.png",
      desc: "Developed an ecommerce application using React, Redux toolkit, Spring Boot, Spring Security, MySQL.",
      github: "https://github.com/princechhabra1610/Ecommerce",
      live: "#",
      tech: ["React", "Redux", "Spring Security", "MySQL"],
      featured: true
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work in web development and software engineering
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={projectVariants}
              className="group"
            >
              <Tilt 
                glareEnable={true} 
                glareMaxOpacity={0.3}
                glareColor="#3b82f6"
                glareBorderRadius="24px"
              >
                <motion.div 
                  className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={proj.img}
                      alt={proj.title}
                      className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Featured badge */}
                    {proj.featured && (
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-xs px-3 py-1 rounded-full font-medium"
                        initial={{ scale: 0, rotate: -10 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                      >
                        Featured
                      </motion.div>
                    )}

                    {/* Hover overlay with buttons */}
                    <motion.div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto"
                      initial={false}
                    >
                      <motion.a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-110 transition-transform font-medium pointer-events-auto z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(proj.github, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <FaGithub /> Code
                      </motion.a>

                      {proj.live !== "#" && (
                        <motion.a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-110 transition-transform font-medium pointer-events-auto z-20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(proj.live, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          <FaExternalLinkAlt /> Live
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {proj.title}
                    </motion.h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                      {proj.desc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 + 0.5 }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
                    animate={{ 
                      borderRadius: ["24px", "32px", "24px"],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{
                      background: "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(139,92,246,0.5)) border-box",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/princechhabra1610"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}