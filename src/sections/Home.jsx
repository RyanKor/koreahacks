import React from "react";
import styled from "styled-components";
import { home as content } from "../contents.json";

const Section = styled.section`
  padding-top: 68px;
  h1 {
    text-align: center;
  }
  button {
    margin: 0 auto;
    display: block;
  }
  img {
    width: 100%;
  }
`;

const Home = () => (
  <Section id="home">
    <img className="desktop-image" src={content.desktopImg} alt="home" />
    <img className="mobile-image" src={content.mobileImg} alt="home" />
    <button
      className="button is-danger is-light is-medium"
      type="button"
      onClick={() => {
        window.location.href = `${content.registerLink}`;
      }}
    >
      접수하기
    </button>
  </Section>
);

export default Home;
