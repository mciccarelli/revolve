import cx from 'classnames';

const Nav = ({ sticky }) => {
  return (
    <nav className={cx('nav', { 'nav--sticky': sticky })}>
      <ul className="flex justify-between items-center ">
        <li>
          <img src="/static/logo.svg" />
        </li>
        <div className="flex justify-between items-center">
          <h1>A LAW FIRM BASED IN IRVINE, CALIFORNIA</h1>
        </div>
      </ul>
      <style jsx>{`
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

        ul {
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          font-size: 12px;
          letter-spacing: 0.5px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
