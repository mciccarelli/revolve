const Hero = ({ childRef, children }) => {
  return (
    <div ref={childRef} className="hero">
      {children}
    </div>
  );
};

export default Hero;
