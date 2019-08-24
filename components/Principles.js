import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wheel } from './';

const items = [
  {
    header: 'DETERMINATION',
    body:
      'We see it through to the end, no matter what. The hours can be long and the work can be hard, but we love it. We dig into the details and make ourselves comfortable.',
  },
  {
    header: 'CIVILITY',
    body:
      'Uncivil conduct leads to grave mistakes. We heed our grandmas’ advice: be kind, be courteous, act ethically and no mudslinging. Effective counsel hinges on respect.',
  },
  {
    header: 'COMPASSION',
    body:
      'Law is emotionally taxing and physically exhausting. And that’s how we feel about it. We get that it is worse for you and we won’t forget it.',
  },
  {
    header: 'INTEGRITY',
    body:
      'We are who we say we are. We do what we say we will do. It’s just that simple.',
  },
  {
    header: 'HUMOR',
    body:
      'The practice of law is a serious business but it doesn’t have to be without laughter. Laughter improves health, overall quality of life, and leads to greater productivity.',
  },
  {
    header: 'CURIOSITY',
    body:
      'We’re not good lawyers because we love to argue. We are good lawyers because we have insatiable appetites for learning.',
  },
];

const Principles = () => {
  const [active, set] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [, active]);

  const setActive = i => {
    if (active === i) return;
    setShowText(false);
    setTimeout(() => set(i), 300);
  };

  const bodyTextVariants = {
    hidden: { opacity: 0, scale: 0.2, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.6 },
    },
  };

  return (
    <section id="principles" className="flex flex-col">
      <div className="container mx-auto">
        <h2 className="text-center">
          Our principles <br />
          guide our every move
        </h2>
        <div className="flex items-center justify-center relative">
          <Wheel active={active} setActive={setActive} />
          <div className="body">
            <motion.div
              initial="visible"
              animate={showText ? 'visible' : 'hidden'}
              variants={bodyTextVariants}
            >
              <p>{items[active].body}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #principles {
          background-color: #f4f4f4;
        }
        .body {
          font-size: 28px;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          max-width: 400px;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Principles;
