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
                className="w-1/2 lg:w-1/3 flex justify-center mb-12 px-4 lg:px-0"
                onHoverStart={() => setActive(index)}
                onHoverEnd={() => setActive(null)}
              >
                {item.component({ active: active === index, theta })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Areas;
