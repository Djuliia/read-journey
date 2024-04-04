import { createGlobalStyle, css } from 'styled-components';
import 'modern-normalize';
import { theme } from 'theme';

export const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
     
   }

  body {
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-display: swap;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.bg};
  }

 h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
      }

  button {
    font-family: inherit;
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #262626 inset;

}

input:-webkit-autofill {
  -webkit-text-fill-color: ${theme.colors.primary} !important;
}

`;

export const containerStyles = css`
  margin: 0 auto;
  padding: 20px;
  ${'' /* display: flex; */}

  @media screen and (max-width: 767px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
