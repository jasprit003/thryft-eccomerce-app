import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { CURRENCY } from '../constants';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <EmptyCart>
        <h2>Your cart is empty</h2>
        <Link to="/shop">
          <ContinueShopping>Continue Shopping</ContinueShopping>
        </Link>
      </EmptyCart>
    );
  }

  return (
    <CartWrapper>
      <CartTitle>Shopping Cart</CartTitle>
      <CartContent>
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={`${item._id}-${item.selectedSize}`}>
              <ItemImage
                src={item.image[0] + '120'}
                alt={item.name}
              />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemSize>Size: {item.selectedSize}</ItemSize>
                <ItemPrice>
                  {CURRENCY.ruppes} {item.price}
                </ItemPrice>
                <QuantityControls>
                  <QuantityButton
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.selectedSize,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </QuantityButton>
                  <QuantityDisplay>{item.quantity}</QuantityDisplay>
                  <QuantityButton
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.selectedSize,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </QuantityButton>
                </QuantityControls>
                <RemoveButton
                  onClick={() => removeFromCart(item._id, item.selectedSize)}
                >
                  Remove
                </RemoveButton>
              </ItemDetails>
              <ItemTotal>
                {CURRENCY.ruppes} {(item.price * item.quantity).toFixed(2)}
              </ItemTotal>
            </CartItem>
          ))}
        </CartItems>
        <CartSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryRow>
            <span>Subtotal</span>
            <span>
              {CURRENCY.ruppes} {getCartTotal().toFixed(2)}
            </span>
          </SummaryRow>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </CartSummary>
      </CartContent>
    </CartWrapper>
  );
};

// Styled components for Cart
const CartWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartTitle = styled.h1`
  margin-bottom: 2rem;
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e8e3e8;
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemName = styled.h3`
  margin: 0;
`;

const ItemSize = styled.p`
  color: #666;
`;

const ItemPrice = styled.p`
  font-weight: 700;
`;

const ItemTotal = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  all: unset;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e3e8;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

const QuantityDisplay = styled.span`
  min-width: 24px;
  text-align: center;
`;

const RemoveButton = styled.button`
  all: unset;
  color: #ff0000;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const CartSummary = styled.div`
  padding: 1.5rem;
  border: 1px solid #e8e3e8;
  height: fit-content;
`;

const SummaryTitle = styled.h2`
  margin-bottom: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CheckoutButton = styled.button`
  all: unset;
  width: 90%;
  padding: 1rem;
  background: black;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem;
`;

const ContinueShopping = styled.button`
  all: unset;
  padding: 1rem 2rem;
  background: black;
  color: white;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default Cart;
