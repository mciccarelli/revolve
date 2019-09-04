import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconTaxLaw,
  IconCivilLitigation,
  IconAppeals,
  IconBusinessLaw,
  IconIp,
  IconEntLaw,
} from './';

const items = [
  { component: props => <IconTaxLaw {...props} /> },
  { component: props => <IconCivilLitigation {...props} /> },
  { component: props => <IconAppeals {...props} /> },
  { component: props => <IconBusinessLaw {...props} /> },
  { component: props => <IconIp {...props} /> },
  { component: props => <IconEntLaw {...props} /> },
];

const Areas = ({ theta }) => {
  const [active, setActive] = useState(null);

  return (
    <section id="areas" className="flex flex-col">
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="text-center">Areas of expertise</h2>
        <div className="flex flex-wrap">
          {items.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="w-1/2 md:w-1/3 flex justify-center mb-5 md:mb-12 px-3 lg:px-0 icon"
                onHoverStart={() => setActive(index)}
                onHoverEnd={() => setActive(null)}
              >
                {item.component({ active: active === index, theta })}
              </motion.div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        #areas .icon > svg {
          width: 135px;
          height: 135px;
        }
        @media (min-width: 1024px) {
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
