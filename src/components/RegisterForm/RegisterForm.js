import { Logo } from 'components/Logo/Logo';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import {
  BtnRegistration,
  Container,
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
} from './RegisterForm.styled';
import iPhoneDesktop from '../../images/iPhone_desktop.webp';
import iPhoneDesktop2x from '../../images/iPhone_desktop2x.webp';
import iPhoneMobile from '../../images/iPhone_mobile.webp';
import iPhoneMobile2x from '../../images/iPhone_mobile2x.webp';
import { createGlobalStyle } from 'styled-components';

export const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Enter a valid password')
      .required('Password is required'),
  });
  return (
    <Container>
      <RegisterWrap>
        <Logo />
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
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
                <Label htmlFor="name">Name:</Label>
                <StyledInput
                  type="text"
                  name="name"
                  id="name"
                  className={`special ${
                    errors.name && touched.name ? 'error' : ''
                  }`}
                />
              </InputWrap>
              {errors.name && touched.name && (
                <ErrorMessage name="name" component="div" />
              )}
              {touched.name && !errors.name && (
                <SuccessMsg>Valid Name</SuccessMsg>
              )}
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
                <ErrorMessage name="email" component="div" />
              )}
              {touched.email && !errors.email && (
                <SuccessMsg>Valid Email</SuccessMsg>
              )}
              <InputWrap>
                <Label htmlFor="password">Password:</Label>
                <StyledInput
                  type="text"
                  name="password"
                  id="password"
                  className={`special ${
                    errors.password && touched.password ? 'error' : ''
                  }`}
                />
              </InputWrap>
              {errors.password && touched.password && (
                <ErrorMessage name="password" component="div" />
              )}
              {touched.password && !errors.password && (
                <SuccessMsg>Password is secure</SuccessMsg>
              )}
              <NavWrap>
                <BtnRegistration type="submit">Registration</BtnRegistration>
                <StyledLink to="/login">Already have an account?</StyledLink>
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
