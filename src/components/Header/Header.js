import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Logo } from 'components/Logo/Logo';

import {
  BtnLogout,
  BtnLogoutMobile,
  BurgerMenuBtn,
  Container,
  MobileMenu,
  UserBar,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const { user, isLoggedIn } = useAuth();
  const userName = user.name ? user.name.slice(0, 1) : 'User';

  return (
    <header>
      <Container>
        <Logo />
        <Navigation />
        {isLoggedIn && (
          <UserBar>
            <div>
              <span>{userName}</span>
            </div>
            <h4>{user.name}</h4>
            <BtnLogout onClick={handleLogOut}>Log Out</BtnLogout>
          </UserBar>
        )}

        <BurgerMenuBtn onClick={toggleMenu} $isOpen={isMenuOpen}>
          <svg width="28" height="28">
            {isMenuOpen ? (
              <use href={`${sprite}#x`} />
            ) : (
              <use href={`${sprite}#menu`} />
            )}
          </svg>
        </BurgerMenuBtn>

        {isMenuOpen && (
          <MobileMenu $isOpen={isMenuOpen}>
            <Navigation isOpen={isMenuOpen} />
            {isLoggedIn && (
              <BtnLogoutMobile onClick={handleLogOut}>Log out</BtnLogoutMobile>
            )}
          </MobileMenu>
        )}
      </Container>
    </header>
  );
};
