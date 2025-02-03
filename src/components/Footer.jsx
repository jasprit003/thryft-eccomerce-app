import React from 'react';
import styled from 'styled-components';

import Newsletter from './Newsletter';
import Footlinks from './Footlinks';
import Socials from './Socials';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <Wrapper>
      <Newsletter />
      <Footlinks
        linkHeading={'Help Center'}
        link1={'Contact Us'}
        link2={'Return Policy'}
        link3={'FAQs'}
        link4={'Payment'}
      />

      <Footlinks
        linkHeading={'Policies'}
        link1={'Privacy'}
        link2={'Terms & Conditions'}
      />
      <Socials />
      <FooterLogo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 8rem;
  padding: 2rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export default Footer;
