// export default function Experience() {
//   return (
//     <section id="experience" className="py-24 px-6">
//       <div className="max-w-4xl mx-auto">

//         <h2 className="text-4xl font-bold mb-16">
//           Professional Experience
//         </h2>

//         <div className="space-y-10 border-l border-white/20 pl-8">

//           <div>
//             <h3 className="text-xl font-semibold">
//               Full Stack Developer – Happiest Minds [April 2024 - Present]
//             </h3>
//             <p className="text-gray-400">
//               Developing scalable backend services using Spring Boot and optimizing MySQL queries.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold">
//               Intern – HighRadius Corporation [Oct 2023 - March 2024]
//             </h3>
//             <p className="text-gray-400">
//               Built full-stack web product from scratch with interactive UI components.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Happiest Minds Technologies",
      period: "April 2024 – Present",
      description: "Developing scalable backend services using Spring Boot, designing REST APIs, optimizing MySQL queries, and collaborating in agile sprint cycles.",
      skills: ["Spring Boot", "MySQL", "REST APIs", "Agile"],
      current: true
    },
    {
      title: "Intern",
      company: "HighRadius Corporation",
      period: "Oct 2023 – March 2024",
      description: "Built a full-stack web product from scratch, designed intuitive UI components, and translated business requirements into scalable software solutions.",
      skills: ["Full Stack", "UI Design", "JavaScript", "React"],
      current: false
    }
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-24 px-6 scroll-mt-24 relative">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in software development and the roles that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          <motion.div 
            className="relative pl-20 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute -left-[71px] top-6 w-6 h-6 rounded-full border-4 ${
                    exp.current 
                      ? 'bg-purple-500 border-purple-300 shadow-lg shadow-purple-500/50' 
                      : 'bg-blue-500 border-blue-300'
                  } group-hover:scale-125 transition-transform`}
                  whileHover={{ scale: 1.3 }}
                >
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Experience Card */}
                <motion.div 
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Current Badge */}
                  {exp.current && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-xs px-3 py-1 rounded-full font-medium"
                      initial={{ scale: 0, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      Current
                    </motion.div>
                  )}

                  <div className="relative z-10">
                    <motion.div
                      className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </motion.div>

                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 + 0.3 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border border-purple-500 opacity-0 group-hover:opacity-100"
                    animate={{ 
                      borderRadius: ["24px", "32px", "24px"],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        > */}
          {/* <motion.a
            href="https://www.linkedin.com/in/prince-chhabra-2a2a8b18b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View LinkedIn Profile
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}