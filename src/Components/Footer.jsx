import { motion } from "framer-motion";
import { Facebook, Github, Linkedin } from "lucide-react";

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Maptaul",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/maptaul",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/Maptaul",
      icon: <Facebook size={20} />,
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`py-12 transition-colors duration-300 ${
        isDarkMode ? "bg-dev-bg text-dev-text" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-4 font-mono"
            >
              <span className="text-dev-comment">// </span>Maptaul Islam Taraq
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`mb-4 leading-relaxed transition-colors ${
                isDarkMode ? "text-dev-textSecondary" : "text-gray-300"
              }`}
            >
              Head of Technical Team at WioCare &amp; Full Stack JavaScript
              Engineer — building AI-powered healthcare systems with Next.js,
              React, and Node.js.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "bg-dev-surface hover:bg-primary-500"
                      : "bg-gray-800 hover:bg-primary-600"
                  }`}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-4 font-mono"
            >
              <span className="text-dev-comment">// </span>Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`transition-colors font-mono ${
                      isDarkMode
                        ? "text-dev-textSecondary hover:text-dev-text"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="text-dev-comment">// </span>
                    {link.name.toLowerCase()}()
                  </motion.button>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-4 font-mono"
            >
              <span className="text-dev-comment">// </span>Get In Touch
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3 font-mono text-sm"
            >
              <p
                className={`transition-colors ${
                  isDarkMode ? "text-dev-textSecondary" : "text-gray-300"
                }`}
              >
                <span className="text-dev-keyword">const</span>{" "}
                <span className="text-dev-variable">email</span>{" "}
                <span className="text-dev-operator">=</span>{" "}
                <a
                  href="mailto:maptaul912@gmail.com"
                  className={`text-dev-string hover:underline transition-colors ${
                    isDarkMode
                      ? "hover:text-primary-400"
                      : "hover:text-primary-300"
                  }`}
                >
                  "maptaul912@gmail.com"
                </a>
              </p>
              <p
                className={`transition-colors ${
                  isDarkMode ? "text-dev-textSecondary" : "text-gray-300"
                }`}
              >
                <span className="text-dev-keyword">const</span>{" "}
                <span className="text-dev-variable">location</span>{" "}
                <span className="text-dev-operator">=</span>{" "}
                <span className="text-dev-string">
                  "Chattogram, Bangladesh"
                </span>
              </p>
              <p
                className={`transition-colors ${
                  isDarkMode ? "text-dev-textSecondary" : "text-gray-300"
                }`}
              >
                <span className="text-dev-keyword">const</span>{" "}
                <span className="text-dev-variable">whatsapp</span>{" "}
                <span className="text-dev-operator">=</span>{" "}
                <a
                  href="https://wa.me/8801846035436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-dev-string hover:underline transition-colors ${
                    isDarkMode
                      ? "hover:text-primary-400"
                      : "hover:text-primary-300"
                  }`}
                >
                  "+880 1846-035436"
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`border-t pt-8 flex flex-col md:flex-row justify-center items-center transition-colors ${
            isDarkMode ? "border-dev-border" : "border-gray-800"
          }`}
        >
          <p
            className={`text-sm mb-4 md:mb-0 font-mono transition-colors ${
              isDarkMode ? "text-dev-textMuted" : "text-gray-300"
            }`}
          >
            <span className="text-dev-comment">// </span>© {currentYear} Maptaul
            Islam Taraq. All rights reserved.
          </p>
          {/* <p
            className={`text-sm flex items-center font-mono transition-colors ${
              isDarkMode ? "text-dev-textMuted" : "text-gray-300"
            }`}
          >
            <span className="text-dev-comment">// </span>
            Made with <Heart size={16} className="text-red-500 mx-1" /> using
            React & Tailwind CSS
          </p> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
