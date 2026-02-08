import { motion, Variants } from 'motion/react';
import NavMenu from './NavMenu';

const App = () => {
  const acronym = [
    { letter: 'D', word: 'iary' },
    { letter: 'O', word: 'rganizer' },
    { letter: 'R', word: 'oadmap' },
    { letter: 'O', word: 'ptimizer' },
    { letter: 'H', word: 'elper' },
    { letter: 'A', word: 'lly' },
  ];

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const rowVariant: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 1.5 } },
  };

  const letterVariant: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const wordVariant: Variants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="main-wrapper">
      <NavMenu />

      <motion.div
        className="ml-20
        my-auto
        font-['Be_Vietnam_Pro',sans-serif]"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {acronym.map(({ letter, word }, index) => (
          <motion.div
            key={`$word-${index}`}
            className="flex items-baseline overflow-hidden"
            variants={rowVariant}
          >
            <motion.span
              className="
              font-black
              text-8xl
              text-[#f06231]
              leading-none"
              variants={letterVariant}
            >
              {letter}
            </motion.span>

            <motion.span
              className="text-6xl
              font-bold
              text-left
              leading-none"
              variants={wordVariant}
            >
              {word}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default App;
