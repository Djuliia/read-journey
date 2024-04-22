import styled from 'styled-components';
import { theme } from 'theme';
import chevron from '../../images/chevron-down.svg';

export const Container = styled.div`
  padding: 40px 20px;
  width: 100%;
  min-height: 407px;
  border-radius: 30px;
  background-color: ${theme.colors.secondary};

  @media screen and (min-width: 768px) {
    padding: 40px;
    min-height: 518px;
  }

  @media screen and (min-width: 1440px) {
    min-height: 651px;
    width: 807px;
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

export const Select = styled.select`
  padding: 12px 14px;
  width: 120px;
  border: 1px solid #3e3e3e;
  border-radius: 12px;
  outline: none;
  appearance: none;
  overflow: hidden;
  background: right 14px center no-repeat url(${chevron}), transparent;
  color: ${theme.colors.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  option {
    color: ${theme.colors.light};
    background-color: #262626;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    width: 153px;
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const NoBookWrap = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 197px;
  margin-top: 63px;
  @media screen and (min-width: 768px) {
    margin-top: 86px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 147px;
    width: 274px;
  }

  div {
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #262626;
    font-size: 50px;
    font-weight: 500;
    line-height: 1;

    @media screen and (min-width: 768px) {
      width: 130px;
      height: 130px;
      margin-bottom: 20px;
      font-size: 70px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
  }

  span {
    color: ${theme.colors.light};
  }
`;

export const HelperWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  flex-basis: calc((100% - 21px) / 2);
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const AddedItem = styled.li`
  width: 137px;
  img {
    width: 137px;
    height: 208px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 89px;
  }

  h3 {
    margin-bottom: 2px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.29;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  p {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.29;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: ${theme.colors.light};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(232, 80, 80, 0.1);
    border: 1px solid rgba(232, 80, 80, 0.2);
    border-radius: 50%;
    width: 28px;
    height: 28px;
    transition: ${theme.transition};
    &:hover {
      border: 1px solid ${theme.colors.error};
    }

    svg {
      stroke: ${theme.colors.error};
    }
  }
`;
