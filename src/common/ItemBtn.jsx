import React from 'react';
import styled from 'styled-components';

const Button = styled.div`

`;

const ItemBtn = ({ article }) => {
  const goTo = `#${article}`;
  return (
    <Button>
      <a href={goTo}>{article}</a>
    </Button>
  );
};

export default ItemBtn;
