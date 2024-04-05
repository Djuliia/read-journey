import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid rgba(249, 249, 249, 0.2);
    transition: border ${theme.transition};
    &:hover {
      border: 1px solid ${theme.colors.primary};
    }

    svg {
      width: 16px;
      height: 16px;
      stroke: rgba(249, 249, 249, 0.2);
      transition: fill ${theme.transition};
      &:hover {
        stroke: ${theme.colors.primary};
      }
    }
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const SliderContainer = styled.div`
  width: 295px;
  .slick-slider {
    overflow: hidden;
    .slick-track {
      margin: inherit;
    }

    .slick-list {
      width: calc(100% + 21px);
    }
  }
  @media screen and (min-width: 768px) {
    width: 624px;
    .slick-list {
      width: calc(100% + 25px);
    }
  }
  @media screen and (min-width: 1280px) {
    width: 807px;
  }
`;

export const BookItem = styled.div`
  margin-right: 21px;
  width: 137px;

  @media screen and (min-width: 768px) {
    margin-right: 25px;
    margin-top: 27px;
  }

  img {
    border-radius: 8px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.29;
    margin-bottom: 2px;
  }

  p {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    color: ${theme.colors.light};
  }
`;

export const HelperWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    margin-bottom: -7px;
  }
`;
