import React from "react";
import styled from "styled-components";
import Home from "./sections/Home";
import About from "./sections/About";
import Schedule from "./sections/Schedule";
import FAQ from "./sections/FAQ";
import Sponsors from "./sections/Sponsors";

const ResponsiveMain = styled.main`
  position: absolute;
  top: 0px;
`;

const Main = () => (
  <ResponsiveMain>
    <Home />
    <About />
    <Schedule />
    <FAQ />
    <Sponsors />
  </ResponsiveMain>
);

export default Main;
