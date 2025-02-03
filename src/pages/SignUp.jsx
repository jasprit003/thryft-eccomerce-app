import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SPACING } from '../constants';

const SignUp = () => {
  const auth = useAuth();
  console.log('Auth context:', auth);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);

    if (formData.password !== formData.confirmPassword) {
      console.log('Password mismatch');
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      console.log('Attempting to create account...');
      const result = await signup(
        formData.email,
        formData.password,
        formData.name
      );
      console.log('Signup successful:', result);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      setError('Failed to create an account: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <FormContainer>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </InputGroup>
          <SubmitButton
            type="submit"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </SubmitButton>
        </Form>
        <Footer>
          <Text>Already have an account?</Text>
          <StyledLink to="/signin">Sign in</StyledLink>
        </Footer>
      </FormContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACING.margin};
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border: 1px solid #e8e3e8;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e8e3e8;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 14px;
`;

const Text = styled.span`
  color: #666;
  margin-right: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  background-color: #fff5f5;
  border: 1px solid #fc8181;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 14px;
  border-radius: 4px;
`;

export default SignUp;
