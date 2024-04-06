import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 233px;
  @media screen and (min-width: 768px) {
    width: 240px;
  }

  div {
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 500;
    line-height: 1;

    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
      font-size: 68px;
    }
  }
  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      margin-bottom: 14px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    color: ${theme.colors.light};
  }

  span {
    color: ${theme.colors.primary};
  }
`;
