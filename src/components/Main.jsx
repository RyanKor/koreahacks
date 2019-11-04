import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import FAQ from './FAQ';
import Sponsors from './Sponsors';

const Container = styled.div`
  margin-top: 6rem;
`;

const Main = () => (
  <main>
    <Container>
      <Home />
      <FAQ />
      <Sponsors />
    </Container>
  </main>
);

export default Main;
