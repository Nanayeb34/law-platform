import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const programs = [
  {
    name: 'Law',
    description: 'Explore legal topics, quizzes, and achievements.',
    icon: '⚖️',
    enabled: true,
    route: '/law',
  },
  {
    name: 'Medicine',
    description: 'Coming soon: medical topics and quizzes.',
    icon: '🩺',
    enabled: false,
    route: '/medicine',
  },
  {
    name: 'Accounting',
    description: 'Coming soon: accounting topics and quizzes.',
    icon: '📊',
    enabled: false,
    route: '/accounting',
  },
];

const ProgramSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-2 text-blue-700 dark:text-blue-300">Welcome to Study Portal</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Select the program you want to study</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-6">
          {programs.map((program, idx) => (
            <motion.div
              key={program.name}
              whileHover={program.enabled ? { scale: 1.04, y: -5 } : {}}
              whileTap={program.enabled ? { scale: 0.98 } : {}}
              className={`card w-full p-8 flex flex-col items-center transition-all duration-200 cursor-pointer ${
                program.enabled ? 'bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl' : 'bg-slate-100 dark:bg-slate-800 opacity-50 cursor-not-allowed'
              }`}
              onClick={() => program.enabled && navigate(program.route)}
              tabIndex={program.enabled ? 0 : -1}
              aria-disabled={!program.enabled}
            >
              <div className="text-6xl mb-4">{program.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{program.name}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-center text-base md:text-sm">{program.description}</p>
              {!program.enabled && (
                <span className="mt-4 text-xs text-slate-400 dark:text-slate-500">Coming soon</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramSelect; 