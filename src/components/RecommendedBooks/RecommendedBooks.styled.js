import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  padding: 40px 20px;
  border-radius: 30px;
  background-color: ${theme.colors.secondary};

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14;
  }
`;

export const SliderBtnWrap = styled.div`
  /* display: flex;

  gap: 48px;
  font-family: Biro Script Plus;
  font-size: 24px;
  line-height: 1;
  button {
    margin-top: 24px;
    color: ${theme.colors.primary};
    background-color: transparent;
    border: none;
    transition: color ${theme.transition};
    &:hover {
      color: ${theme.colors.accent};
    }
  } */
`;

export const SliderContainer = styled.div`
  width: 295px;
  @media screen and (min-width: 768px) {
    width: 592px;
  }
  @media screen and (min-width: 1280px) {
    width: 1032px;
  }
`;
export const BookItem = styled.div``;
