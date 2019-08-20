import cx from 'classnames';

const Nav = ({ sticky }) => {
  return (
    <nav className={cx('nav p-4', { 'nav--sticky': sticky })}>
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
      `}</style>
    </nav>
  );
};

export default Nav;
