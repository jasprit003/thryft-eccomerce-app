import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';
import Logo from './Logo';
import Searchbar from './Searchbar';
import Cart from './Cart';
import UserDropdown from './UserDropdown';

const Navbar = () => {
  return (
    <Wrapper>
      <Navlinks />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <UserWrapper>
        <Searchbar />
        <Cart />
        <UserDropdown />
      </UserWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  position: relative;
  padding: 0 20px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export default Navbar;
