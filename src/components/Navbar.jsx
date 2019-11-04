import React from 'react';
import styled from 'styled-components';
import ItemBtn from '../common/ItemBtn';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 101;
  background-color: whitesmoke;
  width: 100%;
  height: 6rem;
  opacity: 0.95;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Navbar = () => (
  <Nav>
    <Container>
      <ItemBtn article="home" />
      <ItemBtn article="FAQ" />
      <ItemBtn article="sponsors" />
    </Container>
  </Nav>
);

export default Navbar;
