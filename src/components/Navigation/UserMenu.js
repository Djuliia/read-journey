import {
  NavMenu,
  NavMobile,
  StyledLink,
} from 'components/Header/Header.styled';

export const UserMenu = ({ isOpen }) => {
  return !isOpen ? (
    <NavMenu>
      <li>
        <StyledLink to="/recommended">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/library">My library</StyledLink>
      </li>
    </NavMenu>
  ) : (
    <NavMobile>
      <li>
        <StyledLink to="/recommended">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/library">My library</StyledLink>
      </li>
    </NavMobile>
  );
};
