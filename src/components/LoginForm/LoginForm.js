import * as Yup from 'yup';
import { Formik } from 'formik';
import { Logo } from 'components/Logo/Logo';
import {
  BtnLogin,
  Container,
  ErrorMsg,
  EyeBtn,
  ImgWrap,
  InputWrap,
  Label,
  NavWrap,
  RegisterWrap,
  StyledForm,
  StyledInput,
  StyledLink,
  SuccessMsg,
  Title,
} from 'components/RegisterForm/RegisterForm.styled';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import iPhoneDesktop from '../../images/iPhone_desktop.webp';
import iPhoneDesktop2x from '../../images/iPhone_desktop2x.webp';
import iPhoneMobile from '../../images/iPhone_mobile.webp';
import iPhoneMobile2x from '../../images/iPhone_mobile2x.webp';

export const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Enter a valid password')
      .required('Password is required'),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Container>
      <RegisterWrap>
        <Logo />
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            // Відправка даних на сервер
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <InputWrap>
                <Label htmlFor="email">Mail:</Label>
                <StyledInput
                  type="email"
                  name="email"
                  id="email"
                  className={`special ${
                    errors.email && touched.email ? 'error' : ''
                  }`}
                />
              </InputWrap>
              {errors.email && touched.email && (
                <ErrorMsg name="email" component="div" />
              )}
              {touched.email && !errors.email && (
                <SuccessMsg>Valid Email</SuccessMsg>
              )}
              <InputWrap>
                <Label htmlFor="password">Password:</Label>
                <StyledInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className={`special ${
                    touched.password && errors.password ? 'error' : ''
                  } ${touched.password && !errors.password ? 'success' : ''}`}
                />
                <EyeBtn type="button" onClick={() => handleTogglePassword()}>
                  {touched.password && errors.password ? (
                    <svg width="20" height="20">
                      <use href={`${sprite}#error`} />
                    </svg>
                  ) : touched.password && !errors.password ? (
                    <svg width="20" height="20">
                      <use href={`${sprite}#check`} />
                    </svg>
                  ) : (
                    <svg width="20" height="20">
                      {showPassword ? (
                        <use href={`${sprite}#eye`} />
                      ) : (
                        <use href={`${sprite}#eye-off`} />
                      )}
                    </svg>
                  )}
                </EyeBtn>
              </InputWrap>
              {errors.password && touched.password && (
                <ErrorMsg name="password" component="div" />
              )}
              {touched.password && !errors.password && (
                <SuccessMsg>Password is secure</SuccessMsg>
              )}

              <NavWrap>
                <BtnLogin type="submit">Log In</BtnLogin>
                <StyledLink to="/">Don’t have an account? </StyledLink>
              </NavWrap>
            </StyledForm>
          )}
        </Formik>
      </RegisterWrap>
      <ImgWrap>
        <picture>
          <source
            srcSet={`${iPhoneDesktop} 1x, ${iPhoneDesktop2x} 2x`}
            media="(min-width: 1440px)"
          />
          <source
            srcSet={`${iPhoneMobile} 1x, ${iPhoneMobile2x} 2x`}
            media="(max-width: 375px)"
          />
          <img src={iPhoneMobile} alt="iPhone 15 Black" width="255" />
        </picture>
      </ImgWrap>
    </Container>
  );
};
