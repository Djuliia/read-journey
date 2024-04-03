import sprite from '../../images/sprite.svg';
import { LogoWrap } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrap>
      <svg width="42" height="17">
        <use href={`${sprite}#logo`} />
      </svg>
      <p>read journey</p>
    </LogoWrap>
  );
};
