import {motion} from 'framer-motion';

export default function HeroContent() {
  const text = 'American Style Cookies crafted by our European Patisserie';
  const words = text.split(' ');
  let i = 0;

  return (
    <>
      <div className="relative max-w-[90%] sm:max-w-[50%] text-center z-30 font-silk h1-size text-dark">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block pl-3">
            {word.split('').map((char, charIndex) => {
              i++;
              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  initial={{opacity: 0, y: -10, x: -10}}
                  animate={{opacity: 1, y: 0, x: 0}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIndex !== words.length - 1 && ' '}
          </span>
        ))}
      </div>
      <h1 className="absolute opacity-0 pointer-events-none">
        American Style Cookies crafted by our European Patisserie
      </h1>
    </>
  );
}
