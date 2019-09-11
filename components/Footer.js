const Footer = () => (
  <section id="footer" className="relative z-10">
    <img className="footer__logo" src="/static/footer-logo.svg" />
    <div className="container mx-auto px-5 lg:px-0 relative z-20">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="mb-5">
            <h5>Revolve Law Group LLP</h5>
            <p>
              2601 Main Street <br />
              Suite 1200 <br />
              Irvine, CA 92614
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="mb-5">
            <h5>General inquiries</h5>
            <p>
              <a href="mailto:info@revolvelawgroup.com">
                info@revolvelawgroup.com
              </a>
              <br />
              T: 833.775.4557 <br />
              F: 888.711.7710
            </p>
          </div>
          <div className="mb-5">
            <h5>Jessica Monroe</h5>
            <p>
              833.775.4557 x 2<br />
              <a href="mailto:jessica@revolvelawgroup.com">
                jessica@revolvelawgroup.com
              </a>
            </p>
          </div>
          <div className="mb-5">
            <h5>Kimberly Wright</h5>
            <p>
              833.775.4557 x 3<br />
              <a href="mailto:kimberly@revolvelawgroup.com">
                kimberly@revolvelawgroup.com
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-2/4">
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
