import React from 'react';
import styled from 'styled-components';

const ProductImage = ({ children }) => {
  return (
    <Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  padding: 45px;
  gap: 20px;
`;

const Image = styled.img`
  width: 190px;
  height: 190px;
  border: 1px solid gray;

  &:oftypefirst {
  }
`;

export default ProductImage;
