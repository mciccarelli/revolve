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
      'Law is emotionally taxing and physically exhausting. And that’s how we feel about it. We get that it is worse for you, and we won’t forget it.',
  },
  {
    header: 'INTEGRITY',
    body:
      'We are who we say we are. We do what we say we will do. It’s just that simple.',
  },
  {
    header: 'HUMOR',
    body:
      'The practice of law is a serious business, but it doesn’t have to be without laughter. Laughter improves health, overall quality of life, and leads to greater productivity.',
  },
  {
    header: 'CURIOSITY',
    body:
      'We’re not good lawyers because we love to argue. We are good lawyers because we have insatiable appetites for learning.',
  },
];

const getNewRotation = (i, current) => {
  switch (current) {
    case 0:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return 180;
      if (i === 4) return 120;
      if (i === 5) return 60;
      break;
    case -60:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return -180;
      if (i === 4) return 120;
      if (i === 5) return 60;
      break;
    case -120:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return -180;
      if (i === 4) return -240;
      if (i === 5) return 60;
      break;
    case -180:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return -180;
      if (i === 4) return -240;
      if (i === 5) return -300;
      break;
    case 180:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return 180;
      if (i === 4) return 120;
      if (i === 5) return 60;
      break;
    case -240:
      if (i === 0) return -360;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return -180;
      if (i === 4) return -240;
      if (i === 5) return -300;
    case -300:
      if (i === 0) return -360;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return -180;
      if (i === 4) return -240;
      if (i === 5) return -300;
    case -360:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return 180;
      if (i === 4) return 120;
      if (i === 5) return 60;
    case 120:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return 180;
      if (i === 4) return 120;
      if (i === 5) return 60;
      break;
    case 60:
      if (i === 0) return 0;
      if (i === 1) return -60;
      if (i === 2) return -120;
      if (i === 3) return 180;
      if (i === 4) return 120;
      if (i === 5) return 60;
      break;
  }
};

const Principles = () => {
  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [, active]);

  const handleTabClick = async i => {
    if (active === i) return;

    // hide body text
    setShowText(false);

    await setRotate(getNewRotation(i, rotate));
    setTimeout(() => setActive(i), 400);
  };

  const bodyTextVariants = {
    hidden: { opacity: 0, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="principles" className="flex flex-col">
      <div className="container mx-auto">
        <h2 className="text-center">
          Our principles <br />
          guide our every move
        </h2>
        <div className="flex items-center justify-center ">
          <div className="wheel-container relative">
            <Wheel
              active={active}
              rotate={rotate}
              handleTabClick={handleTabClick}
            />

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
      </div>

      <style jsx global>{`
        #principles {
          background-color: #f4f4f4;
        }

        #principles h2 {
          margin-bottom: 50px;
        }

        .wheel-container {
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          position: relative;
          overflow: hidden;
        }

        #principles .body {
          font-size: 14px;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          max-width: 200px;
          width: 100%;
        }

        @media (min-width: 640px) {
          #principles .body {
            font-size: 18px;
            max-width: 300px;
          }
        }

        @media (min-width: 1024px) {
          #principles h2 {
            margin-bottom: 100px;
          }

          .wheel-container {
            width: 800px;
            height: 800px;
            padding: 0;
          }

          #principles .body {
            font-size: 28px;
            max-width: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Principles;
