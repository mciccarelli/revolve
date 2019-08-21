import { Nav, Hero, Intro } from '../components';
import useDimensions from 'react-use-dimensions';

export default () => {
  const [ref, { x, y, width, height }] = useDimensions();
  // NOTE: offset by nav height (65) and fix position
  // when y scroll progress hits bottom of hero
  const navIsSticky = height - 65 <= Math.abs(y);

  return (
    <div>
      <Hero childRef={ref}>
        <Nav sticky={navIsSticky} />
        <Intro />
        <img className="hero__arrow" src="/static/arrow-down.svg" />
      </Hero>
      <section id="principles" className="flex items-center justify-center">
        target div at ({x}px, {y}px) position with a width of {width}px and
        height of {height}px
      </section>
      <section id="areas">{` `}</section>
      <section id="team">{``}</section>
      <section id="footer">{` `}</section>
      <style jsx>{`
        section {
          min-height: 100vh;
          background-color: white;
          color: black;
        }
        #principles,
        #footer {
          background-color: #f4f4f4;
        }
        #team {
          background-color: black;
        }
      `}</style>
    </div>
  );
};
