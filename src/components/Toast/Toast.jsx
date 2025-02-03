import React from 'react';
import styled, { keyframes } from 'styled-components';

const Toast = ({ children, isVisible }) => {
  if (!isVisible) return null;

  return (
    <ToastContainer>
      <Checkmark>✅</Checkmark>
      {children}
    </ToastContainer>
  );
};

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateX(20px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateX(20px); }
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 20px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 16px 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${fadeInOut} 3s ease forwards;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const Checkmark = styled.span`
  color: #4caf50;
  font-weight: bold;
  font-size: 1.2em;
`;

export default Toast;
