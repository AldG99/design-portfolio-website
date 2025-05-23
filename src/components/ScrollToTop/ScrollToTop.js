import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });

        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
      }, 0);

      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
