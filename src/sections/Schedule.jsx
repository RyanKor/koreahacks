import React from "react";
import styled from "styled-components";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import ScheduleTable from "../components/ScheduleTable";

const Hero = styled.section`
  border-radius: 4px;
  background-image: linear-gradient(141deg, #5a0703 0, #84211c 100%);
  .hero-body {
    .subtitle {
      color: white;
    }
    padding: 1em;
  }
`;

const Schedule = () => (
  <Section id="schedule">
    <SectionTitle title="상세일정" />
    <div className="responsive-container">
      <Hero className="hero">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle">Day 1</h2>
          </div>
        </div>
      </Hero>
      <ScheduleTable day="1" />
    </div>
    <br />
    <div className="responsive-container">
      <Hero className="hero">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle">Day 2</h2>
          </div>
        </div>
      </Hero>
      <ScheduleTable day="2" />
    </div>
  </Section>
);

export default Schedule;
