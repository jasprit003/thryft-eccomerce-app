import React from 'react';
import styled from 'styled-components';
import { FONTS } from '../constants';

const HeroSection = () => {
  return (
    <Wrapper>
      <Image
        src="http://dripbyrage.store/cdn/shop/files/BANNER_23_fce96118-94a5-4e6d-96b6-7b41ce0258c3.jpg"
        alt="herosection_image"
      />
      <div>
        <TextOverlay>
          <HeroText>
            Unapologetically Bold. <br />
            Unstoppable Fashion.
          </HeroText>
          <HeroButton>
            <ButtonSec>SHOP NOW</ButtonSec>
            <ButtonPrimary>GO TO NEW ARRIVALS</ButtonPrimary>
          </HeroButton>
        </TextOverlay>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 450px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.p`
  font-family: ${FONTS.logo};
  font-size: 54px;
  background: white;
  padding: 0 1rem;
`;

const HeroButton = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const ButtonPrimary = styled.button`
  all: unset;
  padding: 4px 18px;
  background: black;
  border: 1px solid white;
  color: white;
  cursor: pointer;

  &:focus {
    outline: 2px solid blue;
  }
`;

const ButtonSec = styled.button`
  all: unset;
  padding: 4px 18px;
  background: white;
  color: black;
  cursor: pointer;

  &:focus {
    outline: 2px solid blue;
  }
`;

export default HeroSection;
