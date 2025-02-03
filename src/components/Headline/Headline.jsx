import React from 'react';
import styled from 'styled-components';

import { ChevronRight } from 'react-feather';

const Headline = ({ children }) => {
  return (
    <Wrapper>
      <HeadlineText>{children}</HeadlineText>
      <ChevronRightIcon
        size={48}
        strokeWidth={2}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  color: white;
  text-transform: uppercase;
  margin: 60px 45px 30px 45px;
  padding-left: 1rem;
  width: fit-content;
  display: flex;
  align-items: center;
`;

const HeadlineText = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

const ChevronRightIcon = styled(ChevronRight)``;

export default Headline;
