import React, { useEffect, useState } from 'react';
import { ProgressBar, ProgressWrapper } from './styled';

const ScrollProgressBar = () => {
  const [scroll, setScrolled] = useState('0%');
  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const windowHeightPx =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / windowHeightPx) * 100}%`;
    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollProgress);
    return () => {
      window.removeEventListener('scroll', scrollProgress);
    };
  }, []);

  return (
    <ProgressWrapper {...{ widthSize: scroll || '0%' }}>
      <ProgressBar {...{ widthSize: scroll }} />
    </ProgressWrapper>
  );
};

export default ScrollProgressBar;
