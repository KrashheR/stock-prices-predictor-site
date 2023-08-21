import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: ${(props) => props.theme.fontSizeDefault};
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
    background-size: contain;
    background-color: ${props => props.theme.colors.bg};
  }

  @font-face {
    font-family: "Montserrat-Regular";
    src: local("Montserrat Regular"),
      local("Montserrat-Regular"),
      url("../assets/fonts/Montserrat-Regular.woff2") format("woff2"),
      url("../assets/fonts/Montserrat-Regular.woff") format("woff"),
      url("../assets/fonts/Montserrat-Regular.ttf") format("ttf"),
      url("../assets/fonts/Montserrat-Regular.eot") format("eot"),
      url("../assets/fonts/Montserrat-Regular.svg") format("svg");
    font-weight: 400;
  };

  @font-face {
    font-family: "Montserrat-Light";
    src: local("Montserrat Light"),
      local("Montserrat-Light"),
      url("../assets/fonts/Montserrat-Light.woff2") format("woff2"),
      url("../assets/fonts/Montserrat-Light.woff") format("woff"),
      url("../assets/fonts/Montserrat-Light.ttf") format("ttf"),
      url("../assets/fonts/Montserrat-Light.eot") format("eot"),
      url("../assets/fonts/Montserrat-Light.svg") format("svg");
    font-weight: 300;
  };

  @font-face {
    font-family: "Montserrat-Bold";
    src: local("Montserrat Bold"),
      local("Montserrat-Bold"),
      url("../assets/fonts/Montserrat-Bold.woff2") format("woff2"),
      url("../assets/fonts/Montserrat-Bold.woff") format("woff"),
      url("../assets/fonts/Montserrat-Bold.ttf") format("ttf"),
      url("../assets/fonts/Montserrat-Bold.eot") format("eot"),
      url("../assets/fonts/Montserrat-Bold.svg") format("svg");
    font-weight: 700;
  };
`;
