import React from "react";
import styled from "styled-components";
import { sponsors as content } from "../contents.json";

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    height: 100px;
    margin: 30px;
  }
`;

const SponsorLogo = () => (
  <Logos>
    {content.map(logo => (
      <img src={logo.src} alt={logo.alt} />
    ))}
  </Logos>
);

export default SponsorLogo;
