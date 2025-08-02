import { motion } from "framer-motion";
import { Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { useState } from "react";

const Header = ({ activeSection, isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "home()" },
    { id: "about", label: "about()" },
    { id: "skills", label: "skills()" },
    { id: "projects", label: "projects()" },
    { id: "experience", label: "experience()" },
    { id: "contact", label: "contact()" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-50 border-b transition-colors duration-300 ${
        isDarkMode
          ? "bg-dev-surface/90 border-dev-border text-dev-text"
          : "bg-white/90 border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer font-mono"
            onClick={() => scrollToSection("hero")}
          >
            <Terminal className="text-primary-500" size={24} />
            <span className="text-xl font-bold">
              <span className="text-primary-500">const</span>{" "}
              <span className="text-dev-keyword">developer</span>{" "}
              <span
                className={isDarkMode ? "text-dev-operator" : "text-gray-600"}
              >
                =
              </span>{" "}
              <span className="text-dev-string">"MAPTAUL"</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-mono font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary-500"
                    : isDarkMode
                    ? "text-dev-textSecondary hover:text-primary-400"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-dev-elevated hover:bg-dev-border text-dev-textSecondary hover:text-dev-text"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
              }`}
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-dev-elevated hover:bg-dev-border text-dev-textSecondary"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <button
              className={`p-2 ${
                isDarkMode ? "text-dev-text" : "text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden py-4 border-t transition-colors ${
              isDarkMode
                ? "bg-dev-elevated/50 border-dev-border"
                : "bg-gray-50/50 border-gray-200"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-mono font-medium transition-colors ${
                  activeSection === item.id
                    ? isDarkMode
                      ? "text-primary-400 bg-primary-500/10"
                      : "text-primary-600 bg-primary-50"
                    : isDarkMode
                    ? "text-dev-textSecondary hover:text-dev-text hover:bg-dev-border/30"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
