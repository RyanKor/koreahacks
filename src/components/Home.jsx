import React from 'react';
import styled from 'styled-components';
import { home as content } from '../contents.json';

const Img = styled.img`
  width: 100%;
`;

const Home = () => (
  <article id="home">
    <Img src={content.imageSrc} />
  </article>
);

export default Home;
