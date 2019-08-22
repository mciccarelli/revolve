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
        <div className="container mx-auto">
          <h2 className="text-center text-white">The team</h2>
          <div className="flex flex-wrap items-center person-row">
            <div className="w-full md:w-1/2 flex justify-center bio-text">
              <p className="text-white">
                My father was a small business owner. He listened more than he
                spoke and took his clients concerns seriously. He’s my role
                model and I give that same level of respect and attention to my
                clients.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="avatar mx-auto mb-8" />
              <h5 className="text-white text-center caption">
                Jessica Monroe, Esq, CPA <br />
                Partner
              </h5>
            </div>
          </div>
          <div className="flex flex-wrap items-center person-row">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="avatar mx-auto mb-8" />
              <h5 className="text-white text-center caption">
                Kimberly Wright, EsQ
                <br />
                Partner
              </h5>
            </div>
            <div className="w-full md:w-1/2 flex justify-center bio-text">
              <p className="text-white">
                Some people like wine. <br />
                Some people like fast cars. <br />I just like the sweet, sweet
                smell of victory.
              </p>
            </div>
          </div>
        </div>
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
        #team .person-row:first-of-type {
          margin-bottom: 150px;
        }
        #team p {
          font-size: 30px;
          font-weight: 800;
        }
        #team .avatar {
          width: 300px;
          height: 300px;
          max-width: 100%;
          display: block;
          background: white;
          border-radius: 50%;
        }
        #team .caption {
          font-size: 12px;
        }
        #footer {
          min-height: 50vh;
        }

        @media (min-width: 768px) {
          #team .person-row {
            position: relative;
            min-height: 500px;
          }
          #team .person-row::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 50%;
            transform: translateX(-50%);
            width: 11px;
            height: 99%;
            background: url('/static/bg-pattern.svg');
            background-repeat: repeat-y;
          }
          #team .bio-text p {
            max-width: 480px;
          }
          #team .bio-text:last-of-type p {
            padding-left: 40px;
            max-width: 460px;
          }
        }
      `}</style>
    </div>
  );
};
