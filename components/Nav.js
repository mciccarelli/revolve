export default function Nav() {
  return (
    <nav className="p-4">
      <ul className="flex justify-between items-center ">
        <li>
          <img src="/static/logo.svg" />
        </li>
        <div className="flex justify-between items-center">
          <h1>A LAW FIRM BASED IN IRVINE, CALIFORNIA</h1>
        </div>
      </ul>
      <style jsx>{`
        nav {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          height: var(--navbar-height);
        }

        ul {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </nav>
  );
}
