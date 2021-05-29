import { motion } from 'framer-motion';
import {
  IconTaxLaw,
  IconCivilLitigation,
  IconAppeals,
  IconBusinessLaw,
  IconRealEstate,
  IconAssetProtection,
} from './';

const items = [
  { component: (props) => <IconTaxLaw {...props} /> },
  { component: (props) => <IconCivilLitigation {...props} /> },
  { component: (props) => <IconAppeals {...props} /> },
  { component: (props) => <IconBusinessLaw {...props} /> },
  { component: (props) => <IconAssetProtection {...props} /> },
  { component: (props) => <IconRealEstate {...props} /> },
];

const Areas = ({ theta }) => (
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
    </div>
    <style jsx global>{`
      #areas .icon > svg {
        width: 150px;
        height: 150px;
      }
      #areas .icon > svg > g {
        will-change: transform;
      }
      @media (min-width: 1024px) {
        #areas .icon > svg {
          width: 200px;
          height: 200px;
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

export default Areas;
