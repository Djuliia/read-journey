import { styled, css } from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const btnStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;
export const BtnIcon = styled.button`
  ${btnStyles};
  svg {
    stroke: #686868;
    fill: transparent;
  }

  &:hover,
  &:active {
    svg {
      stroke: ${theme.colors.primary};
    }
  }
`;

export const DiarySection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 211px;
  overflow-y: auto;
  scroll-padding: 0 6px;
  padding: 16px;
  border-radius: 12px;
  background: #262626;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 289px;
  }

  @media screen and (min-width: 768px) {
    height: 252px;
  }

  @media screen and (min-width: 768px) {
    height: 373px;
  }
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  div {
    display: flex;
    gap: 9px;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
      gap: 10px;
    }
  }

  h4 {
    margin-left: 25px;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      margin-left: 30px;
      margin-bottom: 8px;
      font-size: 20px;
      line-height: 1;
    }
  }

  span {
    margin-left: 25px;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${theme.colors.light};

    @media screen and (min-width: 768px) {
      margin-left: 30px;
      font-size: 12px;
      line-height: 1.17;
    }
  }
  button {
    ${btnStyles}
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 0.02em;
  transition: color ${theme.transition};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.light};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const GraphList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;
  color: ${theme.colors.light};

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  h4 {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.02;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.29;
    }
  }

  p {
    width: 43px;
    margin-top: 7px;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -2%;

    @media screen and (min-width: 768px) {
      width: 55px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.17;
    }
  }

  button {
    background-color: transparent;
    border: none;

    &:hover {
      svg {
        stroke: ${theme.colors.error};
      }
    }

    svg {
      transform: translateY(-4px);
      transition: ${theme.transition};
      stroke: ${theme.colors.light};
      fill: transparent;
    }
  }
`;

export const GraphWrap = styled.div`
  margin-top: 19px;
  margin-right: 6px;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    margin-right: 8px;
  }
`;

export const HelperWrap = styled.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const StatSection = styled.div`
  padding: 20px;
  width: 100%;
  border-radius: 12px;
  background: #262626;
  @media screen and (min-width: 768px) {
    padding: 28px;
    width: 321px;
  }

  h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -2%;
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
      font-size: 20px;
      line-height: 1;
    }
  }

  p {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${theme.colors.light};
    @media screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 1.17;
    }
  }
`;

export const StatusBlock = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background-color: ${theme.colors.status};
`;

export const StatusWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProgressBarWrap = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 138px;
  }
  @media screen and (min-width: 1440px) {
    width: 168px;
    height: 168px;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 15px;

  h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1;
    }
  }

  p {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    color: ${theme.colors.light};
    @media screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 1.17;
    }
  }
`;
