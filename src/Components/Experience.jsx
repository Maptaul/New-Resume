import { motion } from 'framer-motion'
import { Star, Award, Clock, Users } from 'lucide-react'

const Experience = ({ isDarkMode }) => {
  const platforms = [
    {
      name: 'Fiverr',
      level: 'Level 2 Seller',
      badge: 'Top Rated',
      stats: [
        { icon: <Star size={20} />, label: 'Reviews', value: '400+', color: 'text-yellow-600' },
        { icon: <Award size={20} />, label: 'Rating', value: '4.9/5', color: 'text-green-600' },
        { icon: <Users size={20} />, label: 'Projects', value: '250+', color: 'text-blue-600' }
      ],
      description: 'Specialized in React development, e-commerce solutions, and full-stack web applications.',
      achievements: [
        'Maintained 100% on-time delivery rate',
        'Completed complex e-commerce projects',
        'Built long-term client relationships',
        'Expert in React and Node.js development'
      ],
      color: 'primary'
    },
    {
      name: 'Upwork',
      level: 'Top Rated',
      badge: '100% Job Success',
      stats: [
        { icon: <Clock size={20} />, label: 'Hours', value: '679+', color: 'text-purple-600' },
        { icon: <Award size={20} />, label: 'Success Rate', value: '100%', color: 'text-green-600' },
        { icon: <Users size={20} />, label: 'Clients', value: '50+', color: 'text-blue-600' }
      ],
      description: 'Focus on high-quality web development projects with emphasis on modern frameworks.',
      achievements: [
        'Achieved Top Rated status quickly',
        'Maintained 100% job success score',
        'Specialized in React and MongoDB',
        'Delivered complex full-stack solutions'
      ],
      color: 'secondary'
    }
  ]

  const getColorClasses = (color, isDarkMode) => {
    const colors = {
      primary: { 
        bg: isDarkMode ? 'from-primary-500/10 to-primary-600/10' : 'from-primary-50 to-primary-100', 
        text: isDarkMode ? 'text-primary-400' : 'text-primary-700',
        badge: 'bg-primary-600',
        border: isDarkMode ? 'border-primary-500/30' : 'border-primary-200'
      },
      secondary: { 
        bg: isDarkMode ? 'from-secondary-500/10 to-secondary-600/10' : 'from-secondary-50 to-secondary-100', 
        text: isDarkMode ? 'text-secondary-400' : 'text-secondary-700',
        badge: 'bg-secondary-600',
        border: isDarkMode ? 'border-secondary-500/30' : 'border-secondary-200'
      }
    }
    return colors[color]
  }

  return (
    <section 
      id="experience" 
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-dev-bg' : 'bg-gray-50'
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
            <span className="text-dev-variable">experience</span>{' '}
            <span className={isDarkMode ? 'text-dev-operator' : 'text-gray-600'}>=</span>{' '}
            <span className="text-dev-string">"Freelance Journey"</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono transition-colors ${
            isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
          }`}>
            <span className="text-dev-comment">/* </span>
            Building successful partnerships with clients worldwide through quality work and reliable service
            <span className="text-dev-comment"> */</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {platforms.map((platform, index) => {
            const colors = getColorClasses(platform.color, isDarkMode)
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${colors.bg} rounded-xl p-8 shadow-sm hover:shadow-md transition-all border-2 ${colors.border} hover:border-opacity-50 ${
                  isDarkMode ? 'shadow-primary-500/10' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-1 transition-colors ${
                      isDarkMode ? 'text-dev-text' : 'text-gray-900'
                    }`}>{platform.name}</h3>
                    <p className={`transition-colors ${
                      isDarkMode ? 'text-dev-textSecondary' : 'text-gray-600'
                    }`}>{platform.level}</p>
                  </div>
                  <div className={`px-3 py-1 ${colors.badge} text-white rounded-full text-sm font-medium`}>
                    {platform.badge}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {platform.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05 }}
                      className={`text-center p-3 rounded-lg shadow-sm transition-colors ${
                        isDarkMode ? 'bg-dev-surface' : 'bg-white'
                      }`}
                    >
                      <div className={`flex justify-center mb-2 ${stat.color}`}>
                        {stat.icon}
                      </div>
                      <div className={`text-xl font-bold transition-colors ${
                        isDarkMode ? 'text-dev-text' : 'text-gray-900'
                      }`}>{stat.value}</div>
                      <div className={`text-xs transition-colors ${
                        isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
                      }`}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <p className={`mb-6 leading-relaxed transition-colors ${
                  isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                }`}>{platform.description}</p>

                <div className="space-y-2">
                  <h4 className={`font-semibold mb-3 transition-colors ${
                    isDarkMode ? 'text-dev-text' : 'text-gray-900'
                  }`}>Key Achievements:</h4>
                  {platform.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center transition-colors ${
                        isDarkMode ? 'text-dev-textSecondary' : 'text-gray-700'
                      }`}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-12 text-center rounded-xl p-8 shadow-sm border transition-colors ${
            isDarkMode 
              ? 'bg-dev-surface border-dev-border' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-xl font-bold mb-4 font-mono transition-colors ${
            isDarkMode ? 'text-dev-text' : 'text-gray-900'
          }`}>
            <span className="text-dev-comment">// </span>Ready to Work Together?
          </h3>
          <p className={`mb-6 max-w-2xl mx-auto transition-colors ${
            isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
          }`}>
            I'm always excited to take on new challenges and help bring your ideas to life. 
            Let's discuss how we can work together to create something amazing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors font-mono"
          >
            <span className="text-primary-200">// </span>start_project()
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience