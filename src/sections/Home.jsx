import React from "react";
import styled from "styled-components";
import { home as content } from "../contents.json";

const Section = styled.section`
  padding-top: 68px;
  h1 {
    text-align: center;
  }
  .subtitle {
    text-align: center;
  }
  button {
    margin: 2rem auto;
    display: block;
    background-color: #5a0703;
    color: white;
    &:hover,
    &:active,
    &:focus {
      background-color: #84211c;
      color: white;
    }
  }
  img {
    width: 100%;
  }
`;

const Home = () => (
  <Section id="home">
    <img className="desktop-image" src={content.desktopImg} alt="home" />
    <img className="mobile-image" src={content.mobileImg} alt="home" />
    <h5 className="subtitle is-5">2020.01.04 - 2020.01.05</h5>
    <h5 className="subtitle is-5">고려대학교 하나스퀘어</h5>
    <button
      className="button is-large"
      type="button"
      onClick={() => {
        window.location.href = `${content.registerLink}`;
      }}
    >
      접수하러 가기
    </button>
  </Section>
);

export default Home;
