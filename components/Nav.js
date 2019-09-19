import cx from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  hidden: { y: '100%' },
  visible: { y: 0 },
};

const Nav = ({ sticky }) => {
  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cx('nav', { 'nav--sticky': sticky })}
    >
      <ul className="flex justify-between items-center ">
        <h1>REVOLVE Law Group</h1>
        <div className="flex justify-between items-center">
          <h2>A Law Firm based in Irvine, California</h2>
        </div>
      </ul>
      <style jsx global>{`
        .nav {
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 99;
          width: 100%;
          height: var(--navbar-height);
          background: black;
          padding: 20px 1rem;
        }

        .nav--sticky {
          position: fixed;
          top: 0;
          bottom: auto;
        }

        .nav ul {
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .nav h1 {
          font-size: 16px;
          font-weight: 900;
        }

        .nav h2 {
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>
    </motion.nav>
  );
};

export default Nav;
