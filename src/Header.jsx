import React from "react";
import styled from "styled-components";
import { logoSrc } from "./contents.json";

const Nav = styled.nav`
  opacity: 0.95;
`;

const Header = () => (
  <Nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={logoSrc} width="112" height="28" alt="logo" />
      </a>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="menus"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="menus" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item" href="#home">
          Home
        </a>
        <a className="navbar-item" href="#about">
          About
        </a>
        <a className="navbar-item" href="#faq">
          FAQ
        </a>
        <a className="navbar-item" href="#sponsors">
          Sponsors
        </a>
      </div>
    </div>
  </Nav>
);

export default Header;
