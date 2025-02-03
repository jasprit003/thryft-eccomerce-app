import React from 'react';
import styled from 'styled-components';
import { ShoppingBag } from 'react-feather';
import { COLORS } from '../constants';

import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

const Cart = () => {
  const { getCartCount } = useCart();

  return (
    <Wrapper>
      <Linked to="/Cart">
        <ShoppingBagIcon
          size={16}
          strokeWidth={1}
        />
      </Linked>
      <CartItems>{getCartCount()}</CartItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Linked = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ShoppingBagIcon = styled(ShoppingBag)`
  height: 24px;
  width: 24px;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.8);
  }

  & > svg {
    display: in-line;
  }
`;

const CartItems = styled.div`
  background: ${COLORS.red[500]};
  border-radius: 2px;
  color: white;
  position: absolute;
  top: -8px;
  right: -10px;
  font-size: 12px;
  padding: 0px 2px;
  min-width: 18px;
  text-align: center;
`;

export default Cart;
