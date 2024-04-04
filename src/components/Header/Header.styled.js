import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${theme.colors.secondary};
  border-radius: 15px;
  @media screen and (max-width: 767px) {
    padding-right: 58px;
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    padding: 16px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;

export const UserBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(249, 249, 249, 0.2);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #262626;

  span {
    font-weight: 700;
    line-height: 1;
  }

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const BurgerMenuBtn = styled.button`
  position: absolute;
  z-index: 2;
  top: 22px;
  right: 20px;
  display: block;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  padding: 34px 40px 40px;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #262626;
  transition: opacity ${theme.transition};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    margin-right: 94px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
    margin-right: 219px;
  }
`;

export const NavMobile = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${theme.colors.light};
  &.active,
  &:hover {
    color: ${theme.colors.primary};
  }

  &.active::after,
  &:hover::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background-color: ${theme.colors.active};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

const btnLogoutStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: 0.001em;
  color: ${theme.colors.primary};
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
  }
`;

export const BtnLogoutMobile = styled.button`
  ${btnLogoutStyles}
  align-self: flex-end;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 12px 28px;
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const BtnLogout = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    ${btnLogoutStyles}
    display: flex;
  }
`;

export const UserActions = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
