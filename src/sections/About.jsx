import React from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Tile from "../components/Tile";

const About = () => (
  <Section id="about">
    <SectionTitle title="고카톤이란" />
    <div className="responsive-container">
      <Tile />
    </div>
  </Section>
);

export default About;
