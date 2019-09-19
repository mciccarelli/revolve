import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { data } from '../static/data';
const { people } = data;

const Team = React.forwardRef((props, ref) => {
  const { isVisible } = props;

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <section ref={ref} id="team" className="flex flex-col">
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="text-center text-white">The team</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {people.map((person, index) => (
            <motion.div
              key={`person-${index}`}
              variants={variants}
              custom={index}
              className={cx('flex flex-wrap items-center person-row', {
                'lg:flex-row-reverse': index === 0,
              })}
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="avatar block mx-auto mb-8">
                  <img src={person.image} />
                </div>
                <h5 className="text-white text-center caption">
                  {person.name} <br />
                  {person.title}
                </h5>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center bio-text">
                <p className="text-white">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style jsx global>{`
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
          width: 100%;
          height: 4px;
          background-image: url('/static/dot.svg');
          background-size: contain;
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
          width: 200px;
          height: 200px;
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

        @media (min-width: 1024px) {
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
            height: 100%;
            background-image: url('/static/dot.svg');
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
