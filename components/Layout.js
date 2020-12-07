import React, { useState, useEffect } from 'react';
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

const Layout = ({ title, description }) => {
  const [heroRef, { width, height: heroHeight }] = useDimensions();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    // window == undefined on server
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

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
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="irvine lawyer, orange county lawyer, tax law, business law, civil litigation, intellectual property, ip law, appeals and writs, entertainment law, tax deferral, 453"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="revolvelawgroup" key="twhandle" />
        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://revolvelawgroup.com"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="/static/REVOLVE_LAW_GROUP_OG.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Revolve Law Group"
          key="ogsitename"
        />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <Hero childRef={heroRef} showArrow={!navIsSticky} isDesktop={isDesktop}>
        {isDesktop ? (
          <Nav sticky={navIsSticky} />
        ) : (
          <h1 className="page-title--mobile">REVOLVE LAW GROUP</h1>
        )}
        <Intro />
      </Hero>
      <Principles />
      <Areas theta={theta} />
      <Team />
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
