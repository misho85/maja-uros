// @ts-nocheck
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import fonts from '~src/assets/fonts/fonts.css';

export default createGlobalStyle`
  ${normalize}
  ${fonts}

  [hidden] {
    display: none !important;
    -webkit-appearance: initial;
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
  }

  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    /* font-variant-ligatures: none; */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: ${p => p.theme.fonts.body};
    font-weight: normal;
    font-size: 1em;
    line-height: 1.2;
  }

  h1, h2, h3, h4, h4, h6  {
    line-height: 1.2;
    font-weight: 700;
    margin: 0;
    margin-bottom: 1em;
  }

  h1 {
    font-family: ${p => p.theme.fonts.heading1};
    font-size: 4.5em;
    color: white;
  }

  h2 {
    font-family: ${p => p.theme.fonts.heading};
    font-size: 3em;
    color: white;
  }

  h3 {
    font-family: ${p => p.theme.fonts.heading};
    font-size: 2.25em;
    text-transform: uppercase;
  }

  h4 {
    font-family: ${p => p.theme.fonts.heading};
    font-size: 1.75em;
    text-transform: uppercase;
  }

  h5 {
    font-family: ${p => p.theme.fonts.heading};
    font-size: 1.2em;
    text-transform: uppercase;
  }

   h6 {
    font-family: ${p => p.theme.fonts.heading};
    font-size: 0.875em;
    text-transform: uppercase;
  }

  p {
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-family: ${p => p.theme.fonts.body};
  }

  strong {
    font-weight: bold;
  }

  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0
  }

  li {
    font-size: 1.3125em;
    line-height: 1.2;
  }

  button,
  input,
  textarea,
  select {
    color: ${p => p.theme.colors.gray80};
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
    &:focus {
      outline: none;
      outline: none;
    }
  }

  a {
    text-decoration: none;
    color: white;
    &:hover,
    &:active,
    &:focus {
      outline:0;
    }
  }

  button {
    padding: 0;
    font-family: ${p => p.theme.fonts.button};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }

  /* Scrolling related clases */
  .menu-open {
    overflow: hidden;
  }

`;
