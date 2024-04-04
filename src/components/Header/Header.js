import { Logo } from 'components/Logo/Logo';
import {
  BtnLogout,
  BtnLogoutMobile,
  BurgerMenuBtn,
  Container,
  MobileMenu,
  NavMenu,
  NavMobile,
  StyledLink,
  UserActions,
  UserBar,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <Container>
        <Logo />
        <BurgerMenuBtn onClick={toggleMenu}>
          <svg width="28" height="28">
            {isMenuOpen ? (
              <use href={`${sprite}#x`} />
            ) : (
              <use href={`${sprite}#menu`} />
            )}
          </svg>
        </BurgerMenuBtn>
        {isMenuOpen ? (
          <MobileMenu $isOpen={isMenuOpen}>
            <NavMobile>
              <li>
                <StyledLink to="/recommended">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/library">My library</StyledLink>
              </li>
            </NavMobile>
            <BtnLogoutMobile>Log Out</BtnLogoutMobile>
          </MobileMenu>
        ) : (
          <UserActions>
            <NavMenu>
              <li>
                <StyledLink to="/recommended">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/library">My library</StyledLink>
              </li>
            </NavMenu>
            <UserBar>
              <span>U</span>
            </UserBar>
            <BtnLogout>Log Out</BtnLogout>
          </UserActions>
        )}
      </Container>
    </header>
  );
};
