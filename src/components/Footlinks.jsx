import React from 'react';
import styled from 'styled-components';

const Footlinks = ({ linkHeading, link1, link2, link3, link4 }) => {
  return (
    <Wrapper>
      <Heading>{linkHeading}</Heading>
      <List>
        <ListItem>{link1}</ListItem>
        <ListItem>{link2}</ListItem>
        <ListItem>{link3}</ListItem>
        <ListItem>{link4}</ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
`;
const Heading = styled.p`
  font-size: 24px;
  padding-bottom: 28px;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  padding-bottom: 10px;
  // text-decoration: underline;
  color: grey;
`;

export default Footlinks;
