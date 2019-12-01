import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
`;

const SectionTitle = ({ title }) => (
  <StyledTitle className="title">{title}</StyledTitle>
);

export default SectionTitle;
