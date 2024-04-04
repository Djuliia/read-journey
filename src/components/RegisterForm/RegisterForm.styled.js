import { ErrorMessage, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }
`;

export const RegisterWrap = styled.div`
  /* width: 335px; */
  padding: 20px 20px 40px;
  border-radius: 30px;
  background-color: ${theme.colors.secondary};

  @media screen and (min-width: 768px) {
    padding: 40px 168px 214px 64px;
    /* min-height: 960px; */
    /* width: 704px; */
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
    /* height: 100%;
    width: 100%; */
  }
`;

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0005em;

  span {
    color: rgba(227, 227, 227, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 444px;
    margin-top: 157px;
    margin-bottom: 40px;
    font-size: 64px;
    line-height: 0.94;
    letter-spacing: 0.0003;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 295px;
  &:not(:first-of-type) {
    margin-top: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 472px;
    &:not(:first-of-type) {
      margin-top: 14px;
    }
  }
`;

export const StyledInput = styled(Field)`
  width: 295px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid transparent;
  outline: none;
  background-color: #262626;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.002em;
  color: ${theme.colors.primary};
  transition: ${theme.transition};
  &[name='name'] {
    padding-left: 59px;
  }
  &[name='email'] {
    padding-left: 49px;
  }
  &[name='password'] {
    padding-left: 78px;
  }

  &:hover {
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  &.error {
    border: 1px solid ${theme.colors.error};
  }

  &.success {
    border: 1px solid ${theme.colors.status};
  }

  @media screen and (min-width: 768px) {
    width: 472px;
    padding: 16px 14px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.001em;
    &[name='name'] {
      padding-left: 65px;
    }
    &[name='email'] {
      padding-left: 53px;
    }
    &[name='password'] {
      padding-left: 86px;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.002em;
  color: ${theme.colors.light};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.001em;
  }
`;

export const EyeBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
`;

export const SuccessMsg = styled.div`
  color: ${theme.colors.status};
  margin-left: 14px;
  margin-top: 4px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-left: 14px;
  margin-top: 4px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: ${theme.colors.error};

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const ImgWrap = styled.div`
  padding: 20px 40px 0px 40px;
  border-radius: 30px;
  background-color: ${theme.colors.secondary};
  width: 100%;
  @media screen and (min-width: 768px) {
    /* display: none; */
  }
  @media screen and (min-width: 1440px) {
    display: block;
    padding: 80px 97px 0px 98px;
  }

  img {
    margin: 0 auto;
    width: 255px;
    @media screen and (min-width: 1440px) {
      width: 411px;
    }
  }
`;

export const Img = styled.picture``;

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 29px;
  border-radius: 30px;
  border: 1px solid transparent;
  background-color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: 0.001em;
  color: ${theme.colors.secondary};
  transition: ${theme.transition};

  @media screen and (min-width: 768px) {
    padding: 16px;
    font-size: 20px;
    line-height: 1;
  }

  &:hover {
    border: 1px solid rgba(249, 249, 249, 0.2);
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
  }
`;

export const NavWrap = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 82px;
    gap: 20px;
  }
`;

export const BtnRegistration = styled.button`
  ${buttonStyles}
  width: 140px;

  @media screen and (min-width: 768px) {
    width: 225px;
  }
`;

export const BtnLogin = styled.button`
  ${buttonStyles}
  width: 131px;
  @media screen and (min-width: 768px) {
    width: 166px;
  }

  @media screen and (min-width: 768px) {
    width: 225px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.002em;
  text-decoration: underline;
  color: ${theme.colors.light};
  transition: ${theme.transition};

  &:hover {
    color: ${theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.001em;
  }
`;
