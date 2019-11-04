import React from 'react';
import styled from 'styled-components';
import ItemBtn from '../common/ItemBtn';
import { logoSrc } from '../contents.json';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 101;
  background-color: white;
  width: 100%;
  height: 6rem;
  opacity: 0.95;
  display: flex;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 50%;
`;

const ItemContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Navbar = () => (
  <Nav>
    <LogoContainer>
      <a href="/">
        <img
          src={logoSrc}
          alt="logo"
        />
      </a>
    </LogoContainer>
    <ItemContainer>
      <ItemBtn article="home" />
      <ItemBtn article="FAQ" />
      <ItemBtn article="sponsors" />
    </ItemContainer>
  </Nav>
);

export default Navbar;
