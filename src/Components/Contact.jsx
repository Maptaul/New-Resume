import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      theme: isDarkMode ? "dark" : "light",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "maptaul912@gmail.com",
      href: "mailto:maptaul912@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "WhatsApp",
      value: "+880 1846-035436",
      href: "https://wa.me/8801846035436",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Chattogram, Bangladesh",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-dev-surface" : "bg-white"
      } relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-6 font-mono ${
              isDarkMode ? "text-dev-text" : "text-gray-900"
            }`}
          >
            <span className="text-dev-comment">// </span>
            <span className="text-dev-keyword">const</span>{" "}
            <span className="text-dev-variable">contact</span>{" "}
            <span
              className={isDarkMode ? "text-dev-operator" : "text-gray-600"}
            >
              =
            </span>{" "}
            <span className="text-dev-string">"Contact Me"</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto font-mono ${
              isDarkMode ? "text-dev-textMuted" : "text-gray-600"
            }`}
          >
            <span className="text-dev-comment">/* </span>
            Interested in working together or have a question? Feel free to
            reach out and I'll get back to you as soon as possible!
            <span className="text-dev-comment"> */</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-bold mb-8 font-mono ${
                isDarkMode ? "text-dev-text" : "text-gray-900"
              }`}
            >
              <span className="text-dev-comment">// </span>Let's Connect
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isDarkMode
                        ? "bg-primary-500/20 text-primary-400"
                        : "bg-primary-100 text-primary-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-dev-textMuted" : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium ${
                          isDarkMode
                            ? "text-dev-text hover:text-primary-400"
                            : "text-gray-900 hover:text-primary-600"
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`font-medium ${
                          isDarkMode ? "text-dev-text" : "text-gray-900"
                        }`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              className={`rounded-xl p-6 border ${
                isDarkMode
                  ? "bg-dev-elevated border-dev-border"
                  : "bg-gradient-to-br from-primary-50 to-secondary-50 border-gray-200"
              }`}
            >
              <h4
                className={`font-semibold mb-3 ${
                  isDarkMode ? "text-dev-text" : "text-gray-900"
                }`}
              >
                Fast Replies
              </h4>
              <p
                className={`text-sm mb-4 ${
                  isDarkMode ? "text-dev-textMuted" : "text-gray-600"
                }`}
              >
                I usually respond within a few hours during the day. For urgent
                matters, please use WhatsApp.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/8801846035436"
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:maptaul912@gmail.com"
                  className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700"
                >
                  <Mail size={16} className="mr-2" />
                  Email
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/movlnynq"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                    isDarkMode
                      ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                    isDarkMode
                      ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                  isDarkMode
                    ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Tell me about you or how I can help you..."
                className={`w-full px-4 py-3 border rounded-lg resize-none transition-colors ${
                  isDarkMode
                    ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700"
              >
                <Send size={20} className="mr-2" />
                <span className="font-mono">
                  <span className="text-primary-200">// </span>send_message()
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Go to Top Button */}
      {showGoToTop && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </section>
  );
};

export default Contact;
