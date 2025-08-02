import { motion } from 'framer-motion'
import { Code2, Database, Server, Wrench } from 'lucide-react'

const Skills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={24} />,
      color: 'primary',
      prefix: 'frontend',
      skills: [
        { name: 'HTML5', level: 95, syntax: '<html>' },
        { name: 'CSS3', level: 92, syntax: '.style {}' },
        { name: 'JavaScript', level: 90, syntax: 'const js = true;' },
        { name: 'React', level: 88, syntax: '<Component />' },
        { name: 'Tailwind CSS', level: 85, syntax: 'className=""' }
      ]
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      color: 'secondary',
      prefix: 'backend',
      skills: [
        { name: 'Node.js', level: 85, syntax: 'require("node")' },
        { name: 'Express.js', level: 82, syntax: 'app.get("/")' },
        { name: 'REST APIs', level: 88, syntax: 'GET /api/data' },
        { name: 'JWT Auth', level: 80, syntax: 'jwt.sign({})' }
      ]
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      color: 'accent',
      prefix: 'database',
      skills: [
        { name: 'MongoDB', level: 85, syntax: 'db.find({})' },
        { name: 'Firebase', level: 80, syntax: 'firebase.init()' },
        { name: 'MySQL', level: 75, syntax: 'SELECT * FROM' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Wrench size={24} />,
      color: 'primary',
      prefix: 'tools',
      skills: [
        { name: 'Git & GitHub', level: 90, syntax: 'git commit -m' },
        { name: 'VS Code', level: 95, syntax: 'code .' },
        { name: 'Figma', level: 78, syntax: 'design.create()' },
        { name: 'Postman', level: 85, syntax: 'POST /test' }
      ]
    }
  ]

  const getColorClasses = (color, isDarkMode) => {
    const colors = {
      primary: { 
        bg: isDarkMode ? 'bg-primary-500/10' : 'bg-primary-100', 
        bar: 'bg-primary-500', 
        text: isDarkMode ? 'text-primary-400' : 'text-primary-700', 
        border: isDarkMode ? 'border-primary-500/30' : 'border-primary-200' 
      },
      secondary: { 
        bg: isDarkMode ? 'bg-secondary-500/10' : 'bg-secondary-100', 
        bar: 'bg-secondary-500', 
        text: isDarkMode ? 'text-secondary-400' : 'text-secondary-700', 
        border: isDarkMode ? 'border-secondary-500/30' : 'border-secondary-200' 
      },
      accent: { 
        bg: isDarkMode ? 'bg-accent-500/10' : 'bg-accent-100', 
        bar: 'bg-accent-500', 
        text: isDarkMode ? 'text-accent-400' : 'text-accent-700', 
        border: isDarkMode ? 'border-accent-500/30' : 'border-accent-200' 
      }
    }
    return colors[color]
  }

  return (
    <section 
      id="skills" 
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
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="font-mono text-dev-comment text-lg">// </span>
            <h2 className={`text-3xl sm:text-4xl font-bold font-mono transition-colors ${
              isDarkMode ? 'text-dev-text' : 'text-gray-900'
            }`}>
              <span className="text-dev-keyword">const</span>{' '}
              <span className="text-dev-variable">skills</span>{' '}
              <span className={isDarkMode ? 'text-dev-operator' : 'text-gray-600'}>=</span>{' '}
              <span className="text-dev-string">"Technologies & Tools"</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto font-mono transition-colors ${
            isDarkMode ? 'text-dev-textMuted' : 'text-gray-600'
          }`}>
            <span className="text-dev-comment">/* </span>
            Here are the technologies and tools I work with to bring ideas to life
            <span className="text-dev-comment"> */</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color, isDarkMode)
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl shadow-sm hover:shadow-md transition-all p-6 border-2 ${colors.border} hover:border-opacity-50 ${
                  isDarkMode ? 'bg-dev-surface' : 'bg-white'
                }`}
              >
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-mono font-medium mb-6 ${colors.bg} ${colors.text}`}>
                  <span className="mr-2">{category.icon}</span>
                  <span className="text-dev-comment">// </span>
                  {category.prefix}
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex flex-col">
                          <span className={`text-sm font-medium font-mono transition-colors ${
                            isDarkMode ? 'text-dev-text' : 'text-gray-700'
                          }`}>{skill.name}</span>
                          <span className="text-xs text-dev-comment font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.syntax}
                          </span>
                        </div>
                        <span className={`text-sm font-mono transition-colors ${
                          isDarkMode ? 'text-dev-textMuted' : 'text-gray-500'
                        }`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full rounded-full h-2 overflow-hidden ${
                        isDarkMode ? 'bg-dev-border' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${colors.bar} relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Code snippet showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-16 rounded-xl p-8 border backdrop-blur-sm transition-colors ${
            isDarkMode 
              ? 'bg-dev-surface/50 border-dev-border' 
              : 'bg-white/50 border-gray-200'
          }`}
        >
          <h3 className={`font-mono text-lg font-semibold mb-4 transition-colors ${
            isDarkMode ? 'text-dev-text' : 'text-gray-900'
          }`}>
            <span className="text-dev-comment">// </span>My development philosophy
          </h3>
          <pre className="font-mono text-sm overflow-x-auto">
            <code className={isDarkMode ? 'text-dev-text' : 'text-gray-700'}>
              <span className="text-dev-keyword">function</span>{' '}
              <span className="text-dev-function">buildAmazingApps</span>() {'{'}
              <br />
              {'  '}<span className="text-dev-keyword">const</span>{' '}
              <span className="text-dev-variable">approach</span> = {'{'}
              <br />
              {'    '}<span className="text-dev-string">cleanCode</span>: <span className="text-dev-keyword">true</span>,
              <br />
              {'    '}<span className="text-dev-string">userFirst</span>: <span className="text-dev-keyword">true</span>,
              <br />
              {'    '}<span className="text-dev-string">performance</span>: <span className="text-dev-string">"optimized"</span>,
              <br />
              {'    '}<span className="text-dev-string">responsive</span>: <span className="text-dev-string">"always"</span>
              <br />
              {'  '}{'}'}
              <br />
              {'  '}<span className="text-dev-keyword">return</span>{' '}
              <span className="text-dev-string">"exceptional user experience"</span>;
              <br />
              {'}'}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills