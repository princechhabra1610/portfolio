import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactCards = [
    {
      icon: <FaLinkedin className="text-3xl text-blue-500" />,
      title: "LinkedIn",
      desc: "Let's connect professionally",
      link: "https://www.linkedin.com/in/prince-chhabra-2a2a8b18b",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaGithub className="text-3xl text-gray-300" />,
      title: "GitHub",
      desc: "Check out my code",
      link: "https://github.com/princechhabra1610",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <FaEnvelope className="text-3xl text-red-500" />,
      title: "Email",
      desc: "Send me a message",
      link: "mailto:prince.chhabra.dev@gmail.com",
      color: "from-red-500 to-red-600"
    }
  ];

  // Animation variants
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
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Build Something
            </span>{" "}
            Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Let's connect and create something incredible!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <a
                href={card.link}
                target={card.link.startsWith('mailto:') ? undefined : "_blank"}
                rel={card.link.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="block h-full w-full cursor-pointer"
              >
                <motion.div 
                  className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-pink-500/50 transition-all duration-500 h-full"
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <div className="relative z-10 text-center pointer-events-none">
                    <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {card.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {card.desc}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-12 rounded-3xl backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5"></div>
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 text-center">
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-6xl mb-4">👋</div>
            </motion.div>

            <h3 className="text-3xl font-bold mb-4">
              Ready to start a project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              I'm currently available for freelance work and full-time opportunities. 
              Let's discuss your next big idea!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.linkedin.com/in/prince-chhabra-2a2a8b18b"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 rounded-xl font-medium overflow-hidden relative"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <FaLinkedin />
                  Let's Connect
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href="mailto:princechhabra1610@gmail.com"
                className="border-2 border-white/20 px-8 py-4 rounded-xl font-medium backdrop-blur-sm hover:bg-white/10 hover:border-pink-500/50 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Send Email
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Location info */}
        <motion.div
          className="text-center mt-12 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaMapMarkerAlt />
            <span>Based in India</span>
          </div>
          <p className="text-sm">
            Available for remote work worldwide • Open to relocation
          </p>
        </motion.div>
      </div>
    </section>
  );
}