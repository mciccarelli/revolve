import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Team = React.forwardRef((props, ref) => {
  const { isVisible } = props;

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <section ref={ref} id="team" className="flex flex-col">
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="text-center text-white">The team</h2>
        <AnimatePresence initial={false}>
          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            exit="hidden"
          >
            <div className="flex flex-wrap items-center lg:flex-row-reverse person-row">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="avatar mx-auto mb-8">
                  <img src="/static/JESSICA.jpg" />
                </div>
                <h5 className="text-white text-center caption">
                  Jessica Monroe, Esq, CPA <br />
                  Partner
                </h5>
              </div>
              <div className="w-full md:w-1/2 flex justify-center bio-text">
                <p className="text-white">
                  I care too much. I watched my dad, a small business owner, be
                  affected by every penny taxed or saved. I saw the effects of
                  insufficient and even bad advice. I know how every dollar
                  earned or taken away affects business, and most importantly,
                  family. It’s not just dollars, it’s time and opportunity—time
                  you took away from your family so those dollars earned could
                  provide better opportunities for them. I care too much because
                  I know you do too.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center person-row">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="avatar mx-auto mb-8">
                  <img src="/static/KIMBERLY.jpg" />
                </div>
                <h5 className="text-white text-center caption">
                  Kimberly Wright, EsQ
                  <br />
                  Partner
                </h5>
              </div>
              <div className="w-full md:w-1/2 flex justify-center bio-text">
                <p className="text-white">
                  I was taught to be vigorously honest, immensely resourceful
                  and to never take myself too seriously. I will tell you what I
                  can and what I cannot do for you. I will dig deeper than any
                  of my adversaries to find the answers you need. And if you
                  make me laugh while sharing a beer together after a long day,
                  it will likely come out of my nose.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <style jsx>{`
        #team {
          background-color: black;
        }
        #team .person-row {
          position: relative;
          min-height: 500px;
          z-index: 5;
          padding-top: 90px;
        }
        #team .person-row::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 99%;
          height: 11px;
          background: url('/static/bg-pattern.svg');
          background-repeat: repeat-x;
        }
        #team .person-row:first-of-type {
          margin-bottom: 90px;
        }
        #team p {
          font-size: 18px;
          font-weight: 800;
        }
        #team .avatar img {
          width: 135px;
          height: 135px;
          max-width: 100%;
          display: block;
          background: white;
          border-radius: 50%;
        }
        #team .caption {
          font-size: 12px;
          letter-spacing: 0.05em;
          margin-bottom: 45px;
        }

        @media (min-width: 768px) {
          #team .person-row {
            padding-top: 0;
          }
          #team .person-row:first-of-type {
            margin-bottom: 150px;
          }
          #team .person-row:first-of-type .bio-text p {
            padding-right: 100px;
            padding-left: 0;
          }
          #team .person-row::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: auto;
            right: 50%;
            transform: translateX(50%);
            width: 11px;
            height: 99%;
            background: url('/static/bg-pattern.svg');
            background-repeat: repeat-y;
          }

          #team .avatar img {
            width: 300px;
            height: 300px;
          }
          #team p {
            font-size: 30px;
          }
          #team .bio-text p {
            padding-left: 100px;
          }

          #team .caption {
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
});

export default Team;
