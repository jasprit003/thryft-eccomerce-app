import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Flair from '../Flair/Flair';

const ProductCard = ({ product }) => {
  return (
    <Wrapper>
      <ProductDetails to={`/product/${product._id}`}>
        <Image
          src={product.image[0]}
          alt={product.name + 'image'}
        />
        <Details>
          <Title>{product.name}</Title>
          <Price>{'₹ ' + product.price}</Price>
        </Details>
        <Flair />
      </ProductDetails>
    </Wrapper>
  );
};




const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProductDetails = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  border: 1px solid #e8e3e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 4px;
  background-color: #fdfdfd;
  cursor: pointer;
`;

const Image = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4px;
`;
const Title = styled.div`
  font-size: 14px;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;
const Price = styled.div`
  border: 2px solid #d6d5cf;
  padding: 4px;
  font-size: 14px;
`;

export default ProductCard;
