import React, { useState, useEffect, useLayoutEffect } from 'react';
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

const DEKTOP_BREAKPOINT = 1024;
const NAVBAR_HEIGHT = 65;

const Layout = ({ title }) => {
  const [heroRef, { width, height: heroHeight }] = useDimensions();
  const [teamRef, { y: teamY, height: teamHeight }] = useDimensions({
    liveMeasure: false,
  });
  const [scrolled, setScrolled] = useState(0);
  const [teamIsVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    // window == undefined on server
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  useLayoutEffect(() => {
    if (!teamIsVisible && teamY <= scrolled + teamHeight * 0.25) {
      setTeamVisible(true);
    }
  }, [scrolled]);

  const onScroll = () => {
    const { scrollTop } = document.documentElement;
    const scrolled = document.body.scrollTop || scrollTop;

    return setScrolled(scrolled);
  };

  // offset by nav height and set position to fixed
  // when user scroll progress surpasses hero height
  const navIsSticky = heroHeight - NAVBAR_HEIGHT <= Math.abs(scrolled);

  // sync scroll progress with rotatation on 360 deg scale
  const theta = (scrolled * 0.35) % 360;
  const isDesktop = width && width >= DEKTOP_BREAKPOINT;

  return (
    <div className="wrap">
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Hero childRef={heroRef} sticky={navIsSticky} isDesktop={isDesktop}>
        {isDesktop ? (
          <Nav sticky={navIsSticky} />
        ) : (
          <h1 className="page-title--mobile">REVOLVE LAW GROUP</h1>
        )}
        <Intro />
      </Hero>
      <Principles />
      <Areas theta={theta} />
      <Team ref={teamRef} isVisible={teamIsVisible} />
      <Footer />
      <style jsx>{`
        .page-title--mobile {
          font-size: 18px;
          line-height: 1;
          text-align: center;
          display: ${width ? 'block' : 'none'};
          width: 100%;
          margin-bottom: 30px;
          position: absolute;
          left: 50%;
          top: 25px;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default Layout;
