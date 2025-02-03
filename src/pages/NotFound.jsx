import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Oops! Page Not Found</ErrorMessage>
        <ErrorDescription>
          The page you are looking for doesn't exist or has been moved.
        </ErrorDescription>
        <ReturnLink to="/">Return to Homepage</ReturnLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);
  padding: 2rem;
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  color: hsl(0, 0%, 0%);
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ErrorMessage = styled.h2`
  font-size: 2rem;
  color: hsl(0, 0%, 20%);
  margin-bottom: 1rem;
`;

const ErrorDescription = styled.p`
  font-size: 1rem;
  color: hsl(0, 0%, 40%);
  margin-bottom: 2rem;
`;

const ReturnLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: hsl(0, 0%, 0%);
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: hsl(0, 0%, 20%);
  }
`;

export default NotFound;
