import { createGlobalStyle } from 'styled-components';
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
`;
