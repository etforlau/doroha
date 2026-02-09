import { useEffect } from 'react';
import { useAnimate, stagger, AnimationSequence } from 'motion/react';
import NavMenu from './NavMenu';
import homepageAnimation from '@/assets/easy_travel.gif';

const App = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const sequence: AnimationSequence = [
      ['#name', { opacity: [0, 1] }, { duration: 1 }],
      ['.name-row', { opacity: [0, 1], y: [-24, 0] }, { delay: stagger(0.2) }],
      ['.word-span', { opacity: [0, 1], x: [-10, 0] }, { delay: stagger(0.2) }],
      ['#homepage-animation', { opacity: [0, 1], x: [70, 0] }, { at: '+0.2' }],
      ['#nav-menu', { opacity: [0, 1], x: [-30, 0] }, { at: '+0.3' }],
      ['#credits-span', { opacity: [0, 1], y: [5, 0] }, { at: '+0.3' }],
    ];
    animate(sequence);
  });

  const acronym = [
    { letter: 'D', word: 'iary' },
    { letter: 'O', word: 'rganizer' },
    { letter: 'R', word: 'oadmap' },
    { letter: 'O', word: 'ptimizer' },
    { letter: 'H', word: 'elper' },
    { letter: 'A', word: 'lly' },
  ];

  return (
    <div className="main-wrapper" ref={scope}>
      <NavMenu id="nav-menu" />

      <div
        id="name"
        className="min-w-fit
        flex
        flex-col
        pl-20
        py-5
        font-['Be_Vietnam_Pro',sans-serif]"
      >
        {acronym.map(({ letter, word }, index) => (
          <div
            key={`$word-${index}`}
            className="name-row
            flex
            items-baseline
            overflow-hidden"
          >
            <span
              className="letter-span
              font-black
              text-8xl
              text-[#f06231]
              leading-none"
            >
              {letter}
            </span>

            <span
              className="word-span
              text-6xl
              font-bold
              text-left
              leading-none"
            >
              {word}
            </span>
          </div>
        ))}

        <span id="credits-span" className="mt-auto">
          <a
            href="https://iconscout.com/lottie-animations/man"
            className="underline font-size-sm"
            target="_blank"
            rel="noreferrer"
          >
            Man check hotel booking calendar
          </a>
          {' by '}
          <a
            href="https://iconscout.com/contributors/odkayo"
            className="underline font-size-sm"
            target="_blank"
            rel="noreferrer"
          >
            Ona Chang
          </a>
        </span>
      </div>

      <img
        id="homepage-animation"
        src={homepageAnimation}
        alt="Man checking booking on laptop"
        aria-hidden="true"
        className="
        w-[40%]
        ml-auto
        mr-20
        pointer-events-none
        object-contain"
      />
    </div>
  );
};

export default App;
