import { useState, useEffect } from 'react';
import { useWindowDimensions } from '../state/';

const Responsive = ({ breakPoint = 576, renderMobile, renderDesktop }) => {
  const [ready, set] = useState(false);
  const { width } = useWindowDimensions();

  // NOTE: need this hack to delay render conditional during ssr
  useEffect(() => {
    set(true);
  }, []);

  return ready && width >= breakPoint ? renderDesktop() : renderMobile();
};

export default Responsive;