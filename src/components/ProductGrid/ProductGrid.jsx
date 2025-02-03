import React from 'react';
import styled from 'styled-components';

import { SPACING } from '../../constants.js';

import Headline from '../Headline/Headline.jsx';

const ProductGrid = ({ headline, children }) => {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <Grid>{children}</Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Grid = styled.div`
  margin: 2rem ${SPACING.margin};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  justify-items: start;
  gap: 2rem;
`;

export default ProductGrid;
