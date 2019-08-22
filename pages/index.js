import {
  Nav,
  Hero,
  Intro,
  IconTaxLaw,
  IconCivilLitigation,
  IconAppeals,
  IconBusinessLaw,
  IconIp,
  IconEntLaw,
} from '../components';
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
      <section id="principles" className="flex flex-col">
        <h2 className="text-center">
          Our principles <br />
          guide our every move
        </h2>
      </section>
      <section id="areas" className="flex flex-col">
        <div className="container mx-auto">
          <h2 className="text-center">Areas of expertise</h2>
          <div className="flex flex-wrap mb-12">
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <IconTaxLaw />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <IconCivilLitigation />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <IconAppeals />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <IconBusinessLaw />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <IconIp />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <IconBusinessLaw />
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="flex flex-col">
        <h2 className="text-center text-white">The team</h2>
      </section>
      <section id="footer">{` `}</section>
      <style jsx>{`
        section {
          min-height: 100vh;
          background-color: white;
          color: black;
          padding: 150px 0;
        }
        section h2 {
          margin-bottom: 150px;
        }
        #principles,
        #footer {
          background-color: #f4f4f4;
        }
        #team {
          background-color: black;
        }
        #footer {
          min-height: 50vh;
        }
      `}</style>
    </div>
  );
};
