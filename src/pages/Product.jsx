import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useParams } from 'react-router-dom';

import products from '../products';
import { CURRENCY } from '../constants';
import SelectBox from '../components/SelectBox/SelectBox';
import Accordion from '../components/Accordion/Accordion';
import { useCart } from '../context/CartContext';
import Toast from '../components/Toast/Toast';

const Product = () => {
  const { productId } = useParams();
  const [currProd, setCurrProd] = React.useState(null);
  const [currImage, setCurrImage] = React.useState(null);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    let timeoutId;
    if (showToast) {
      timeoutId = setTimeout(() => setShowToast(false), 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [showToast]);

  React.useEffect(() => {
    const product = products.find((product) => product._id === productId);
    setCurrProd(product);
    setCurrImage(product.image[0]);
  }, [productId]);

  return currProd ? (
    <Wrapper>
      <Toast isVisible={showToast}>Added to cart!</Toast>
      <ImageSection>
        <ImagePreview>
          {currProd.image.map((img, index) => (
            <Image
              key={index}
              src={img + '120'}
              alt={currProd.name + ' Image'}
              onClick={() => setCurrImage(img + '1600')}
            />
          ))}
        </ImagePreview>
        <ImageMain
          key={currImage}
          src={currImage}
          alt={currProd.name + ' Image'}
        />
      </ImageSection>
      <ProductDetails>
        <ProductTitle>{currProd.name}</ProductTitle>
        <ProductPrice>{CURRENCY.ruppes + ' ' + currProd.price}</ProductPrice>
        <SelectBox
          productData={currProd}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <BuyingOption>
          <AddToCart
            onClick={() => {
              if (!selectedSize) {
                alert('Please select a size');
                return;
              }
              addToCart(currProd, selectedSize);
              setShowToast(true);
            }}
          >
            add to cart
          </AddToCart>
          <QuickBuy>quick buy</QuickBuy>
        </BuyingOption>
        <Accordion detail={currProd} />
      </ProductDetails>
    </Wrapper>
  ) : (
    <div></div>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  margin: 45px 110px;
  display: flex;
  gap: 2rem;
  min-height: 100vh;
`;

const ImageSection = styled.div`
  display: flex;
  gap: 4px;
`;

const ImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Image = styled.img`
  object-fit: cover;
  border: 1px solid #e8e3e8;
  width: 120px;
  height: 115px;
  transition: transform 250ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
    outline: 1px solid black;
  }
`;

const ImageMain = styled.img`
  width: 450px;
  height: 472px;
  object-fit: cover;
  border: 1px solid #e8e3e8;
  animation: ${fadeIn} 250ms ease-in-out;
`;

const ProductDetails = styled.div``;
const ProductTitle = styled.h1`
  margin-bottom: 8px;
`;
const ProductPrice = styled.p`
  font-weight: 700;
  opacity: 0.4;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const BuyingOption = styled.div``;

const AddToCart = styled.button`
  all: unset;
  padding: 1rem 5rem;
  background: black;
  color: white;
  text-transform: capitalize;
  margin: 2rem 0;
  margin-right: 0.5rem;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:active {
    outline: 2px solid blue;
  }
`;

const QuickBuy = styled.button`
  all: unset;
  padding: 0.9rem 5rem;
  border: 2px solid black;
  text-transform: capitalize;
  margin: 2rem 0;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:active {
    outline: 2px solid blue;
  }
`;

export default Product;
