import React from 'react';
import styled from 'styled-components';
import { ScrollProgressBar } from '../../lib';

const Wrapper = styled.div`
  min-height: 300vh;
`;

const HomePage = () => {
  return (
    <Wrapper>
      Hello CRA
      <ScrollProgressBar height={10} />
    </Wrapper>
  );
};

export default HomePage;
