import Head from 'next/head';
import useDimensions from 'react-use-dimensions';

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
  // NOTE: offset by nav height (65) and fix position
  // when y scroll progress hits bottom of hero
  const navIsSticky = height - 65 <= Math.abs(y);

  return (
    <div>
      <Head>
        <title>Revolve Law Group: A Law Firm based in Irvine, California</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
