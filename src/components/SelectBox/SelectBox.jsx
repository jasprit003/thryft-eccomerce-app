import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectBox = ({ productData, selectedSize, setSelectedSize }) => {
  if (!productData?.size?.length) return null;

  return (
    <Wrapper>
      <Select
        id="size-select"
        name="size"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        aria-label="Select size"
        disabled={!productData.size.length}
      >
        <Option
          value=""
          disabled
        >
          Select Size
        </Option>
        {productData.size.map((size) => (
          <Option
            key={size}
            value={size}
          >
            {size}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

SelectBox.propTypes = {
  productData: PropTypes.shape({
    size: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  selectedSize: PropTypes.string.isRequired,
  setSelectedSize: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 150px;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  background: #f8f8f8;
  padding: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Option = styled.option`
  padding: 8px;
  font-size: 1rem;
`;

export default SelectBox;
