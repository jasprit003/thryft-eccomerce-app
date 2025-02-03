import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Navlinks = () => {
  return (
    <Wrapper>
      <ListItems>
        <LinkItems to="/">Home</LinkItems>
      </ListItems>
      <ListItems>
        <LinkItems to="/shop">Shop</LinkItems>
      </ListItems>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const ListItems = styled.li`
  text-decoration: none;
`;

const LinkItems = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export default Navlinks;
