import { motion } from "framer-motion";
import { Code, GraduationCap, Heart, Trophy } from "lucide-react";

const About = ({ isDarkMode }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Tech Journey",
      description:
        "Frontend developer specializing in React.js, Node.js, and modern web technologies",
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
        "Currently working as Frontend Developer at Jionex IT, building modern web applications",
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
              className={`prose prose-lg leading-relaxed transition-colors  ${
                isDarkMode ? "text-dev-textSecondary" : "text-gray-600"
              }`}
            >
              <p className="text-xl mb-6">
                Hi, I&apos;m{" "}
                <span className="text-primary-500 font-extrabold">
                  Maptaul Islam Taraq
                </span>
                , a passionate frontend developer with a love for creating
                visually appealing and user-friendly web experiences. With a
                strong foundation in HTML, CSS, JavaScript, React, Node.js,
                Express.js, MongoDB, and GitHub, I specialize in building
                responsive websites that not only look great but also provide a
                seamless user experience.
              </p>
              <p className="mb-6">
                Over the years, I&apos;ve honed my skills by working on a
                variety of projects, from simple landing pages to complex web
                applications. My goal is to turn creative ideas into functional,
                engaging digital products. Currently, I&apos;m working as a
                Frontend Developer at Jionex IT, where I develop and maintain
                modern web applications using cutting-edge technologies.
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
