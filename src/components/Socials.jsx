import React from 'react';
import styled from 'styled-components';

import { Instagram, Twitter, Facebook, Youtube } from 'react-feather';

const iconData = [{ strokeWidth: 6, size: 23 }];

const Socials = () => {
  return (
    <Wrapper>
      <Heading>Follow Us</Heading>
      <Span>
        <Instagram
          strokeWidth={0.8}
          size={32}
        />
        <P>Instagram</P>
      </Span>
      <Span>
        <Twitter
          strokeWidth={0.8}
          size={32}
        />
        <P>Twitter</P>
      </Span>
      <Span>
        <Youtube
          strokeWidth={0.8}
          size={32}
        />
        <P>Youtube</P>
      </Span>
      <Span>
        <Facebook
          strokeWidth={0.8}
          size={32}
        />
        <P>Facebook</P>
      </Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Heading = styled.h3`
  padding-bottom: 28px;
  font-size: 24px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
`;

const P = styled.p`
  font-size: 16px;
  color: grey;
`;

export default Socials;
