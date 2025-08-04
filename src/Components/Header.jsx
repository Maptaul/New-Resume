import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Header = ({
  activeSection,
  setActiveSection,
  isDarkMode,
  setIsDarkMode,
}) => {
  const navItems = [
    { id: "hero", icon: <AiOutlineHome />, label: "Home" },
    { id: "about", icon: <AiOutlineUser />, label: "About" },
    { id: "skills", icon: <BiBook />, label: "Skills" },
    { id: "projects", icon: <RiServiceLine />, label: "Projects" },
    { id: "experience", icon: <BiBook />, label: "Experience" },
    { id: "contact", icon: <BiMessageSquareDetail />, label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="fixed bottom-8 left-0 w-full z-50 flex justify-center">
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`  px-4 py-2 rounded-full shadow-lg backdrop-blur-md flex items-center justify-center gap-2 z-50 
        ${
          isDarkMode ? "bg-gray-900/80 text-white" : "bg-white/80 text-gray-800"
        }`}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeSection === item.id
                ? "bg-cyan-500 text-white"
                : isDarkMode
                ? "hover:bg-gray-800"
                : "hover:bg-gray-200"
            }`}
            aria-label={item.label}
          >
            {React.cloneElement(item.icon, { size: 20 })}
            <span className="hidden md:inline">{item.label}</span>
          </motion.button>
        ))}

        {/* Theme toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors
          ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </motion.nav>
    </div>
  );
};

export default Header;
