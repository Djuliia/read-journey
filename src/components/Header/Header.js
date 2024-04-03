import { Logo } from 'components/Logo/Logo';

import { NavLink } from 'react-router-dom';
import { UserBar, UserNav } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <Logo />
      <UserNav>
        <NavLink to="/recommended">Recommended</NavLink>
        <NavLink to="/library">My Library</NavLink>
      </UserNav>
      <UserBar>User bar</UserBar>
      <button>Log Out</button>
    </header>
  );
};
