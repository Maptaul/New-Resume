import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { DotLoader } from "react-spinners";

const LoadingScreen = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300 ${
        isDarkMode ? "bg-dev-bg" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <div className="mb-8">
          <DotLoader color={isDarkMode ? "#60A5FA" : "#3B82F6"} size={80} />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`font-mono text-lg transition-colors ${
            isDarkMode ? "text-dev-text" : "text-gray-900"
          }`}
        >
          <span className="text-dev-comment">{/* */} </span>
          <span className="text-dev-keyword">Loading</span>
          <span className={isDarkMode ? "text-dev-operator" : "text-gray-600"}>
            {" "}
            portfolio
          </span>
          <span className="text-dev-string">...</span>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className={`mt-4 text-sm font-mono transition-colors ${
            isDarkMode ? "text-dev-textMuted" : "text-gray-600"
          }`}
        >
          <span className="text-dev-comment">{/* */} </span>
          Initializing awesome content
          <span className="text-dev-comment"> {/* */}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

LoadingScreen.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default LoadingScreen;
