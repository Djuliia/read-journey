import styled from 'styled-components';
import { theme } from 'theme';

export const AboutBookWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 233px;

  @media screen and (min-width: 768px) {
    width: 398px;
  }
`;

export const BookItem = styled.div`
  text-align: center;
  img {
    margin: 0 auto;
    width: 140px;
    margin-bottom: 16px;
    border-radius: 8px;
    @media screen and (min-width: 768px) {
      width: 153px;
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.17;
    color: #686868;
  }

  span {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const BtnAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  background-color: transparent;
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    margin-top: 32px;
  }
`;
