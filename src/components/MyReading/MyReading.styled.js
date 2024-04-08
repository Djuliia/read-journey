import styled from 'styled-components';
import { theme } from 'theme';

export const BookWrap = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 146px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 317px;
  }

  img {
    margin: 0 auto;
    border-radius: 8px;
    @media screen and (min-width: 768px) {
      width: 169px;
    }
  }
  h3 {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.29;
    letter-spacing: -0.02em;
    overflow-wrap: break-word;
    @media screen and (min-width: 768px) {
      width: 317px;
      margin-top: 25px;
      font-size: 20px;
      line-height: 1;
    }
  }
  p {
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${theme.colors.light};
    overflow-wrap: break-word;
    @media screen and (min-width: 768px) {
      width: 317px;
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 1.29;
    }
  }

  button {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #f9f9f9;
    background-color: ${theme.colors.secondary};

    @media screen and (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const BtnStart = styled.div`
  width: 30px;
  height: 30px;
  background: #e90516;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const BtnStop = styled.div`
  width: 15px;
  height: 15px;
  background: #e90516;
  border-radius: 3px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
