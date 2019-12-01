import React from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const Sponsors = () => (
  <Section id="sponsors">
    <SectionTitle title="주최 및 주관" />
    <div className="responsive-container">
      <img
        src="/images/organize.png"
        alt="주최 및 주관"
        style={{ display: "block", width: "40%", margin: "0 auto" }}
      />
    </div>
    <br />
    <br />
    <SectionTitle title="후원 기업" />
    <div className="responsive-container">
      <img
        src="/images/sponsor.png"
        alt="후원 기업"
        style={{ width: "100%" }}
      />
    </div>
  </Section>
);

export default Sponsors;
