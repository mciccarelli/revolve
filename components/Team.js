const Team = () => (
  <section id="team" className="flex flex-col">
    <div className="container mx-auto px-5 lg:px-0">
      <h2 className="text-center text-white">The team</h2>
      <div className="flex flex-wrap items-center lg:flex-row-reverse person-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="avatar mx-auto mb-8" />
          <h5 className="text-white text-center caption">
            Jessica Monroe, Esq, CPA <br />
            Partner
          </h5>
        </div>
        <div className="w-full md:w-1/2 flex justify-center bio-text">
          <p className="text-white">
            My father was a small business owner. He listened more than he spoke
            and took his clients concerns seriously. He’s my role model and I
            give that same level of respect and attention to my clients.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center person-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="avatar mx-auto mb-8" />
          <h5 className="text-white text-center caption">
            Kimberly Wright, EsQ
            <br />
            Partner
          </h5>
        </div>
        <div className="w-full md:w-1/2 flex justify-center bio-text">
          <p className="text-white">
            Some people like wine. <br />
            Some people like fast cars. <br />I just like the sweet, sweet smell
            of victory.
          </p>
        </div>
      </div>
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
      #team .avatar {
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

        #team .avatar {
          width: 300px;
          height: 300px;
        }
        #team p {
          font-size: 30px;
          max-width: 480px;
        }
        #team .bio-text:last-of-type p {
          padding-left: 40px;
          max-width: 460px;
        }

        #team .caption {
          margin-bottom: 0;
        }
      }

      @media (min-width: 1024px) {
      }
    `}</style>
  </section>
);

export default Team;
