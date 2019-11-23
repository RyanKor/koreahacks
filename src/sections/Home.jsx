import React from "react";
import { home as content } from "../contents.json";
import Section from "../components/Section";

const Home = () => (
  <Section id="home">
    <img src={content.imageSrc} alt="main" />
  </Section>
);

export default Home;
