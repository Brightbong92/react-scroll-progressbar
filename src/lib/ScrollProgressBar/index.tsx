import React, { useEffect, useState } from 'react';
import { ProgressBar, ProgressWrapper } from './styled';

interface ScrollProgressBarProps {
  progressBarColor?: string;
  height?: number;
}

/**
 *
 * @props progressBarColor: HEX(Hexadecimal)
 * @props height: number
 * @returns
 */
const ScrollProgressBar = ({ progressBarColor = '#000', height = 5 }: ScrollProgressBarProps) => {
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
    <ProgressWrapper widthSize={scroll || '0%'} height={height}>
      <ProgressBar widthSize={scroll || '0%'} progressBarColor={progressBarColor} height={height} />
    </ProgressWrapper>
  );
};

export default ScrollProgressBar;
