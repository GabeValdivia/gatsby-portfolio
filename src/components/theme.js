import React from 'react';
import { createGlobalStyle } from 'styled-components'

const LightTheme = createGlobalStyle`
  :root {
    --bg-color: #fff;
    --text-color: rgb(10, 10, 10);
    --blog-gray-color: rgb(80, 80, 80);
    --background-image: linear-gradient(90deg, rgba(10, 10, 10, 0.4), rgb(10, 10, 10, 0.4)), url(${props => props.backgroundImage});
    --background-background: #fff;
  }
`;

const DarkTheme = createGlobalStyle`
  :root {
    --bg-color: rgb(10, 10, 10);
    --text-color: #fff;
    --blog-gray-color: rgb(180, 180, 180);
    --background-image: linear-gradient(90deg, rgba(10, 10, 10, 0.6), rgb(10, 10, 10, 1)), url(${props => props.backgroundImage});
    --background-background: linear-gradient(0deg, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0.6)),
      url(${props => props.backgroundImage});
    --height: 50vh;
  }

  #display h1 {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
  }
  #blog-display h1 {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
  }
  .projects section {
    background: rgb(20, 20, 20);
  }
  #blog_section section {
    background: rgb(20, 20, 20);
  }
`;

const Theme = ({ theme, backgroundImage }) => theme === "light"
  ? <LightTheme backgroundImage={backgroundImage} />
  : <DarkTheme backgroundImage={backgroundImage} />

export default Theme;
