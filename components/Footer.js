const Footer = () => (
  <section id="footer" className="relative z-10">
    <img className="footer__logo" src="/static/footer-logo.svg" />
    <div className="container mx-auto px-5 lg:px-0 relative z-20">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="mb-5">
            <h5>Revolve Law Group LLP</h5>
            <p>
              2601 Main Street <br />
              Suite 1200 <br />
              Irvine, CA 92614
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="mb-5">
            <h5>General inquiries</h5>
            <p>
              <a href="mailto:info@revolvelawgroup.com">
                info@revolvelawgroup.com
              </a>
              <br />
              T: <a href="tel:833-775-4557">833.775.4557</a>
              <br />
              F: 949.944.9404
            </p>
          </div>
        </div>
        <div className="w-full mt-10 lg:mt-0 lg:w-2/4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">{``}</div>
            <div className="w-full lg:w-1/2 legal">
              <p>
                The information on this website is for general information
                purposes only. Nothing on this site should be taken as legal
                advice for any individual case or situation.{' '}
              </p>
              <p>
                This information is not intended to create, and receipt or
                viewing does not constitute, an attorney-client relationship.
              </p>
              <p>&copy; 2019 Revolve Law Group </p>
              <p>
                Design by{' '}
                <a
                  className="credit"
                  href="http://brittcobb.com"
                  target="_blank"
                >
                  Britt Cobb
                </a>
              </p>
              <p>
                <a
                  className="credit"
                  href="https://www.trust-cfo.com/prp-accelerator/?referrer=revolvelawgroup.com"
                  target="_blank"
                >
                  PRP Accelerator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      #footer {
        background-color: #f4f4f4;
      }
      #footer {
        min-height: 50vh;
        position: relative;
        overflow: hidden;
      }
      #footer h5 {
        font-size: 12px;
        margin-bottom: 8px;
      }
      #footer .legal p {
        font-size: 12px;
        margin-bottom: 24px;
      }
      .credit {
        text-decoration: underline;
      }
      @media (min-width: 1024px) {
        #footer h5 {
          font-size: 16px;
        }
      }
    `}</style>
  </section>
);

export default Footer;
