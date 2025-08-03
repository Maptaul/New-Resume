import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can integrate with a backend service)
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent successfully! I'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            className={`text-lg max-w-2xl mx-auto font-mono transition-colors ${
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
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-bold mb-8 font-mono transition-colors ${
                isDarkMode ? "text-dev-text" : "text-gray-900"
              }`}
            >
              <span className="text-dev-comment">// </span>Let's Connect
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      isDarkMode
                        ? "bg-primary-500/20 text-primary-400"
                        : "bg-primary-100 text-primary-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className={`text-sm transition-colors ${
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
                        className={`font-medium transition-colors ${
                          isDarkMode
                            ? "text-dev-text hover:text-primary-400"
                            : "text-gray-900 hover:text-primary-600"
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`font-medium transition-colors ${
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
              className={`rounded-xl p-6 border transition-colors ${
                isDarkMode
                  ? "bg-dev-elevated border-dev-border"
                  : "bg-gradient-to-br from-primary-50 to-secondary-50 border-gray-200"
              }`}
            >
              <h4
                className={`font-semibold mb-3 transition-colors ${
                  isDarkMode ? "text-dev-text" : "text-gray-900"
                }`}
              >
                Fast Replies
              </h4>
              <p
                className={`text-sm mb-4 transition-colors ${
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:maptaul912@gmail.com"
                  className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
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
              netlify
              onSubmit={handleSubmit}
              className="space-y-6"
              action="https://formspree.io/f/meokvyze"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 transition-colors ${
                      isDarkMode ? "text-dev-textSecondary" : "text-gray-700"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      isDarkMode
                        ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 transition-colors ${
                      isDarkMode ? "text-dev-textSecondary" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      isDarkMode
                        ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    isDarkMode ? "text-dev-textSecondary" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    isDarkMode
                      ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 transition-colors ${
                    isDarkMode ? "text-dev-textSecondary" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                    isDarkMode
                      ? "bg-dev-elevated border-dev-border text-dev-text placeholder-dev-textMuted"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Tell me about you or how I can help you..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
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
    </section>
  );
};

export default Contact;
