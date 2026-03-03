import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading (Left Aligned Like Expertise) */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Certifications
        </motion.h2>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:border-blue-500 transition"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">

            {/* Badge */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/aws.png"
              alt="AWS Certified Cloud Practitioner"
              className="w-28 h-28 object-contain"
            />

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold">
                AWS Certified Cloud Practitioner
              </h3>

              <p className="text-gray-400 mt-3 max-w-2xl">
                Validates foundational knowledge of AWS Cloud architecture,
                security, billing, and core services including EC2, S3, RDS,
                IAM, and Lambda.
              </p>

              <a
                href="https://www.credly.com/earner/earned/badge/2e5eae62-b346-466b-ae33-480c8bb4476e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition"
              >
                Verify Credential
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}