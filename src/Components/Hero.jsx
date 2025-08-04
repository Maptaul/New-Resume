import { motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Download,
  Facebook,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = ({ isDarkMode }) => {
  const roles = [
    "Frontend Developer | Web Developer",
    "Full-Stack Developer | MERN Stack Specialist",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const pauseBeforeNext = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 3000);
      return () => clearTimeout(pauseBeforeNext);
    }
  }, [charIndex, currentRoleIndex]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Maptaul",
      icon: <Github size={20} />,
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/maptaul",
      icon: <Linkedin size={20} />,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/Maptaul",
      icon: <Facebook size={20} />,
    },
  ];

  const stats = [
    {
      label: "Projects Completed",
      value: "100+",
      icon: <Code2 size={16} />,
    },
    // { label: "Happy Clients", value: "200+", icon: <Sparkles size={16} /> },
    { label: "Years Experience", value: "2+", icon: <Terminal size={16} /> },
  ];

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center pt-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-dev-bg via-dev-surface to-dev-elevated"
          : "bg-gradient-to-br from-primary-50 via-white to-secondary-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Snippets */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-20 left-10 font-mono text-xs opacity-20 ${
            isDarkMode ? "text-dev-comment" : "text-gray-400"
          }`}
        >
          {`const developer = {`}
          <br />
          {`  name: "Maptaul",`}
          <br />
          {`  passion: "coding"`}
          <br />
          {`};`}
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`absolute top-40 right-20 font-mono text-xs opacity-20 ${
            isDarkMode ? "text-dev-comment" : "text-gray-400"
          }`}
        >
          {`function buildAmazingApps() {`}
          <br />
          {`  return "success";`}
          <br />
          {`}`}
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className={`absolute bottom-40 left-20 font-mono text-xs opacity-20 ${
            isDarkMode ? "text-dev-comment" : "text-gray-400"
          }`}
        >
          {`<Component />`}
          <br />
          {`// React Magic ✨`}
        </motion.div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image with Enhanced Styling */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="relative mb-8 inline-block"
          >
            <div
              className={`relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 transition-all duration-300 ${
                isDarkMode
                  ? "ring-dev-elevated shadow-primary-500/20"
                  : "ring-white shadow-primary-500/30"
              }`}
            >
              <img
                src="https://i.ibb.co/HTRbgptz/my.png"
                alt="Maptaul Islam Taraq"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
            </div>

            {/* Status indicator */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full border-4 border-white dark:border-dev-surface flex items-center justify-center"
            >
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1
              className={`text-5xl sm:text-7xl font-bold mb-4 leading-tight transition-colors ${
                isDarkMode ? "text-dev-text" : "text-gray-900"
              }`}
            >
              <span className="block">
                <span className="font-mono text-primary-500 text-2xl sm:text-3xl">
                  {"<"}
                </span>
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Maptaul
                </span>
              </span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
                  Islam Taraq
                </span>
                <span className="font-mono text-primary-500 text-2xl sm:text-3xl">
                  {" />"}
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Animated Role Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 px-4"
          >
            <div
              className={`text-xl sm:text-2xl font-mono mb-4 transition-colors ${
                isDarkMode ? "text-dev-textSecondary" : "text-gray-600"
              } h-[3.5rem] sm:h-[4rem] flex items-center justify-center text-center`}
            >
              {/* <span className="text-dev-comment">// </span> */}
              <span className="border-r-2 border-primary-500">
                // {displayText}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </div>

            <p
              className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors ${
                isDarkMode ? "text-dev-textMuted" : "text-gray-600"
              }`}
            >
              <span className="font-mono text-dev-comment">/* </span>
              Passionate about creating exceptional digital experiences with
              modern web technologies. Specialized in building scalable web
              applications.
              <span className="font-mono text-dev-comment"> */</span>
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 items-center justify-center gap-6 max-w-2xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 rounded-xl backdrop-blur-sm border transition-all ${
                  isDarkMode
                    ? "bg-dev-surface/50 border-dev-border hover:border-primary-500/50"
                    : "bg-white/50 border-gray-200 hover:border-primary-300"
                }`}
              >
                <div className="flex items-center justify-center mb-2 text-primary-500">
                  {stat.icon}
                </div>
                <div
                  className={`text-2xl font-bold font-mono transition-colors ${
                    isDarkMode ? "text-dev-text" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm transition-colors ${
                    isDarkMode ? "text-dev-textMuted" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              href="/Maptaul Islam-Full Stack Developer.pdf"
              download
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-mono font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Download size={20} className="mr-3 group-hover:animate-bounce" />
              <span className="text-dev-comment">// </span>download_resume()
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`group inline-flex items-center px-8 py-4 border-2 border-primary-600 font-mono font-semibold rounded-xl transition-all ${
                isDarkMode
                  ? "text-primary-400 hover:bg-primary-600 hover:text-white"
                  : "text-primary-600 hover:bg-primary-600 hover:text-white"
              }`}
            >
              <Terminal
                size={20}
                className="mr-3 group-hover:rotate-12 transition-transform"
              />
              <span className="text-dev-comment">// </span>get_in_touch()
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent ${
                  isDarkMode
                    ? "bg-dev-elevated text-dev-textSecondary hover:border-primary-500/30"
                    : "bg-white text-gray-700 hover:border-primary-200"
                } ${link.color}`}
                title={`${link.name} // Connect with me`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full border backdrop-blur-sm transition-colors ${
              isDarkMode
                ? "bg-dev-surface/50 border-dev-border"
                : "bg-white/50 border-gray-200"
            }`}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-secondary-500 rounded-full"
            ></motion.div>
            <span
              className={`font-mono text-sm transition-colors ${
                isDarkMode ? "text-dev-textMuted" : "text-gray-600"
              }`}
            >
              <span className="text-dev-comment">// </span>
              Status:{" "}
              <span className="text-secondary-500 font-semibold">
                Available for Hire
              </span>
            </span>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`p-2 rounded-full cursor-pointer transition-colors ${
                isDarkMode
                  ? "text-dev-textMuted hover:text-primary-400"
                  : "text-gray-400 hover:text-primary-600"
              }`}
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
