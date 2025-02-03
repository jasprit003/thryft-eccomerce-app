import React from 'react';
import styled from 'styled-components';

import { FONTS } from '../constants';

const FooterLogo = () => {
  return (
    <Wrapper>
      <Logo>thryft</Logo>
      <LogoText>Unapologetically Bold. Unstoppable Fashion.</LogoText>
      <Address>
        130 Shore Road <br />
        Suite 133 Port Washington, NY 11050 <br />
        United States <br />
      </Address>
      <Copyright>
        Copyright 2024 © <SubLogo>thryft</SubLogo>
      </Copyright>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem;
`;

const Logo = styled.h3`
  font-family: ${FONTS.logo};
  font-size: 48px;
  letter-spacing: 2px;
  text-decoration: underline;
  text-align: right;
  padding-bottom: 0.5rem;
`;

const LogoText = styled.p`
  font-size: 16px;
  font-style: etalics;
  color: grey;
`;

const Address = styled.p`
  text-align: right;
  font-size: 16px;
  margin-top: 1rem;
`;

const Copyright = styled.p`
  text-align: right;
  font-size: 16px;
  margin-top: 1rem;
  color: grey;
  transform: translateY(100%);
`;

const SubLogo = styled.span`
  font-family: ${FONTS.logo};
  letter-spacing: 1px;
  text-decoration: underline;
`;

export default FooterLogo;
