import React from 'react';
import styled from 'styled-components';

const Flair = () => {
  return <Wrapper>Sale</Wrapper>;
};

const Wrapper = styled.div`
  background-color: #e13420;
  text-align: center;
  padding: 0 12px;
  position: absolute;
  top: 10px;
  left: -10px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export default Flair;
