import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ childRef, showArrow, isDesktop, children }) => {
  const [arrowAsset, set] = useState(null);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 3 } },
  };

  useEffect(() => {
    const asset = isDesktop
      ? '/static/arrow-down.svg'
      : '/static/arrow-down-mobile.svg';
    set(asset);
  }, [isDesktop]);

  return (
    <div
      ref={childRef}
      className="hero py-4 px-8 lg:px-2 flex flex-column items-center justify-center"
    >
      {children}

      <motion.img
        variants={variants}
        initial="hidden"
        animate={showArrow ? 'visible' : 'hidden'}
        className="hero__arrow"
        src={arrowAsset}
      />

      <style jsx global>{`
        .hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          background-visibility: hidden;
        }

        .hero__arrow {
          position: absolute;
          bottom: 30px;
          right: 50%;
          z-index: 100;
          transform: translateX(45%);
          width: 28px;
          height: 24px;
        }

        @media (min-width: 1024px) {
          .hero__arrow {
            width: 38px;
            height: 31px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
