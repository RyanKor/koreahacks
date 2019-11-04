import React from 'react';
import styled from 'styled-components';
import { home as content } from '../contents.json';

const Img = styled.img`
  width: 70%;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 1.5rem 0.1rem #EF4136;
`;

const Home = () => (
  <article id="home">
    <Img src={content.imageSrc} />
  </article>
);

export default Home;
