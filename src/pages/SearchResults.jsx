import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import products from '../products';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('q');

  const filteredProducts = React.useMemo(() => {
    if (!searchQuery) return [];
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <Container>
      <Title>Search Results for "{searchQuery}"</Title>
      <ResultCount>{filteredProducts.length} products found</ResultCount>

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <ProductImage
              src={product.image[0] + '400'}
              alt={product.name}
            />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>₹{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>

      {filteredProducts.length === 0 && (
        <NoResults>
          <NoResultsText>No products found for "{searchQuery}"</NoResultsText>
          <SuggestionsText>
            Try checking your spelling or using more general terms
          </SuggestionsText>
        </NoResults>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ResultCount = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;
  border: 1px solid #e8e3e8;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-weight: 500;
  color: #666;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
`;

const NoResultsText = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const SuggestionsText = styled.p`
  color: #666;
  font-size: 1rem;
`;

export default SearchResults;
