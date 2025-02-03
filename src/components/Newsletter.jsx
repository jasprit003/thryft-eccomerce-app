import React from 'react';
import styled from 'styled-components';

import { ArrowRight } from 'react-feather';

const Newsletter = () => {
  return (
    <Wrapper>
      <Heading>
        Sign Up for the <Span>Newsletter!</Span>{' '}
      </Heading>
      <InputBox htmlFor="">
        <Input
          type="text"
          placeholder="Enter Your Email"
          required={true}
        />
        <RightArrIcon></RightArrIcon>
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding: 1rem;
`;

const Heading = styled.p`
  font-size: 24px;
`;

const Span = styled.span`
  background-color: white;
  color: black;
  padding: 4px;
  font-style: italic;
`;

const InputBox = styled.label`
  border: 2px solid white;
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  background: white;
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 8px;
  font-size: 16px;

  &::placeholder {
    font-size: inherit;
  }
`;
const RightArrIcon = styled(ArrowRight)`
  width: 60px;
  height: 45px;
  padding: 4px;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(0.8);
  }
`;
export default Newsletter;
