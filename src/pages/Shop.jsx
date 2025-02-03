import React from 'react';
import styled from 'styled-components';

import ProductGrid from '../components/ProductGrid/ProductGrid';
import ProductCard from '../components/ProductCard/ProductCard';

import products from '../products';

const Shop = () => {
  console.log(products);
  return (
    <ProductGrid headline={'All products'}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </ProductGrid>
  );
};

export default Shop;
