import styled, { css } from 'styled-components';

interface ProgressBarProps {
  widthSize: string;
  progressBarColor?: string;
  height: number;
}

export const ProgressWrapper = styled.div<ProgressBarProps>`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: ${({ height }) => `${height}px`};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  ${({ widthSize }) =>
    widthSize === '0%'
      ? css`
          display: none;
        `
      : css`
          display: inline-block;
        `}
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  height: ${({ height }) => `${height}px`};
  background-color: ${({ progressBarColor }) => progressBarColor};
  width: ${({ widthSize }) => widthSize || '0%'};
`;
