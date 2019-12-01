import React from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import SponsorLogo from "../components/SponsorLogo";

const Sponsors = () => (
  <Section id="sponsors">
    <SectionTitle title="후원 기업" />
    <div className="responsive-container">
      <SponsorLogo />
    </div>
  </Section>
);

export default Sponsors;
