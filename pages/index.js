import useDimensions from 'react-use-dimensions';
import { useViewportScroll } from 'framer-motion';

import {
  Nav,
  Hero,
  Intro,
  Principles,
  Areas,
  Team,
  Footer,
} from '../components';

const HomePage = () => {
  const [ref, { y, height }] = useDimensions();
  // const { scrollYProgress } = useViewportScroll();

  // console.log('scrollYProgress', scrollYProgress);
  // console.log('y', y);

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
      <Principles />
      <Areas />
      <Team />
      <Footer />
    </div>
  );
};

export default HomePage;
