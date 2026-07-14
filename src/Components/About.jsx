import { motion } from "framer-motion";
import { Code, GraduationCap, Heart, Trophy } from "lucide-react";

const About = ({ isDarkMode }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Tech Journey",
      description:
        "Full-stack JavaScript engineer — Next.js, React, Node.js, Express, TypeScript, MongoDB & Firebase",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      description:
        "MBA in Accounting from National University and Complete Web Development certification",
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description:
        "Love creating visually appealing and user-friendly web experiences with attention to detail",
    },
    {
      icon: <Trophy size={24} />,
      title: "Experience",
      description:
        "Head of Technical Team at WioCare — leading engineers building AI-powered healthcare solutions",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-dev-surface" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-6 font-mono transition-colors ${
              isDarkMode ? "text-dev-text" : "text-gray-900"
            }`}
          >
            <span className="text-dev-comment">// </span>
            <span className="text-dev-keyword">const</span>{" "}
            <span className="text-dev-variable">aboutMe</span>{" "}
            <span
              className={isDarkMode ? "text-dev-operator" : "text-gray-600"}
            >
              =
            </span>{" "}
            <span className="text-dev-string">"My Story"</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className={`prose prose-lg leading-relaxed transition-colors 
     text-center md:text-left 
    ${isDarkMode ? "text-dev-textSecondary" : "text-gray-600"}
  `}
            >
              <p className="text-xl mb-6">
                Hi, I&apos;m{" "}
                <span className="text-primary-500 font-extrabold">
                  Maptaul Islam Taraq
                </span>
                , Head of Technical Team at WioCare, where we build AI-powered
                digital healthcare solutions — ambulance dispatch with live
                geo-tracking, pharmacy POS &amp; delivery, lab booking with
                automated reports, and real-time notifications &amp; payments,
                all running in production.
              </p>
              <p className="mb-6">
                As a full-stack JavaScript engineer, I design scalable
                architectures with Next.js, React, Node.js, Express, and
                TypeScript — REST APIs, JWT auth with role-based access
                control, Socket.IO real-time systems, and payment integrations.
                I lead the engineering team through code reviews, mentoring,
                and clear technical direction.
              </p>
              <p className="mb-6">
                My educational background includes an MBA in Accounting from
                National University and a Complete Web Development certification
                from Programming Hero. This combination of business knowledge
                and technical skills helps me understand both user needs and
                business requirements, allowing me to create solutions that
                drive results.
              </p>
              <p>
                When I&apos;m not coding, I enjoy staying up-to-date with the
                latest web development trends and continuously learning new
                technologies to keep my skills sharp. Let&apos;s connect and
                create something amazing together!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all border ${
                  isDarkMode
                    ? "bg-dev-elevated border-dev-border hover:border-primary-500/30"
                    : "bg-gradient-to-br from-primary-50 to-secondary-50 border-gray-200 hover:border-primary-300"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-600 text-white rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h3
                    className={`font-semibold transition-colors ${
                      isDarkMode ? "text-dev-text" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed transition-colors ${
                    isDarkMode ? "text-dev-textMuted" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
