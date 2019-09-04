import cx from 'classnames';

const Hero = ({ childRef, sticky, children }) => {
  return (
    <div
      ref={childRef}
      className="hero py-4 px-8 lg:px-2 flex flex-column items-center justify-center"
    >
      {children}
      <img
        className={cx('hero__arrow', { 'hero__arrow--hidden': sticky })}
        src="/static/arrow-down.svg"
      />
      <style jsx>{`
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
          transition: opacity 0.2s ease-in-out;
          width: 27.506px;
          height: 22.402px;
        }

        .hero__arrow--hidden {
          opacity: 0;
          visibility: hidden;
        }

        @media (min-width: 1024px) {
          .hero__arrow {
            width: 36.393px;
            height: 29.943px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
