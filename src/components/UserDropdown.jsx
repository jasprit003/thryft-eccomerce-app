import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { User, LogOut, ChevronDown } from 'react-feather';
import { useAuth } from '../context/AuthContext';

const UserDropdown = () => {
  const { currentUser, signout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await signout();
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to sign out. Please try again.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!currentUser) {
    return (
      <AuthLink to="/signin">
        <UserIcon>
          <User
            strokeWidth={1.5}
            size={20}
          />
        </UserIcon>
        <span>Sign In</span>
      </AuthLink>
    );
  }

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownToggle onClick={() => setIsOpen(!isOpen)}>
        <UserAvatar>
          {currentUser.displayName
            ? currentUser.displayName[0].toUpperCase()
            : currentUser.email[0].toUpperCase()}
        </UserAvatar>
        <ChevronDown size={16} />
      </DropdownToggle>

      {isOpen && (
        <DropdownMenu>
          <UserInfo>
            <UserAvatar>
              {currentUser.displayName
                ? currentUser.displayName[0].toUpperCase()
                : currentUser.email[0].toUpperCase()}
            </UserAvatar>
            <UserDetails>
              <UserName>
                {currentUser.displayName || currentUser.email.split('@')[0]}
              </UserName>
              <UserEmail>{currentUser.email}</UserEmail>
            </UserDetails>
          </UserInfo>

          <DropdownDivider />

          <DropdownItem
            as={Link}
            to="/profile"
          >
            <User size={16} />
            <span>Profile</span>
          </DropdownItem>

          <DropdownItem
            as="button"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </DropdownItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  background-color: white;
  border: 1px solid #e2e8f0;
  // border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 10;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const UserEmail = styled.span`
  font-size: 14px;
  color: #718096;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #475569;
`;

const DropdownDivider = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 16px 0;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  color: inherit;
  text-decoration: none;
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f7fafc;
  }

  svg {
    color: #718096;
  }
`;

const AuthLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const UserIcon = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
`;

export default UserDropdown;
