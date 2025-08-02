import { motion } from 'framer-motion'
import { GraduationCap, Heart, Code, Trophy } from 'lucide-react'

const About = ({ isDarkMode }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Tech Journey',
      description: 'Started coding in 2019, specializing in full-stack development with modern technologies'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Education',
      description: 'B.Ed degree and Diploma in DCSA, combining education and technical expertise'
    },
    {
      icon: <Heart size={24} />,
      title: 'Passion',
      description: 'Love creating user-friendly applications that solve real-world problems'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Achievement',
      description: 'Top-rated freelancer with 500+ successful projects and satisfied clients'
    }
  ]

  return (
    <section 
      id="about" 
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-dev-surface' : 'bg-white'
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
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 font-mono transition-colors ${
            isDarkMode ? 'text-dev-text' : 'text-gray-900'
          }`}>
            <span className="text-dev-comment">// </span>
            <span className="text-dev-keyword">const</span>{' '}
            <span className="text-dev-variable">aboutMe</span>{' '}
            <span className={isDarkMode ? 'text-dev-operator' : 'text-gray-600'}>=</span>{' '}
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
            <div className={`prose prose-lg leading-relaxed transition-colors ${
              isDarkMode ? 'text-dev-textSecondary' : 'text-gray-600'
            }`}>
              <p className="text-xl mb-6">
                Hello! I'm Jashedul Islam Shaun, a passionate Full Stack Developer with a love for creating 
                exceptional digital experiences. My journey in web development started in 2019, and since then 
                I've been dedicated to mastering the art of building scalable, user-friendly applications.
              </p>
              <p className="mb-6">
                With a background in education (B.Ed) and computer science (Diploma in DCSA), I bring a unique 
                perspective to development that combines technical expertise with strong communication skills. 
                This educational foundation helps me understand user needs and translate complex requirements 
                into simple, elegant solutions.
              </p>
              <p className="mb-6">
                I specialize in modern web technologies including React, Node.js, and MongoDB, with a particular 
                focus on e-commerce solutions. My experience as a freelancer has given me the opportunity to work 
                with diverse clients and projects, from small business websites to complex web applications.
              </p>
              <p>
                When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, 
                and sharing my knowledge with the developer community. I believe in continuous learning and 
                staying updated with the latest industry trends.
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
                    ? 'bg-dev-elevated border-dev-border hover:border-primary-500/30' 
                    : 'bg-gradient-to-br from-primary-50 to-secondary-50 border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-600 text-white rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h3 className={`font-semibold transition-colors ${
                    isDarkMode ? 'text-dev-text' : 'text-gray-900'
                  }`}>{item.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed transition-colors ${
                  isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
                }`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About