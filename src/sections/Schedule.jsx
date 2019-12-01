import React from "react";
import styled from "styled-components";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import ScheduleTable from "../components/ScheduleTable";

const Hero = styled.section`
  border-radius: 4px;
`;

const Schedule = () => (
  <Section id="schedule">
    <SectionTitle title="상세일정" />
    <div className="responsive-container">
      <Hero className="hero is-dark is-bold">
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
      <Hero className="hero is-dark is-bold">
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
