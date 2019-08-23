import { useState } from 'react';
//import { useViewportScroll } from 'framer-motion';
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
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className="w-full md:w-1/2 lg:w-1/3 flex justify-center mb-12"
              >
                {item.component(active === index)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Areas;
