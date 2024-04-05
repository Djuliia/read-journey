import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TempList = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  color: #1ecbf7;
  & li:is(:hover, :focus) {
    color: yellow;
  }
`;

export default function HomePage() {
  // return <Recommended />;
  return (
    <>
      <h2>Temporary Navigation</h2>
      <TempList>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/recommended">Recommended</NavLink>
        </li>
        <li>
          <NavLink to="/library">My Library</NavLink>
        </li>

        <li>
          <NavLink to="*">404</NavLink>
        </li>
      </TempList>
    </>
  );
}
