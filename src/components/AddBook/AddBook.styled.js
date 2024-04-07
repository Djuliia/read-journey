import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const RecommendedWrap = styled.div`
  padding: 20px 21px;
  border-radius: 12px;
  background-color: #262626;
  @media screen and (min-width: 768px) {
    padding: 26px 40px 27px 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px;
  }
`;

export const BookList = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

export const BookItem = styled.li`
  width: 71px;

  img {
    border-radius: 8px;
    margin-bottom: 8px;
  }

  p,
  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p {
    white-space: nowrap;
    color: ${theme.colors.light};
    margin-top: 2px;
  }
`;
