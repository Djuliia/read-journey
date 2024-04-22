import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    max-width: 313px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${theme.colors.light};
`;

export const StarWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 80px;
  height: 80px;
  background-color: #262626;
  border-radius: 50%;
  font-size: 32px;
  font-weight: 500;
  line-height: 1;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    width: 100px;
    height: 100px;
    margin-bottom: 52px;
    font-size: 50px;
    line-height: 1.4;
  }
`;
