import { Nav, HeroText } from '../components';

export default () => (
  <div>
    <Nav />
    <div className="hero">
      <HeroText />
      <img className="hero__arrow" src="/static/arrow-down.svg" />
    </div>
  </div>
);
