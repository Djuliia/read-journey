import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const FormTitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 8px;
  margin-left: 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

export const BtnApply = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  background-color: transparent;
  color: ${theme.colors.primary};
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  @media screen and (min-width: 768px) {
    max-width: 253px;
    margin-bottom: 40px;
  }
`;

export const DescWrap = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #262626;
`;

export const DescList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DescItem = styled.li`
  display: flex;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    gap: 10px;
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border-radius: 50%;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    flex-shrink: 0;

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
      font-size: 20px;
    }
  }

  p,
  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.29;
    letter-spacing: 0.02em;
  }
  span {
    color: ${theme.colors.light};
  }
`;

export const LinkWrap = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const BookWrap = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 15px 20px 14px 20px;
    border-radius: 12px;
    background-color: #262626;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
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
