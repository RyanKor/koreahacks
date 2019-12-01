import React from "react";
import styled from "styled-components";
import { logoSrc } from "./contents.json";

const Nav = styled.nav`
  opacity: 0.95;
  padding: 0.5rem;

  .navbar-end {
    margin-right: 7%;
  }
  .navbar-item:hover {
    color: #ef4136;
  }
`;

const Header = () => (
  <Nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="/" style={{ marginLeft: "3rem" }}>
        <img src={logoSrc} alt="logo" />
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
          HOME
        </a>
        <a className="navbar-item" href="#about">
          ABOUT
        </a>
        <a className="navbar-item" href="#schedule">
          SCHEDULE
        </a>
        <a className="navbar-item" href="#faq">
          FAQ
        </a>
        <a className="navbar-item" href="#sponsors">
          SPONSORS
        </a>
      </div>
    </div>
  </Nav>
);

export default Header;
