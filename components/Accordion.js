import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ i, label, children, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className="accordion">
      <header onClick={() => setExpanded(isOpen ? false : i)}>
        <h5>{label}</h5>
        <div className="toggle">
          <div className="circle">
            <motion.div initial={false} animate={{ rotate: isOpen ? 0 : 90 }} />
            <div />
          </div>
        </div>
      </header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            className="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        .accordion {
          background-repeat: no-repeat;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
        }

        .accordion .content-placeholder {
          padding: 20px;
          transform-origin: top center;
        }

        .accordion header {
          display: block;
          text-align: center;
          cursor: pointer;
          width: 100%;
          margin-bottom: 2rem;
        }

        .accordion header h5 {
          letter-spacing: 2px;
          margin-bottom: 2rem;
        }

        .accordion .toggle {
          display: inline-block;
        }

        .accordion .toggle .circle {
          position: relative;
          width: 2.55em;
          height: 2.5em;
          border-radius: 100%;
          border: solid 2px #dcdcdc;
        }

        .accordion .toggle .circle > div {
          position: absolute;
          background-color: black;
          width: 24px;
          height: 2px;
          left: 50%;
          margin-left: -12px;
          top: 50%;
          margin-top: -1px;
        }

        .accordion .word {
          height: 18px;
          border-radius: 10px;
          display: inline-block;
          margin-bottom: 8px;
          margin-right: 8px;
          background: #0055ff;
          border-radius: 10px;
          display: inline-block;
        }

        .paragraph {
          margin-bottom: 20px;
        }

        .accordion .content {
          overflow: hidden;
          width: 100%;
        }

        @media (max-width: 600px) {
          .accordion .content-placeholder {
            padding-left: 20px;
          }

          .accordion header .word {
            height: 30px;
          }

          .accordion .word {
            height: 14px;
            margin-bottom: 5px;
            margin-right: 5px;
          }

          .accordion .paragraph {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Accordion;
