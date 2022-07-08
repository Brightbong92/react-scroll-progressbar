import styled, { css } from 'styled-components';

export const ProgressWrapper = styled.div<{ widthSize: string }>`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 5px;
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

export const ProgressBar = styled.div<{ widthSize: string }>`
  height: 5px;
  background: #000;
  width: ${({ widthSize }) => widthSize || '0%'};
`;
