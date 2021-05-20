import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.2;
    color: #202020;
    margin: 0;
  }
  
  input,button,textarea{
    font-family: 'Roboto', sans-serif;
  }
  
  
`;

export {
  GlobalStyle
};
