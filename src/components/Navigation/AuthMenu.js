import {
  NavMenu,
  NavMobile,
  StyledLink,
} from 'components/Header/Header.styled';


export const AuthMenu = ({ isOpen }) => {

  return !isOpen ? (
    <NavMenu>
      <li>
        <StyledLink to="/register">Register</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">LogIn</StyledLink>
      </li>
    </NavMenu>
  ) : (
    <NavMobile>
      <li>
        <StyledLink to="/register">Register</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">LogIn</StyledLink>
      </li>
    </NavMobile>
  );
};
