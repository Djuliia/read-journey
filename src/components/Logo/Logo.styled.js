import styled from 'styled-components';

export const LogoWrap = styled.div`
  display: flex;
  gap: 4px;

  p {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.02em;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
