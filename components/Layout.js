import React, { Fragment, useState, useEffect } from 'react';
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

const Layout = ({ title }) => {
  const [ref, { y, width, height }] = useDimensions();

  // offset by nav height (65) and fix position
  // when y scroll progress hits bottom of hero
  const navIsSticky = height - 65 <= Math.abs(y);

  // sync scroll progress with rotatation on 360 deg scale
  const theta = (y * 0.5) % 360;

  const isDesktop = width && width >= 1024;

  return (
    <div className="wrap">
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Hero childRef={ref} sticky={navIsSticky} isDesktop={isDesktop}>
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
        @media (min-width: 1024px) {
        }
      `}</style>
    </div>
  );
};

export default Layout;
