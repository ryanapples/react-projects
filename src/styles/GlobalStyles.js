import { createGlobalStyle } from 'styled-components';
import variables from './variables';

// declare variable import within createGlobalStyles
// grants access to css helper function (:root) styles

const GlobalStyles = createGlobalStyle`
  ${variables};

  html, body {
    overflow: hidden;
  }
  
  body {
    font-family: var(--font-family);
    margin: 0;
  }

  input, button {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;
