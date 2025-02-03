import React from 'react';
import styled from 'styled-components';

import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import ProductCard from '../components/ProductCard/ProductCard';
import CartComponent from '../components/CartComponent';

import products from '../products';

const Home = () => {
  const trendingProducts = products.filter(
    (product) => product.tagLine === 'trending'
  );

  const latestProducts = products.filter(
    (product) => product.tagLine == 'latest'
  );
  return (
    <>
      {/* <CartComponent /> */}
      <HeroSection />
      <ProductGrid headline={'Trending'}>
        {trendingProducts.map((product) => (
          <ProductCard
            product={product}
            key={product._id}
          />
        ))}
      </ProductGrid>
      <ProductGrid headline={'latest'}>
        {latestProducts.map((product) => (
          <ProductCard
            product={product}
            key={product._id}
          />
        ))}
      </ProductGrid>
    </>
  );
};

export default Home;
