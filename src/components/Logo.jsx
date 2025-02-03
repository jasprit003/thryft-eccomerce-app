import React from 'react';
import styled from 'styled-components';
import { FONTS } from '../constants';

const Logo = () => {
  return <Wrapper>thryft</Wrapper>;
};

const Wrapper = styled.h1`
  font-family: ${FONTS.logo};
  font-size: 50px;
`;
export default Logo;
