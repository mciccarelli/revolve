import React, { useState } from 'react';
import { Accordion } from './';

import { data } from '../public/static/data';
const { people } = data;

const Team = (props) => {
  const [expanded, setExpanded] = useState(
    new Array(people.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedExpandedState = expanded.map((item, index) =>
      index === position ? !item : item
    );
    setExpanded(updatedExpandedState);
  };

  return (
    <section id="team" className="flex flex-col">
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="text-center text-white">The team</h2>
        <div className="person-grid flex flex-wrap items-start">
          {people.map((person, index) => (
            <div
              key={`person-${index}`}
              className="person-card flex justify-center w-full md:w-1/2"
            >
              <div className="w-full flex flex-col">
                <div className="avatar block mx-auto mb-8">
                  <img src={person.image} />
                </div>
                <h5 className="text-white text-center caption">
                  {person.name} <br />
                  {person.title}
                </h5>
                <div className="bio-container text-center text-white">
                  <Accordion
                    i={index}
                    expanded={expanded[index] ? index : false}
                    setExpanded={() => handleOnChange(index)}
                  >
                    <div>{person.bio}</div>
                    <div className="my-4">
                      <a href={`mailto:${person.email}`}>{person.email}</a>
                      <br />
                      <a
                        className="phone"
                        href={`tel:${person.phone}p${person.phoneExt}`}
                      >
                        {person.phone.replace('-', '.')} x {person.phoneExt}
                      </a>
                    </div>
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
          <div className="person-card person-card--empty flex justify-center w-full md:w-1/2">
            <div className="w-full flex flex-col">
              <div className="avatar block mx-auto mb-8" />
              <h5 className="text-white text-center caption">
                OUR TEAM IS GROWING <br />
                STAY TUNED
              </h5>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        #team {
          background-color: black;
        }
        #team p {
          font-size: 14px;
        }
        #team .avatar img {
          width: 200px;
          height: 200px;
          max-width: 100%;
          display: block;
          margin: 0 auto;
          background: white;
          border-radius: 50%;
        }
        #team .caption {
          font-size: 12px;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        #team .person-card {
          margin-bottom: 5rem;
        }
        #team .bio-container {
          max-width: 300px;
          margin: 0 auto;
        }

        #team .bio-container a {
          text-decoration: underline;
          font-size: 14px;
        }
        #team .bio-container a:hover {
          color: white;
        }
        #team .bio-container a.phone {
          text-decoration: none;
        }

        #team .bio-container .accordion header {
          margin-bottom: .5em;
        }
        #team .bio-container h5 {
          color: white;
        }
        #team .bio-container .accordion .toggle .circle > div {
          background-color: white;
        }
        #team .person-card--empty .avatar {
          border-radius: 50%;
          width: 200px;
          height: 200px;
          border: 3px dotted white;
        }

        @media (min-width: 1024px) {
          #team .person-grid .person-card:nth-child(2n) {
            transform: translateY(150px);
            margin-bottom: 150px;
          }
          #team .person-card--empty .avatar,
          #team .avatar img {
            width: 300px;
            height: 300px;
          }
          #team p {
            font-size: 24px;
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
};

export default Team;
