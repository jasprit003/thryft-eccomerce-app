import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Accordion = ({ detail }) => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleOption = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!detail) return null;

  return (
    <Wrapper>
      <ListWrapper>
        {detail.productDetails.map((item, index) => (
          <ListItem key={index}>
            <Button
              onClick={() => toggleOption(index)}
              $isOpen={openIndex === index}
            >
              {item.title}
            </Button>
            <Description $isOpen={openIndex === index}>
              <p>{item.body}</p>
            </Description>
          </ListItem>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div``;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #ddd;
`;

const Description = styled.div`
  padding: 10px;
  background-color: #f8f8f8;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  animation: ${(props) =>
    props.$isOpen
      ? css`
          ${appear} 250ms ease-in;
        `
      : 'none'};
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: white;
  border: none;
  text-align: left;

  &::after {
    content: '>';
    transition: transform 0.2s ease;
    transform: ${(props) => (props.$isOpen ? 'rotate(90deg)' : 'rotate(0)')};
  }
`;

export default Accordion;
