import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconTaxLaw,
  IconCivilLitigation,
  IconAppeals,
  IconBusinessLaw,
  IconRealEstate,
  IconAssetProtection,
  Accordion,
} from './';

const items = [
  { component: (props) => <IconTaxLaw {...props} /> },
  { component: (props) => <IconCivilLitigation {...props} /> },
  { component: (props) => <IconAppeals {...props} /> },
  { component: (props) => <IconBusinessLaw {...props} /> },
  { component: (props) => <IconAssetProtection {...props} /> },
  { component: (props) => <IconRealEstate {...props} /> },
];

const Areas = ({ theta }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="areas" className="flex flex-col">
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="text-center">Areas of expertise</h2>
        <div className="flex flex-wrap">
          {items.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 flex justify-center mb-12 lg:mb-32 px-2 lg:px-0 icon"
              >
                {item.component({ theta })}
              </motion.div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <div className="learn-more-container">
            <Accordion
              i={100}
              expanded={expanded}
              setExpanded={setExpanded}
              label="Learn More"
            >
              <div className="flex flex-wrap">
                <div className="w-full px-4">
                  <h5>TAXATION</h5>
                  <ul>
                    <li>Tax compliance</li>
                    <li>
                      Controversies before the IRS and California Franchise Tax
                      Board
                    </li>
                    <li>
                      Controversies before the EDD and CA Department of Tax and
                      Fee Administration
                    </li>
                    <li>Tax liability resolution</li>
                    <li>
                      Mitigation strategies to reduce taxes on capital gains and
                      offset yearly tax obligations
                    </li>
                  </ul>
                  <h5>CIVIL LITIGATION</h5>
                  <ul>
                    <li>Personal, Real Estate and Business litigation</li>
                    <li>Mediation</li>
                    <li>Arbitration</li>
                    <li>
                      Northern, Southern, Eastern and Central Districts of
                      California
                    </li>
                    <li>Adversary Proceedings in Bankruptcy Court</li>
                  </ul>
                  <h5>APPEALS AND WRITS</h5>
                  <ul>
                    <li>Civil and Criminal</li>
                    <li>
                      Seeking reversal of a judgment or order of the court
                    </li>
                    <li>Defending a judgment or order of the court</li>
                    <li>Writs of mandate and supersedeas</li>
                    <li>Litigation consulting and advising</li>
                  </ul>
                </div>
                <div className="w-full px-4">
                  <h5>BUSINESS</h5>
                  <ul>
                    <li>Trademark registration</li>
                    <li>Entity formation</li>
                    <li>Owner disputes</li>
                    <li>Third-party disputes</li>
                    <li>
                      Breach of Contract, Fraud, California Unfair Competition
                      Law, Racketeer Influenced and Corrupt Organizations Act,
                      Telephone Consumer Protection Act
                    </li>
                  </ul>
                  <h5>ASSET PROTECTION</h5>
                  <ul>
                    <li>Private retirement plans</li>
                  </ul>
                  <h5>REAL ESTATE</h5>
                  <ul>
                    <li>Purchase and sale agreements</li>
                    <li>Partition</li>
                    <li>Quiet title</li>
                    <li>Negligence</li>
                    <li>Broker and Salesperson liability</li>
                    <li>Contract disputes</li>
                    <li>Contractor / construction disputes</li>
                    <li>Easement disputes</li>
                    <li>Property line disputes</li>
                    <li>Landlord / Tenant</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
      <style jsx global>{`
        #areas .icon > svg {
          width: 150px;
          height: 150px;
        }
        #areas .icon > svg > g {
          will-change: transform;
        }

        .learn-more-container {
          width: 90%;
          text-align: center;
        }

        .learn-more-container h5 {
          margin: 0 0 0.5rem 0;
        }

        .learn-more-container ul {
          margin: 0 0 2.5rem 0;
        }

        @media (min-width: 1024px) {
          #areas .icon > svg {
            width: 200px;
            height: 200px;
          }

          .learn-more-container {
            width: 70%;
          }
        }

        @media (min-width: 1280px) {
          #areas .icon > svg {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Areas;
