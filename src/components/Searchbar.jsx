import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';
import { useNavigate } from 'react-router-dom';

import products from '../products';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (results.length > 0) {
        navigate(`/product/${results[0]._id}`);
      } else {
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      }
      setSearchTerm('');
    }
  };

  return (
    <SearchContainer>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search products"
        />
        <SearchButton type="submit">
          <SearchIcon
            strokeWidth={1.5}
            size={18}
          />
        </SearchButton>

        {results.length > 0 && (
          <ResultsDropdown>
            {results.map((product) => (
              <ResultItem
                key={product._id}
                onClick={() => {
                  navigate(`/product/${product._id}`);
                  setSearchTerm('');
                }}
              >
                <ProductName>{product.name}</ProductName>
                <ProductPrice>₹{product.price}</ProductPrice>
              </ResultItem>
            ))}
          </ResultsDropdown>
        )}
      </Form>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  // position: relative;
  // width: 300px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 32px 8px 12px;
  // border: 1px solid #e8e3e8;
  border: none;
  border-bottom: 1px solid #e8e3e8;
  // border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    border: none;
  }

  &::placeholder {
    color: #888;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled(Search)`
  color: #666;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

const ResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e8e3e8;
  // border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
`;

const ResultItem = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f8f8;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

const ProductName = styled.span`
  font-size: 14px;
  color: #333;
`;

const ProductPrice = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export default Searchbar;
