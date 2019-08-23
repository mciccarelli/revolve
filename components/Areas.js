import {
  IconTaxLaw,
  IconCivilLitigation,
  IconAppeals,
  IconBusinessLaw,
  IconIp,
  IconEntLaw,
} from './';

const Areas = () => {
  return (
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
            <IconEntLaw />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
