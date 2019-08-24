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
  { component: active => <IconTaxLaw active={active} /> },
  { component: active => <IconCivilLitigation active={active} /> },
  { component: active => <IconAppeals active={active} /> },
  { component: active => <IconBusinessLaw active={active} /> },
  { component: active => <IconIp active={active} /> },
  { component: active => <IconEntLaw active={active} /> },
];

const Areas = () => {
  const [active, setActive] = useState(null);

  // const { scrollYProgress } = useViewportScroll();
  // console.log(scrollYProgress);
  // return <motion.div style={{ scaleX: scrollYProgress }} />

  return (
    <section id="areas" className="flex flex-col">
      <div className="container mx-auto">
        <h2 className="text-center">Areas of expertise</h2>
        <div className="flex flex-wrap">
          {items.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 flex justify-center mb-12"
                onHoverStart={() => setActive(index)}
                onHoverEnd={() => setActive(null)}
              >
                {item.component(active === index)}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Areas;
