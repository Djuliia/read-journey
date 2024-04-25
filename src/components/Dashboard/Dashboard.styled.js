import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: ${theme.colors.secondary};

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 20px 20px;
    height: 651px;
  }
`;
