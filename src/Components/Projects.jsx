import { motion } from "framer-motion";
import { Code2, ExternalLink, Folder, Github, Terminal } from "lucide-react";

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Grievance Redress System",
      description:
        "Complaint Management System The Complaint Management System is a web application that enables citizens to submit and track grievances while providing administrators with tools to manage and resolve complaints efficiently.",
      image: "https://i.ibb.co/G3FtM7pR/Grievance-Redress-System.png",
      technologies: ["React", "Node.js", "MongoDB", "i18next"],
      liveUrl: "https://ctggrievance.vercel.app",
      githubUrl: "https://github.com/Maptaul/Grievance-",
      featured: true,
      codeSnippet: "GrievanceRedressSystem();",
    },
    {
      title: "LearnBridge - Collaborative Study Platform",
      description:
        "The Collaborative Study Platform simplifies education by connecting students, tutors, and admins. It enables efficient study session management, resource sharing, and streamlined collaboration.",
      image: "https://i.ibb.co/SwLSt09p/Learn-Bridge.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "TanStack Query"],
      liveUrl: "https://learnbridge-26280.web.app",
      githubUrl: "https://github.com/Maptaul/LearnBridge-client",
      featured: true,
      codeSnippet: "LearnBridge - Collaborative Study Platform();",
    },
    {
      title: "Serve-Together",
      description:
        "a user-friendly platform for volunteer management where a user can create a volunteer need post, update and delete a post, and a user can be a volunteer for others post.",
      image: "https://i.ibb.co/0V6BFk3k/servetogether.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://servetogether-e28be.web.app/#",
      githubUrl: "https://github.com/Maptaul/ServeTogether-clinet",
      featured: true,
      codeSnippet: "ServeTogether();",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Framer Motion animations.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      codeSnippet: "portfolio.showcase();",
    },
    {
      title: "Gamelense",
      description:
        "Chill Gamer, a user-friendly game review application. The goal of this project is to design a platform where users can explore and share game reviews. Users can also create, update, and delete their reviews.",
      image: "https://i.ibb.co/0PJ8ynv/image.png",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      liveUrl: "https://gamelense-fc12c.web.app/",
      githubUrl: "https://github.com/Maptaul/Game-lense-client",
      featured: false,
      codeSnippet: "gamelense.review();",
    },
    {
      title: "Bangla Voucher",
      description:
        "Discount PRO is a Coupon Collecting Application designed to help users easily find and use discount coupons for popular e-commerce shops in Bangladesh.",
      image: "https://i.ibb.co/xS4YmWfG/image.png",
      technologies: ["React", "Chart.js", "Local Storage"],
      liveUrl: "https://banglavoucher.web.app/#slide2",
      githubUrl: "https://github.com/Maptaul/BanglaVoucher",
      featured: false,
      codeSnippet: "DiscountPRO.coupons();",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
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
          <div className="inline-flex items-center space-x-2 mb-6">
            <Terminal className="text-primary-500" size={24} />
            <h2
              className={`text-3xl sm:text-4xl font-bold font-mono transition-colors ${
                isDarkMode ? "text-dev-text" : "text-gray-900"
              }`}
            >
              <span className="text-dev-keyword">const</span>{" "}
              <span className="text-dev-variable">projects</span>{" "}
              <span
                className={isDarkMode ? "text-dev-operator" : "text-gray-600"}
              >
                =
              </span>{" "}
              <span className="text-dev-string">"Featured Work"</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto font-mono transition-colors ${
              isDarkMode ? "text-dev-textMuted" : "text-gray-600"
            }`}
          >
            <span className="text-dev-comment">/* </span>
            Here are some of my recent projects that showcase my skills and
            experience
            <span className="text-dev-comment"> */</span>
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-2 hover:border-primary-500/30 ${
                isDarkMode
                  ? "bg-dev-elevated border-dev-border"
                  : "bg-white border-gray-100 hover:border-primary-200"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-fit group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-700 hover:text-primary-600 transition-colors"
                    title="// View live demo"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-700 hover:text-primary-600 transition-colors"
                    title="// View source code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {/* Code snippet overlay */}
                <div
                  className={`absolute top-4 left-4 backdrop-blur-sm rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity ${
                    isDarkMode ? "bg-dev-surface/90" : "bg-white/90"
                  }`}
                >
                  <code
                    className={`text-xs font-mono transition-colors ${
                      isDarkMode ? "text-dev-text" : "text-gray-800"
                    }`}
                  >
                    {project.codeSnippet}
                  </code>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Code2 className="text-primary-500" size={20} />
                  <h3
                    className={`text-xl font-bold font-mono transition-colors ${
                      isDarkMode ? "text-dev-text" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
                <p
                  className={`mb-4 leading-relaxed transition-colors ${
                    isDarkMode ? "text-dev-textSecondary" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-mono font-medium transition-colors ${
                        isDarkMode
                          ? "bg-primary-500/20 text-primary-400"
                          : "bg-primary-100 text-primary-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center font-mono font-medium transition-colors ${
                      isDarkMode
                        ? "text-primary-400 hover:text-primary-300"
                        : "text-primary-600 hover:text-primary-700"
                    }`}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-dev-comment">// </span>live_demo()
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center font-mono font-medium transition-colors ${
                      isDarkMode
                        ? "text-dev-textSecondary hover:text-dev-text"
                        : "text-gray-600 hover:text-gray-700"
                    }`}
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-dev-comment">// </span>source_code()
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3
            className={`text-2xl font-bold mb-8 text-center font-mono transition-colors ${
              isDarkMode ? "text-dev-text" : "text-gray-900"
            }`}
          >
            <span className="text-dev-comment">// </span>Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-lg hover:shadow-md transition-all border-2 border-transparent hover:border-primary-500/20 ${
                  isDarkMode
                    ? "bg-dev-elevated hover:bg-dev-surface"
                    : "bg-gray-50 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Folder className="text-primary-500" size={24} />
                    <code
                      className={`text-xs font-mono transition-colors ${
                        isDarkMode ? "text-dev-comment" : "text-gray-500"
                      }`}
                    >
                      {project.codeSnippet}
                    </code>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${
                        isDarkMode
                          ? "text-dev-textMuted hover:text-primary-400"
                          : "text-gray-500 hover:text-primary-600"
                      }`}
                      title="// View source"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${
                        isDarkMode
                          ? "text-dev-textMuted hover:text-primary-400"
                          : "text-gray-500 hover:text-primary-600"
                      }`}
                      title="// View live"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h4
                  className={`text-lg font-semibold mb-2 font-mono transition-colors ${
                    isDarkMode ? "text-dev-text" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h4>
                <p
                  className={`text-sm mb-4 leading-relaxed transition-colors ${
                    isDarkMode ? "text-dev-textSecondary" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-1 rounded font-mono transition-colors ${
                        isDarkMode
                          ? "text-dev-textMuted bg-dev-border"
                          : "text-gray-600 bg-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
